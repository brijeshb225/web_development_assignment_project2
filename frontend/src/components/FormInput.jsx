import React from "react";

function FormInput({ label, value, onChange, type = "text" }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label style={{ display: "block", marginBottom: "4px" }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "6px", width: "100%" }}
      />
    </div>
  );
}

export default FormInput;
