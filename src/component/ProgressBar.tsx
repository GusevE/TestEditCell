import React from "react";

interface ProgressBarProps {
  countdown: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ countdown, total }) => (
  <div style={{
    marginTop: 32,
    background: "#f4f4f4",
    padding: 20,
    borderRadius: 8,
    maxWidth: 480,
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 1px 6px #0002",
    textAlign: "center",
  }}>
    <div style={{ marginBottom: 8 }}>
      Отправка изменений через {countdown} сек...
    </div>
    <div style={{
      width: "100%",
      height: 12,
      background: "#ddd",
      borderRadius: 6,
      overflow: "hidden",
    }}>
      <div style={{
        height: "100%",
        width: `${(100 - countdown * (100 / total))}%`,
        background: "#49ad4f",
        transition: "width 1s linear",
      }}/>
    </div>
  </div>
);
