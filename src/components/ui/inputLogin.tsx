import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
interface InputProps {
  type: string;
  placeholder?: string;
  style?: string;
  name: string;
  register: UseFormRegister<any>;
}
const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  style,
  name,
  register,
}) => {
  const [inputType, setInputType] = useState(type);
  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  return (
    <div className="relative w-full">
      <input
        {...register(name)}
        type={inputType}
        placeholder={placeholder}
        className={`${style} text-lg p-2 rounded-lg placeholder:text-black text-black w-full`}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
          aria-label="Toggle password visibility"
        >
          {inputType === "password" ? <IconEye /> : <IconEyeClosed />}
        </button>
      )}
    </div>
  );
};

export default Input;
