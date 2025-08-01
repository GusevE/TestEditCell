export type CellType = "number" | "percent" | "name" | "text";

export interface TableCell {
  id: string;
  value: string;
  type: CellType;
  editable: boolean;
}

export interface TableData {
  headers: TableCell[];
  rows: TableCell[][];
}
