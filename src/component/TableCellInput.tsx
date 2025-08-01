import React from "react";
import { CellType } from "../types/table";
import { validateInput } from "../utils/validateInput";

interface TableCellInputProps {
  value: string;
  type: CellType;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
}

export const TableCellInput: React.FC<TableCellInputProps> = ({
  value, type, onChange, style
}) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(validateInput(e.target.value, type))}
    style={{
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: 16,
      fontFamily: "inherit",
      ...style,
    }}
  />
);
