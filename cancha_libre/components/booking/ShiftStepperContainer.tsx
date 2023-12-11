// Calendar.tsx
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedDate,
  selectSelectedAppointment,
  selectDate,
  toggleAppointment,
  clearAppointments,
} from "../../redux/slices/booking";
import { Button, Input, Typography } from "@mui/material";
import { getSoccerFields } from "../../services/soccerFields";
import { fetchSoccerFieldsFailure, fetchSoccerFieldsRequest, fetchSoccerFieldsSuccess } from "@/redux/slices/soccerFields";
import NotificationModal from "../modal/NotificationModal";
import { isCourtBooked } from "@/utils/functions/booking";

interface Appointment {
  date: string | null;
  time: string | null;
  court: string | null;
}

const generateTimeSlots = () => {
  const timeSlots: string[] = [];
  const startTime = moment().hour(10).minute(0);
  const endTime = moment().hour(24).minute(0);

  while (startTime.isBefore(endTime)) {
    timeSlots.push(startTime.format("HH"));
    startTime.add(1, "hour");
  }
  return timeSlots;
};

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Calendar: React.FC<Props> = ({ handleNext, handleBack }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [soccerFieldsData, setSoccerFieldsData] = useState<any[]>([]);
  const [userData, setUserData] = useState(() => {
    if (typeof window !== 'undefined') {
      // Solo intentar acceder a localStorage en el navegador
      return JSON.parse(localStorage.getItem("user") || "{}");
    } else {
      return {};
    }
  });

  useEffect(() => {
    // Solo suscribirse al evento 'storage' en el navegador
    if (typeof window !== 'undefined') {
      const handleStorageChange = () => {
        setUserData(JSON.parse(localStorage.getItem("user") || "{}"));
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, []);

  console.log('userData', userData)

  const timeSlots = generateTimeSlots();
  const selectedAppointment = useSelector(selectSelectedAppointment);
  const dispatch = useDispatch();

  const fetchDataSoccerFields = async () => {
    try {
      dispatch(fetchSoccerFieldsRequest());
      const response = await getSoccerFields(userData.token);
      setSoccerFieldsData(response);
      dispatch(fetchSoccerFieldsSuccess(response));
    } catch (error) {
      console.error('Error al obtener datos de campos de fútbol:', error);
      dispatch(fetchSoccerFieldsFailure(error));
    }
  };

  useEffect(() => {
    fetchDataSoccerFields();
  }, []); 

  console.log('soccerFieldsData', soccerFieldsData)

  const handleCellClick = (time: string, court: any) => {
    if (selectedDate) {
      dispatch(toggleAppointment({ time, court, soccerFieldsData }));
    } else {
      setisOpen(true);
    }
  };

  const handleNextButton = () => {
    console.log(
      "Enviando la siguiente información al endpoint:",
      selectedAppointment
    );
    handleNext();
  };

  const handleBackButton = () => {
    handleBack();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontFamily={"Aleo"}
          fontWeight={"500"}
          variant="h5"
          color="#FFFFFF"
          sx={{
            borderBottom: "3px solid #FFFFFF",
            display: "inline-block",
          }}
        >
          CALENDARIO DE RESERVAS
        </Typography>

        {/* Calendario para seleccionar la fecha */}
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <Typography
            style={{ color: "#2E2F33", fontWeight: "bold", padding: "0 1rem" }}
          >
            Seleccciona una fecha:{" "}
          </Typography>
          <Input
            type="date"
            value={selectedDate || ""}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              dispatch(selectDate(e.target.value));
            }}
          />
        </div>

        {/* Calendario de Reservas */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Encabezado de los horarios */}
          <div style={{ display: "flex" }}>
            {/* Espacio en la intersección */}
            <div
              style={{
                width: "10rem",
                height: "5rem", // Altura añadida para visualizar la diagonal
                background: `linear-gradient(26deg, #222222 49.5%, transparent 49.5%, transparent 50.5%, #B4FA8A 50.5%)`,
                color: "#B4FA8A",
                border: "0.1px solid #4B4B4B",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  transform: "rotate(0deg)",
                  position: "relative",
                  top: "15%",
                  left: "20%",
                  color: "#4B4B4B",
                  fontFamily: "Amiko,sans-serif",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Horarios
              </div>
              <div
                style={{
                  transform: "rotate(0deg)",
                  position: "relative",
                  top: "40%",
                  right: "20%",
                  color: "#B4FA8A",
                  fontFamily: "Amiko,sans-serif",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Canchas
              </div>
            </div>
            {timeSlots.map((time) => (
              <Typography
                key={time}
                style={{
                  width: "50px",
                  textAlign: "center",
                  backgroundColor: "#B4FA8A",
                  color: "#4B4B4B",
                  fontWeight: "bold",
                  padding: "1rem 0",
                  border: "0.1px solid #4B4B4B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {time}
              </Typography>
            ))}
          </div>

          {/* Celdas del calendario */}
          {soccerFieldsData.map((court: any) => {
           const {size, description} = court
            return(
              <div key={court} style={{ display: "flex" }}>
              {/* Nombre de la cancha */}
              <div  style={{
                  width: "auto",
                  color: "#B4FA8A",
                  backgroundColor: "#222222",
                  textAlign: "center",
                  display: 'flex',
                  flexDirection: 'column',
                  fontSize: '8px',
                  border: "0.1px solid #B4FA8A",
                }}>
              <Typography
                style={{
                  width: "auto",
                  color: "#B4FA8A",
                  backgroundColor: "#222222",
                  textAlign: "center",
                  padding: "0.2rem 0 0 0",
                  fontSize: '8px'
                }}
              >
                {size}
              </Typography>
              <Typography
                style={{
                  width: "10rem",
                  color: "#B4FA8A",
                  backgroundColor: "#222222",
                  textAlign: "center",
                  padding: "0.2rem 0 0 0",
                  fontSize: '8px'
                }}
              >
                {description}
              </Typography>

              </div>
             
              {/* Celdas de horarios */}
              {timeSlots.map((time) => (
                  <div
                  key={time}
                  style={{
                    width: '50px',
                    height: 'auto',
                    border: '0.1px solid #2E2F33',
                    backgroundColor:
                      selectedAppointment &&
                      selectedAppointment.date === selectedDate &&
                      selectedAppointment.time === time &&
                      selectedAppointment.court === court
                        ? '#00CC00'
                        : isCourtBooked(selectedDate, time, court.id, soccerFieldsData)
                        ? '#FF0000'
                        : '#4B4B4B',
                    cursor: isCourtBooked(selectedDate, time, court.id, soccerFieldsData) ? 'not-allowed' : 'pointer',
                    pointerEvents: isCourtBooked(selectedDate, time, court.id, soccerFieldsData) ? 'none' : 'auto',
                  }}
                  onClick={() => handleCellClick(time, court)}
                />
              ))}
              <NotificationModal
                isOpen={isOpen}
                level="warning"
                title="Selecciona una fecha para continuar"
                body=""
                labelOnClick="Entendido"
                setClose={setisOpen}
              />
            </div>
            )
           
})}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          variant="contained"
          onClick={handleBackButton}
          style={{ backgroundColor: "#2E2F33", margin: "1rem 0 0 0" }}
        >
          Atrás
        </Button>
        <Button
          variant="contained"
          onClick={handleNextButton}
          style={{  backgroundColor: !selectedAppointment ? "#E0E0E0" : "#2E2F33", margin: "1rem 0 0 0" }}
          disabled={!selectedAppointment}
        >
          {" "}
          Siguiente
        </Button>
      </div>
    </>
  );
};

export default Calendar;
