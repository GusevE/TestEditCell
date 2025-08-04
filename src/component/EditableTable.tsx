import React, { useState, useRef, useEffect } from "react";
import { deepClone } from "../utils/deepClone";
import { getChanges } from "../utils/getChanges";
import { initialData } from "../data/initialData";
import { Table } from "./Table";
import { ProgressBar } from "./ProgressBar";
import { TableData } from "../types/table";

export const EditableTable: React.FC = () => {
  const [data, setData] = useState<TableData>(() => deepClone(initialData));
  const [showProgress, setShowProgress] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimers = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    if (countdownTimer.current) clearInterval(countdownTimer.current);
    inactivityTimer.current = null;
    countdownTimer.current = null;
    setShowProgress(false);
    setCountdown(10);
  };

  useEffect(() => {
    const changes = getChanges(data, initialData);
    if (changes.length === 0) {
      resetTimers();
      return;
    }

    resetTimers();
    inactivityTimer.current = setTimeout(() => {
      setShowProgress(true);
      setCountdown(10);

      countdownTimer.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownTimer.current!);
            setShowProgress(false);

            const finalChanges = getChanges(data, initialData);
            if (finalChanges.length > 0) {
              alert(
                "Изменённые ячейки:\n\n" +
                  finalChanges
                    .map((cell) => `id: ${cell.id}\nvalue: ${cell.value}`)
                    .join("\n\n")
              );
            }

            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 5000);

    // eslint-disable-next-line
  }, [data]);

  useEffect(() => resetTimers, []);

  const handleCellChange = (
    row: number | "header",
    col: number,
    value: string
  ) => {
    setData((prevData) => {
      const copied = deepClone(prevData);
      let cell;
      if (row === "header") {
        cell = copied.headers[col];
      } else {
        cell = copied.rows[row][col];
      }
      cell.value = value;

      return copied;
    });
  };

  return (
    <div
      style={{
        width: "80vw",
        minWidth: 980,
        paddingTop: 32,
        fontFamily: "Arial, sans-serif",
        margin: "0 auto",
      }}
    >
      <Table
        headers={data.headers}
        rows={data.rows}
        onHeaderChange={(col, value) => handleCellChange("header", col, value)}
        onCellChange={handleCellChange}
      />
      {showProgress && <ProgressBar countdown={countdown} total={10} />}
    </div>
  );
};
