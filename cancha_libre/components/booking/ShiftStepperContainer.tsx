// Calendar.tsx
import React, { useEffect, useState, useMemo } from "react";
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
import {
  Box,
  Button,
  CircularProgress,
  Input,
  Typography,
} from "@mui/material";
import { getSoccerFields } from "../../services/soccerFields";
import {
  fetchSoccerFieldsFailure,
  fetchSoccerFieldsRequest,
  fetchSoccerFieldsSuccess,
} from "@/redux/slices/soccerFields";
import NotificationModal from "../modal/NotificationModal";
import { isCourtBooked } from "@/utils/functions/booking";
import { soccerFieldsInformation } from "../../redux/slices/soccerFields";

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
  const [selectedDate, setSelectedDate] = useState<string | null>(
    moment().format("YYYY-MM-DD")
  );
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const soccerFieldsData: any = useSelector(soccerFieldsInformation);
  const [userData, setUserData] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } else {
      return {};
    }
  });
  const timeSlots = useMemo(() => generateTimeSlots(), []);
  const selectedAppointment = useSelector(selectSelectedAppointment);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleStorageChange = () => {
        setUserData(JSON.parse(localStorage.getItem("user") || "{}"));
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, []);

  useEffect(() => {
    const defaultDate = moment().format("YYYY-MM-DD");
    setSelectedDate(defaultDate);
    dispatch(selectDate(defaultDate));
  }, [dispatch]);


  const fetchDataSoccerFields = async () => {
    try {
      setLoading(true);
      dispatch(fetchSoccerFieldsRequest());
      const response = await getSoccerFields(userData.token);
      dispatch(fetchSoccerFieldsSuccess(response));
    } catch (error) {
      console.error("Error al obtener datos de campos de fútbol:", error);
      dispatch(fetchSoccerFieldsFailure(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataSoccerFields();
  }, []);

  console.log("selectedAppointment", selectedAppointment);

  const handleCellClick = (time: string, court: any) => {
    console.log("time", time);
    console.log("court", court);
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
      {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh" // Ajusta según sea necesario
        >
          <CircularProgress />
        </Box>
      )}
      {!loading && (
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

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem",
              }}
            >
              <Typography
                style={{
                  color: "#2E2F33",
                  fontWeight: "bold",
                  padding: "0 1rem",
                }}
              >
                Selecciona una fecha:{" "}
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

            <div style={{ display: "flex", flexDirection: "column" }}>
              <CalendarHeader timeSlots={timeSlots} />

              <div suppressHydrationWarning={true}>
                {soccerFieldsData.map((court: any) => (
                  <CalendarRow
                    key={court}
                    court={court}
                    timeSlots={timeSlots}
                    selectedDate={selectedDate}
                    selectedAppointment={selectedAppointment}
                    soccerFieldsData={soccerFieldsData}
                    handleCellClick={handleCellClick}
                    isOpen={isOpen}
                    setisOpen={setisOpen}
                  />
                ))}
              </div>
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
              style={{
                backgroundColor: !selectedAppointment ? "#E0E0E0" : "#2E2F33",
                margin: "1rem 0 0 0",
              }}
              disabled={!selectedAppointment}
            >
              {" "}
              Siguiente
            </Button>
          </div>
        </>
      )}
    </>
  );
};

const CalendarHeader: React.FC<{ timeSlots: string[] }> = ({ timeSlots }) => (
  <div style={{ display: "flex" }}>
    <CalendarIntersection />
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
);

const CalendarIntersection: React.FC = () => (
  <div
    style={{
      width: "10rem",
      height: "5rem",
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
);

const CalendarRow: React.FC<{
  court: any;
  timeSlots: string[];
  selectedDate: string | null;
  selectedAppointment: Appointment | null;
  soccerFieldsData: any[];
  handleCellClick: (time: string, court: any) => void;
  isOpen: any;
  setisOpen: any;
}> = ({
  court,
  timeSlots,
  selectedDate,
  selectedAppointment,
  soccerFieldsData,
  handleCellClick,
  isOpen,
  setisOpen,
}) => (
  <div key={court} style={{ display: "flex" }}>
    <CalendarCourtInfo court={court} />
    {timeSlots.map((time) => (
      <CalendarCell
        key={time}
        time={time}
        court={court}
        selectedDate={selectedDate}
        selectedAppointment={selectedAppointment}
        soccerFieldsData={soccerFieldsData}
        handleCellClick={handleCellClick}
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
);

const CalendarCourtInfo: React.FC<{ court: any }> = ({ court }) => (
  <div
    style={{
      width: "auto",
      color: "#B4FA8A",
      backgroundColor: "#222222",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      fontSize: "8px",
      border: "0.1px solid #B4FA8A",
    }}
  >
    <Typography
      style={{
        width: "auto",
        color: "#B4FA8A",
        backgroundColor: "#222222",
        textAlign: "center",
        padding: "0.2rem 0 0 0",
        fontSize: "8px",
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
        fontSize: "8px",
      }}
    >
      {court.description}
    </Typography>
  </div>
);

const CalendarCell: React.FC<{
  time: string;
  court: any;
  selectedDate: string | null;
  selectedAppointment: Appointment | null;
  soccerFieldsData: any[];
  handleCellClick: (time: string, court: any) => void;
}> = ({
  time,
  court,
  selectedDate,
  selectedAppointment,
  soccerFieldsData,
  handleCellClick,
}) => {
  const isCellSelected =
    selectedAppointment &&
    selectedAppointment.date === selectedDate &&
    selectedAppointment.time === time &&
    selectedAppointment.court === court;

  const isCellBooked = isCourtBooked(
    selectedDate,
    time,
    court.id,
    soccerFieldsData
  );

  const cellColor = isCellSelected
    ? "#00CC00"
    : isCellBooked
      ? "#FF0000"
      : "#4B4B4B";

  return (
    <div
      style={{
        width: "50px",
        height: "auto",
        border: "0.1px solid #2E2F33",
        backgroundColor: cellColor,
        cursor: isCellBooked ? "not-allowed" : "pointer",
        pointerEvents: isCellBooked ? "none" : "auto",
      }}
      onClick={() => handleCellClick(time, court)}
    />
  );
};

export default Calendar;
