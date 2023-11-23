// Calendar.tsx
import React, { useState } from "react";
import moment from "moment";
import "moment/locale/es";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedDate,
  selectSelectedAppointments,
  selectDate,
  toggleAppointment,
  clearAppointments,
} from "../../redux/reducers/booking";
import { Button, Input, Typography } from "@mui/material";

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

const generateCourts = () => [
  "Cancha 1 F5",
  "Cancha 2 F5",
  "Cancha 3 F5",
  "Cancha 4 F5",
  "Cancha 5 F5",
];

interface Props {
  handleNext: () => void;
}

const Calendar: React.FC<Props> = ({ handleNext }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const timeSlots = generateTimeSlots();
  const courts = generateCourts();
  const selectedAppointments = useSelector(selectSelectedAppointments);
  const dispatch = useDispatch();

  const handleCellClick = (time: string, court: string) => {
    if (selectedDate) {
      dispatch(toggleAppointment({ time, court }));
    } else {
      alert("Por favor, seleccione una fecha.");
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
          fontFamily={'Aleo'}
          fontWeight={'500'}
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
        <Typography style={{color:"#2E2F33", fontWeight: 'bold',  padding: '0 1rem'}}>Seleccciona una fecha: </Typography>
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
                fontWeight: 'bold',
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
        {courts.map((court) => (
          <div key={court} style={{ display: "flex" }}>
            {/* Nombre de la cancha */}
            <Typography
              style={{
                width: "10rem",
                color: "#B4FA8A",
                backgroundColor: "#222222",
                textAlign: "center",
                padding: "0.2rem 0 0 0",
                border: "0.1px solid #B4FA8A",
              }}
            >
              {court}
            </Typography>

            {/* Celdas de horarios */}
            {timeSlots.map((time) => (
              <div
                key={time}
                style={{
                  width: "50px",
                  height: "30px",
                  border: "0.1px solid #2E2F33",
                  backgroundColor: selectedAppointments.some(
                    (appointment) =>
                      appointment.date === selectedDate &&
                      appointment.time === time &&
                      appointment.court === court
                  )
                    ? "#00CC00"
                    : "#4B4B4B",
                  cursor: "pointer",
                }}
                onClick={() => handleCellClick(time, court)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Botón de Reserva */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          type="submit"
          onClick={handleNextButton}
          style={{ backgroundColor: "#2E2F33", margin: "1rem 0 0 0" }}
        >
          {" "}
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Calendar;
