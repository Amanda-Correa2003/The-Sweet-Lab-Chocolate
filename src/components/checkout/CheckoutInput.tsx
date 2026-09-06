import React from "react";

interface CheckoutInputProps {
  icon: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function CheckoutInput({
  icon,
  name,
  placeholder,
  value,
  onChange,
  required = false,
}: CheckoutInputProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFF8EE",
        border: "1px solid #E2D4BC",
        borderRadius: "10px",
        padding: "0 15px",
      }}
    >
      <span style={{ fontSize: "16px", marginRight: "10px" }}>{icon}</span>
      <input
        required={required}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "14px 0",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          color: "#3D2B1F",
          fontSize: "14px",
        }}
      />
    </div>
  );
}