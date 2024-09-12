"use client";
import { LoginAction } from "@/actions/auth/auth-actions";
import Input from "@/components/input/inputLogin";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const result = await LoginAction(data);
    if (result?.error || !result) {
      alert(result?.error);
      console.log("Error de inicio de sesión:", result?.error);
    } else {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-8 border border-white justify-center align-middle"
    >
      <Input type="text" placeholder="Email" name="email" register={register} />
      <Input
        type="password"
        placeholder="Contraseña"
        name="password"
        register={register}
      />
      <button type="submit" className="bg-slate-600 p-3 rounded-lg">
        Iniciar Sesion
      </button>
    </form>
  );
};

export default Login;
