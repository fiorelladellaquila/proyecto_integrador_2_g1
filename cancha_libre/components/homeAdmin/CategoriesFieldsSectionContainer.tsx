import * as React from "react";
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import CombinedTable from "./tableContainerUser";
import CombinedTableFields from "./tableContainerFields";
import ReservationsTable from "./tableContainerFields";

const CategoriesFieldsSectionContainer: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        margin: "1rem",
      }}
    >
      <Box
        style={{
          width: "100%",
          background:
            "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
          padding: "1rem 0",
          borderRadius: "15px",
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight={"600"}
          variant="h5"
          color="#FFFFFF"
          padding={"1rem"}
          id="users"
        >
          Usuarios
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CombinedTable />
        </Box>
        <br />
      </Box>
      <Box
        style={{
          width: "100%",
          background:
            "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
          padding: "3rem 0",
          borderRadius: "15px",
          marginBottom: "1rem",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight={"600"}
          variant="h5"
          color="#FFFFFF"
          padding={"1rem"}
          id="shifts"
        >
          Reservas
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CombinedTableFields />
        </Box>
      </Box>
      <Box
        style={{
          width: "100%",
          background:
            "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
          padding: "3rem 0",
          borderRadius: "15px",
          marginBottom: "1rem",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight={"600"}
          variant="h5"
          color="#FFFFFF"
          padding={"1rem"}
          id="report"
        >
          Reporte
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <iframe
            width="90%"
            height="450"
            src="https://lookerstudio.google.com/embed/reporting/415b64bc-5a01-4b57-a106-5ad42bd95ada/page/mziiD"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </div>
  );
};

export default CategoriesFieldsSectionContainer;
