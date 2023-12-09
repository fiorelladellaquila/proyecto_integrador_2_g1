// Calendar.tsx
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedDate,
  selectSelectedAppointments,
  selectDate,
  toggleAppointment,
  clearAppointments,
} from "../../redux/slices/booking";
import { Button, Input, Typography } from "@mui/material";
import { getSoccerFields } from "../../services/soccerFields";
import { fetchSoccerFieldsFailure, fetchSoccerFieldsRequest, fetchSoccerFieldsSuccess } from "@/redux/slices/soccerFields";
import NotificationModal from "../modal/NotificationModal";


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
  const timeSlots = generateTimeSlots();
  const selectedAppointments = useSelector(selectSelectedAppointments);
  console.log('selectedAppointments', selectedAppointments)
  const dispatch = useDispatch();

  // Use state para almacenar los datos de soccerFields
  const [soccerFieldsData, setSoccerFieldsData] = useState<any[]>([]);

  // No necesitas inicializar soccerFieldsData aquí

  const fetchDataSoccerFields = async () => {
    try {
      dispatch(fetchSoccerFieldsRequest()); // Opcional: Puedes dispatch un evento para indicar que se está realizando la solicitud
      const response = await getSoccerFields();
      setSoccerFieldsData(response); // Actualiza el estado con los datos obtenidos
      dispatch(fetchSoccerFieldsSuccess(response)); // Puedes dispatch un evento para indicar que la solicitud fue exitosa
    } catch (error) {
      console.error('Error al obtener datos de campos de fútbol:', error);
      dispatch(fetchSoccerFieldsFailure(error)); // Puedes dispatch un evento para indicar que la solicitud falló
    }
  };

  // const fetchDataAppointmentUnavaliable = async () => {
  //   try {
  //     dispatch(fetchAppointmentUnavailableRequest()); // Opcional: Puedes dispatch un evento para indicar que se está realizando la solicitud
  //     const response = await getSoccerFields();
  //     setSoccerFieldsData(response); // Actualiza el estado con los datos obtenidos
  //     dispatch(fetchAppointmentUnavailableSuccess(response)); // Puedes dispatch un evento para indicar que la solicitud fue exitosa
  //   } catch (error) {
  //     console.error('Error al obtener datos de reservas ocupadas:', error);
  //     dispatch(fetchAppointmentUnavailableFailure(error)); // Puedes dispatch un evento para indicar que la solicitud falló
  //   }
  // };

  useEffect(() => {
    // Llamada a getSoccerFields cuando el componente se monta
    fetchDataSoccerFields();
  }, []); // El segundo parámetro debe ser un array vacío para que useEffect se ejecute solo una vez

  console.log('soccerFieldsData', soccerFieldsData)

  const handleCellClick = (time: string, court: any) => {
    console.log('time', time, 'court', court)
    if (selectedDate) {
      // if(selectedAppointments.some((shift) => (shift.date === selectedDate && shift.time === time && shift.court?.description === court.description ))){
      //   dispatch(clearAppointments())
      // }
      dispatch(toggleAppointment({ time, court }));
    } else {
      setisOpen(true);
    }
  };

  const handleNextButton = () => {
    // Puedes enviar la información al endpoint aquí si lo deseas
    console.log(
      "Enviando la siguiente información al endpoint:",
      selectedAppointments
    );
    handleNext();
  };

  const handleBackButton = () => {
    handleBack();
  };

  const getAppointmentColor = (date: string | null, time: string, court: any) => {
    if (!date) {
      return "#4B4B4B"; // Color predeterminado si no hay fecha seleccionada
    }
  
    const formattedDate = moment(date).format("YYYY-MM-DD");
  
    // Buscar si hay una reserva para la fecha, cancha y hora específicos
    const hasAppointment = soccerFieldsData.some((field) =>
      field.shifts.some((shift: any) =>
        moment(shift.date_time).format("YYYY-MM-DD") === formattedDate &&
        shift.soccer_field_id === court.id &&
        moment(shift.date_time).format("HH") === time
      )
    );
  
    return hasAppointment ? "#FF0000" : "#4B4B4B";
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
            // margin: "0 auto 1rem auto",
            display: "inline-block",
          }}
        >
          CALENDARIO DE RESERVAS
        </Typography>

        {/* Calendario para seleccionar la fecha */}
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          {/* <Label>Fecha:</label> */}
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
          {soccerFieldsData.map((court: any) => (
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
                {court.size}
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
                {court.description}
              </Typography>

              </div>
             
              {/* Celdas de horarios */}
              {timeSlots.map((time) => (
                <div
                  key={time}
                  style={{
                    width: "50px",
                    height: "auto",
                    border: "0.1px solid #2E2F33",
                    backgroundColor: getAppointmentColor(selectedDate, time, court),
                    cursor: "pointer",
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
          ))}
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
          style={{  backgroundColor: selectedAppointments.length === 0 ? "#E0E0E0" : "#2E2F33", margin: "1rem 0 0 0" }}
          disabled={selectedAppointments.length === 0}
        >
          {" "}
          Siguiente
        </Button>
      </div>
    </>
  );
};

export default Calendar;
