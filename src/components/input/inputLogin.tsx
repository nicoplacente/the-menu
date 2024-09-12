import React from "react";
import { UseFormRegister } from "react-hook-form";

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
  return (
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className={`${style} text-lg p-2 rounded-lg placeholder:text-black text-black `}
    />
  );
};

export default Input;
