import React from "react";
import { TableCell } from "../types/table";
import { TableCellInput } from "./TableCellInput";

interface TableRowProps {
  row: TableCell[];
  rowIndex: number;
  onCellChange: (row: number, col: number, value: string) => void;
}

export const TableRow: React.FC<TableRowProps> = ({
  row, rowIndex, onCellChange
}) => (
  <tr>
    {row.map((cell, c) => (
      <td
        key={cell.id}
        style={{
          padding: "16px 20px",
          border: "1px solid #ccc",
          fontSize: 16,
          background: rowIndex % 2 === 0 ? "#fff" : "#f8f8f8",
        }}
      >
        {cell.editable ? (
          <TableCellInput
            value={cell.value}
            type={cell.type}
            onChange={(val) => onCellChange(rowIndex, c, val)}
          />
        ) : (
          cell.value
        )}
      </td>
    ))}
  </tr>
);
