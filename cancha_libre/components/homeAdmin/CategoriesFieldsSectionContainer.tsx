import * as React from "react";
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import CombinedTable from "./tableContainerUser";
import CombinedTableFields from "./tableContainerFields";
import ReservationsTable from "./tableContainerFields";

const CategoriesFieldsSectionContainer: FC = () => {
  return (
    <div style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop:"5rem"}}>
      <Box
          style={{
            width: "90vw",
            background:
              "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
            padding: "2rem 0",
            borderRadius: "15px",
            marginBottom: "5rem",
            
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
        width: "90vw", // Ajusta la anchura según tus necesidades
        background: "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
        padding: "2rem 0",
        borderRadius: "15px",
        marginBottom: "5rem", // Ajusta el margen inferior según tus necesidades
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
        <ReservationsTable />
      </Box>
     
        <Box
          style={{
            width: "90vw",
            background:
              "linear-gradient(180deg, rgba(10,113,27,1) 52%, rgba(0,204,0,1) 100%)",
            padding: "2rem 0",
            borderRadius: "15px",
            marginBottom: "5rem",
            
           
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
            width="100%" 
            height="600" 
            src="https://lookerstudio.google.com/embed/reporting/415b64bc-5a01-4b57-a106-5ad42bd95ada/page/mziiD" 
            frameBorder="0" 
            style={{ border: 0, maxWidth: "100%"}} 
            allowFullScreen 
          ></iframe>
        </Box>
    </div>
  );
};

export default CategoriesFieldsSectionContainer;
