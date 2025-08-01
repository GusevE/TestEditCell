import { CellType } from "../types/table";

export function validateInput(value: string, type: CellType): string {
  switch (type) {
    case "number":
      return value.replace(/[^0-9]/g, "");
    case "percent": {
      let num = value.replace(/[^0-9]/g, "");
      return num ? `${num}%` : "";
    }
    case "name":
      return value.replace(/[^а-яА-ЯёЁ.\s]/g, "");
    case "text":
    default:
      return value;
  }
}
