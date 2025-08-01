import React from "react";
import { TableCell } from "../types/table";
import { TableCellInput } from "./TableCellInput";

interface TableHeaderProps {
  headers: TableCell[];
  onHeaderChange: (col: number, value: string) => void;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  headers,
  onHeaderChange,
}) => (
  <thead>
    <tr>
      {headers.map((h, i) => (
        <th
          key={h.id}
          style={{
            padding: "16px 20px",
            border: "1px solid #ccc",
            background: "#ececec",
            fontWeight: 600,
            fontSize: 18,
            minWidth: 160,
            textAlign: "left",
          }}
        >
          {h.editable ? (
            <TableCellInput
              value={h.value}
              type={h.type}
              onChange={(val) => onHeaderChange(i, val)}
              style={{ fontWeight: 600, fontSize: 18 }}
            />
          ) : (
            h.value
          )}
        </th>
      ))}
    </tr>
  </thead>
);
