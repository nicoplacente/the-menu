import React from "react";

interface InputDashboardProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

export const InputDashboard: React.FC<InputDashboardProps> = ({
  label,
  value,
  onChange,
  readOnly = false,
}) => {
  return (
    <div className="flex gap-4">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input text-black"
        readOnly={readOnly}
      />
    </div>
  );
};
