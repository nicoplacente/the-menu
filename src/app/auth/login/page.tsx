import Input from "@/components/input/inputLogin";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" placeholder="Email" name="email" register={register} />
      <Input
        type="password"
        placeholder="Contraseña"
        name="password"
        register={register}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
