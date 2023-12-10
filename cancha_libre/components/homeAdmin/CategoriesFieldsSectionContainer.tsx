import * as React from "react";
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import CombinedTable from "./tableContainerUser";
import CombinedTableFields from "./tableContainerFields";

const CategoriesFieldsSectionContainer: FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column"  }}>
      <Box
        style={{
          width: "95vw",
          background:
            "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
          padding: "3rem 0",
          borderRadius: "15px",
          marginBottom: "1rem",
        }}
      >
        <Typography
          fontWeight={"600"}
          variant="h4"
          color="#FFFFFF"
          padding={"1rem"}
        >
          Usuarios
        </Typography>
        <CombinedTable />
        <br />
      </Box>
      <Box
        style={{
          width: "95vw",
          background:
            "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
          padding: "3rem 0",
          borderRadius: "15px",
          marginBottom: "1rem",
        }}
      >
        <Typography
          fontWeight={"600"}
          variant="h4"
          color="#FFFFFF"
          padding={"1rem"}
        >
          Canchas Reservas
        </Typography>
        <CombinedTableFields />
      </Box>
      <Box
        style={{
          width: "95vw",
          background:
            "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
          padding: "3rem 0",
          borderRadius: "15px",
          marginBottom: "1rem",
        }}
      >
        <Typography
          fontWeight={"600"}
          variant="h4"
          color="#FFFFFF"
          padding={"1rem"}
        >
          Grafico
        </Typography>
        <iframe
          width="90%"
          height="450"
          src="https://lookerstudio.google.com/embed/reporting/415b64bc-5a01-4b57-a106-5ad42bd95ada/page/mziiD"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </Box>
    </div>
  );
};

export default CategoriesFieldsSectionContainer;
