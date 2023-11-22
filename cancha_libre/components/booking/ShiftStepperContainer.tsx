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
import { Button } from "@mui/material";

interface Appointment {
  date: string | null;
  time: string | null;
  court: string | null;
}

const generateTimeSlots = () => {
  const timeSlots: string[] = [];
  const startTime = moment().hour(8).minute(0);
  const endTime = moment().hour(18).minute(0);

  while (startTime.isBefore(endTime)) {
    timeSlots.push(startTime.format("HH:mm"));
    startTime.add(1, "hour");
  }

  return timeSlots;
};

const generateCourts = () => ["Cancha 1", "Cancha 2", "Cancha 3"];

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
    <div>
      <h2>Calendario de Reservas</h2>

      {/* Calendario para seleccionar la fecha */}
      <label>Fecha:</label>
      <input
        type="date"
        value={selectedDate || ""}
        onChange={(e) => {
          setSelectedDate(e.target.value);
          dispatch(selectDate(e.target.value));
        }}
      />

      {/* Calendario de Reservas */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Encabezado de los horarios */}
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <div style={{ width: "80px" }} />
          {timeSlots.map((time) => (
            <div
              key={time}
              style={{
                width: "80px",
                marginRight: "10px",
                textAlign: "center",
              }}
            >
              {time}
            </div>
          ))}
        </div>

        {/* Celdas del calendario */}
        {courts.map((court) => (
          <div key={court} style={{ display: "flex", marginBottom: "10px" }}>
            {/* Nombre de la cancha */}
            <div style={{ width: "80px", marginRight: "10px" }}>{court}</div>

            {/* Celdas de horarios */}
            {timeSlots.map((time) => (
              <div
                key={time}
                style={{
                  width: "80px",
                  height: "30px",
                  border: "1px solid #ccc",
                  backgroundColor: selectedAppointments.some(
                    (appointment) =>
                      appointment.date === selectedDate &&
                      appointment.time === time &&
                      appointment.court === court
                  )
                    ? "lightgreen"
                    : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleCellClick(time, court)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Botón de Reserva */}
      <Button variant="contained" type="submit" onClick={handleNextButton}>
        {" "}
        Siguiente
      </Button>

      {/* Lista de citas */}
      <div>
        <h3>Citas Agendadas</h3>
        <ul>
          {selectedAppointments.map((appointment, index) => (
            <li key={index}>
              {`Fecha: ${appointment.date}, Horario: ${appointment.time}, Cancha: ${appointment.court}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
