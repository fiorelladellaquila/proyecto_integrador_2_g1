import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Typography, Button, Link } from "@mui/material";
import { SteppersContext } from "./context/SteppersContext";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import QRCode from "qrcode.react";
import { useRouter } from 'next/router';
import { postShift } from "@/services/shifts";
import moment from "moment";

interface Props {
  handleBack: () => void;
  handleNext: () => void;
}

const CheckoutStepperContainer: FC<Props> = ({ handleBack, handleNext }) => {
  const { handlerCustomer } = useContext(SteppersContext) ?? {};
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const selectedAppointment = useSelector(
    (state: RootState) => state.booking.selectedAppointment
  );
  const router = useRouter();

  useEffect(() => {
    const handleStorageChange = () => {
      setUserData(JSON.parse(localStorage.getItem("user") || "{}"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  console.log('selectedAppointment', selectedAppointment)
  console.log('userData', userData)
  
 // Combina la fecha y la hora en un formato reconocido por moment
const dateTimeString = `${selectedAppointment ? selectedAppointment.date : ''}T${selectedAppointment ? selectedAppointment.time: ''}:00:00`;

// formatea la fecha y hora
const formattedDateTime = moment(dateTimeString, 'YYYY-MM-DDTHH:mm:ss').add(3, 'hours').format('YYYY-MM-DDTHH:mm:ss');

  const postShiftObject = {
    date_time: formattedDateTime,
    reserved: 1,
    soccer_field_id: selectedAppointment?.court.id,
    user_id: userData.id
  }

  const center = {
    lat: -31.436677932739258,
    lng: -64.18447875976562,
  };

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo(center);
    }
  }, [center]);

  if (!handlerCustomer) {
    throw new Error("Componente debe estar dentro de CheckoutProvider");
  }

  const handleBackButton = () => {
    handleBack();
  };


  console.log('postShiftObject', postShiftObject)
  const handleConfirmShift = async () => {
    await postShift(userData.token, postShiftObject);
    router.push('/confirmShift');
  }

  const qrUrl = `link.mercadopago.com.ar/canchalibre`;

  return (
    <>
      <div
        style={{
          background: "#555659",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "1rem",
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
            textAlign: "center",
            display: "inline-block",
            marginBottom: "1rem",
          }}
        >
          CALENDARIO DE RESERVAS
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              gap: "1rem",
              alignItems: "center",
              backgroundColor: "#B4FA8A",
              borderRadius: "20px",
            }}
          >
            <Typography variant="h6" sx={{marginTop: '1rem'}}>Escaneá el código QR</Typography>
            <QRCode
              value={qrUrl}
              style={{ width: "60%", height: "80%", padding: "0 0 1.5rem 0" }}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#B4FA8A",
              borderRadius: "20px",
              padding: "0 1rem",
            }}
          >
            <Typography variant="h6">
              Una vez realizado el pago, enviar comprobante al siguiente
              teléfono de contacto:
            </Typography>
            <Link
              variant="h6"
              href="https://api.whatsapp.com/send?phone=5493513483389&text=Quiero+m%EF%BF%BDs+informacion&fbclid=PAAaaG6vIY3QFvM2xKcpmEA7BOeOG7YgOpYkfdvDHN0ttfgu18GF17zrrlZ0M"
              style={{
                textDecoration: "none",
                color: "#4B4B4B",
                padding: "5rem",
                margin: '1rem'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#4B4B4B" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z"/></svg>
              Hacé click acá
            </Link>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          variant="contained"
          onClick={handleBackButton}
          style={{ backgroundColor: "#2E2F33" }}
        >
          Atrás
        </Button>
        <Button
          variant="contained"
          onClick={handleConfirmShift}
          style={{ backgroundColor: "#2E2F33" }}
         
        >
          Finalizar
        </Button>
      </div>
    </>
  );
};

export default CheckoutStepperContainer;
