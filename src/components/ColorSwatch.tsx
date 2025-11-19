"use client";

import { useState } from "react";

interface ColorSwatchProps {
  label: string;
  colorCode: string; // The hex code to copy
  variableName?: string; // Optional CSS var name to display
  backgroundColor: string; // The actual color to display (can be var or hex)
  height?: string; // Optional height for the color block
}

export default function ColorSwatch({ 
  label, 
  colorCode, 
  variableName, 
  backgroundColor,
  height = "120px"
}: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleDoubleClick = () => {
    navigator.clipboard.writeText(colorCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        cursor: "pointer",
        userSelect: "none"
      }}
      className="color-swatch"
      title="Double click to copy hex code"
    >
      <div style={{ height, backgroundColor: backgroundColor, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {copied && (
          <div style={{ 
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.7)", 
            color: "white", 
            padding: "6px 12px", 
            borderRadius: "20px", 
            fontSize: "0.875rem",
            fontWeight: 500,
            animation: "fadeIn 0.2s ease-in-out"
          }}>
            Copied!
          </div>
        )}
      </div>
      <div style={{ padding: "var(--spacing-md)" }}>
        <p className="text-body" style={{ fontWeight: 600 }}>{label}</p>
        <p className="text-small">{colorCode}</p>
        {variableName && <p className="text-small" style={{ opacity: 0.6, fontSize: "0.75rem", marginTop: "4px" }}>{variableName}</p>}
      </div>
    </div>
  );
}
