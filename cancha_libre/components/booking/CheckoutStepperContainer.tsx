import React, { FC, useContext, useEffect, useRef } from "react";
import { Typography, Button, Link } from "@mui/material";
import { SteppersContext } from "./context/SteppersContext";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import QRCode from "qrcode.react";

interface Props {
  handleBack: () => void;
  handleNext: () => void;
}

const CheckoutStepperContainer: FC<Props> = ({ handleBack, handleNext }) => {
  const { handlerCustomer } = useContext(SteppersContext) ?? {};
  const selectedAppointments = useSelector(
    (state: RootState) => state.booking.selectedAppointments
  );

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

  const handleNextButton = () => {
    handleNext();
  };

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
            <Typography variant="h5">Escaneá el código QR</Typography>
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
                padding: "2rem",
              }}
            >
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
          onClick={handleNextButton}
          style={{ backgroundColor: "#2E2F33" }}
        >
          Finalizar
        </Button>
      </div>
    </>
  );
};

export default CheckoutStepperContainer;
