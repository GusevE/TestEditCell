import React from "react";
import { TableCell } from "../types/table";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

interface TableProps {
  headers: TableCell[];
  rows: TableCell[][];
  onHeaderChange: (col: number, value: string) => void;
  onCellChange: (row: number, col: number, value: string) => void;
}

export const Table: React.FC<TableProps> = ({
  headers, rows, onHeaderChange, onCellChange
}) => (
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      background: "#fff",
      boxShadow: "0 2px 20px #0001",
    }}
  >
    <TableHeader headers={headers} onHeaderChange={onHeaderChange} />
    <tbody>
      {rows.map((row, r) => (
        <TableRow
          key={r}
          rowIndex={r}
          row={row}
          onCellChange={onCellChange}
        />
      ))}
    </tbody>
  </table>
);
