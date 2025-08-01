import { TableData } from "../types/table";

export const initialData: TableData = {
  headers: [
    { id: "h1", value: "ФИО", type: "name", editable: true },
    { id: "h2", value: "Возраст", type: "number", editable: true },
    { id: "h3", value: "Процент", type: "percent", editable: true },
    { id: "h4", value: "Код", type: "text", editable: true },
  ],
  rows: [
    [
      { id: "r1c1", value: "Иванов И.И.", type: "name", editable: true },
      { id: "r1c2", value: "35", type: "number", editable: true },
      { id: "r1c3", value: "50%", type: "percent", editable: true },
      { id: "r1c4", value: "A1B2", type: "text", editable: true },
    ],
    [
      { id: "r2c1", value: "Петров П.П.", type: "name", editable: true },
      { id: "r2c2", value: "42", type: "number", editable: true },
      { id: "r2c3", value: "75%", type: "percent", editable: true },
      { id: "r2c4", value: "C3D4", type: "text", editable: true },
    ],
    [
      { id: "r3c1", value: "Сидоров С.С.", type: "name", editable: true },
      { id: "r3c2", value: "28", type: "number", editable: true },
      { id: "r3c3", value: "90%", type: "percent", editable: true },
      { id: "r3c4", value: "E5F6", type: "text", editable: true },
    ],
  ],
};
