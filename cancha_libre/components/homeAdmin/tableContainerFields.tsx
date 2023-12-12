import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "field", headerName: "Field", width: 130 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "time", headerName: "Time", width: 130 },
  { field: "depositMade", headerName: "Deposit Made", width: 150 },
  { field: "user", headerName: "User", width: 130 },
];

const rows = [
  {
    id: 1,
    user: "John Doe",
    date: "2023-01-01",
    time: "14:00",
    field: "F5A",
    depositMade: true,
  },
  {
    id: 2,
    user: "Jane Doe",
    date: "2023-01-02",
    time: "15:30",
    field: "F7",
    depositMade: false,
  },
];

export default function ReservationsTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        style={{
          background: "white",
          fontFamily: "amiko",
          backgroundColor: "#555659",
          color: "#FFFFFF",
          margin: "1rem",
        }}
      />
    </div>
  );
}
