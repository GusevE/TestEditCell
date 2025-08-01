import { TableData } from "../types/table";

export function getChanges(current: TableData, original: TableData) {
  const changes: { id: string; value: string }[] = [];
  current.headers.forEach((cell, i) => {
    if (cell.value !== original.headers[i].value) {
      changes.push({ id: cell.id, value: cell.value });
    }
  });
  current.rows.forEach((row, r) =>
    row.forEach((cell, c) => {
      if (cell.value !== original.rows[r][c].value) {
        changes.push({ id: cell.id, value: cell.value });
      }
    })
  );
  return changes;
}
