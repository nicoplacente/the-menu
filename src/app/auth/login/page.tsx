"use client";
import { LoginAction, LoginGoogleAction } from "@/actions/auth/auth-actions";
import Input from "@/components/input/inputLogin";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { alerts } from "@/utils/alerts";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const result = await LoginAction(data);

    if (result?.error || !result || result.status === 401) {
      alerts(
        "error",
        typeof result?.error === "string"
          ? result?.error
          : JSON.stringify(result?.error)
      );
    } else if (result.status === 200) {
      alerts("success", "Inicio de Sesion correcto");
      router.push("/");
    }
  };

  const SubmitGoogle = async () => {
    const result = await LoginGoogleAction();
    console.log(result);
    if (result) {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-8 border border-white justify-center align-middle"
    >
      <button
        type="button"
        onClick={SubmitGoogle}
        className="bg-slate-600 p-3 rounded-lg"
      >
        Iniciar Sesión con Google
      </button>

      <Input type="text" placeholder="Email" name="email" register={register} />
      <Input
        type="password"
        placeholder="Contraseña"
        name="password"
        register={register}
      />
      <button type="submit" className="bg-slate-600 p-3 rounded-lg">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default Login;
