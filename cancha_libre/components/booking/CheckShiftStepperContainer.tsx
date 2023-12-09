import React, { FC, useContext, useEffect, useRef } from "react";
import { Typography, Button } from "@mui/material";
import { SteppersContext } from "./context/SteppersContext";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface Props {
  handleBack: () => void;
  handleNext: () => void;
}

const CheckShiftStepperContainer: FC<Props> = ({ handleBack, handleNext }) => {
  const { handlerCustomer } = useContext(SteppersContext) ?? {};
  const selectedAppointments = useSelector(
    (state: RootState) => state.booking.selectedAppointments
  );

  const mapContainerStyle = {
    width: "23rem",
    height: "23rem",
    margin: "0 0 2rem 0",
  };

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
          }}
        >
          CALENDARIO DE RESERVAS
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "50%",
              gap: "1rem",
            }}
          >
            <div style={{ backgroundColor: "#B4FA8A", borderRadius: "20px" }}>
              <Typography
                variant="body1"
                sx={{ color: "555659", padding: "0.5rem 2rem " }}
              >
                <strong>Dirección:</strong> Direccion 123, Bs As, Argentina
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "555659", padding: "0.5rem 2rem " }}
              >
                <strong>Cancha Seleccionada:</strong>{" "}
                {selectedAppointments[0]?.court}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "555659", padding: "0.5rem 2rem " }}
              >
                <strong>Fecha:</strong> {selectedAppointments[0]?.date}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "555659", padding: "0.5rem 2rem " }}
              >
                <strong>Hora:</strong> {selectedAppointments[0]?.time}
              </Typography>
            </div>
            <div style={{ backgroundColor: "#B4FA8A", borderRadius: "20px" }}>
              <Typography
                variant="body1"
                sx={{ color: "555659", padding: "1rem 2rem " }}
              >
                <strong>Servicios del Club</strong>
              </Typography>
              <ul
                style={{
                  listStyleType: "none",
                  paddingInlineStart: "0",
                  padding: "0 3rem ",
                  listStyle: "disc",
                }}
              >
                <li>
                  <Typography variant="body1" sx={{ color: "555659" }}>
                    Duchas
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ color: "555659" }}>
                    Vestuarios
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ color: "555659" }}>
                    Parrillas
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "white", padding: "0.5rem" }}
            >
              ¿Donde estamos?
            </Typography>
            <LoadScript googleMapsApiKey="AIzaSyCcnuzZZ7NFOoTSEtIrduLmTfRQb5dElzE">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
                options={mapOptions}
                onLoad={(map: any) => {
                  mapRef.current = map;
                }}
              >
                <Marker position={center} title="Cancha Libre" />
              </GoogleMap>
            </LoadScript>
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
          style={{ backgroundColor: "#2E2F33", margin: "1rem 0 0 0" }}
        >
          {" "}
          Siguiente
        </Button>
      </div>
    </>
  );
};

export default CheckShiftStepperContainer;
