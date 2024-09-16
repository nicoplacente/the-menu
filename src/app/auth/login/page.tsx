"use client";
import { LoginAction, LoginGoogleAction } from "@/actions/auth/auth-actions";
import Input from "@/components/ui/inputLogin";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { alerts } from "@/utils/alerts";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session]);

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
    await LoginGoogleAction();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-8 border border-white justify-center align-middle"
    >
      <button
        type="button"
        onClick={SubmitGoogle}
        className="flex justify-center w-full items-center gap-2 bg-white p-3 rounded-lg"
        aria-label="Iniciar sesión con Google"
      >
        <img
          src="/Google__G__logo.svg.webp"
          alt="google-icon"
          className="size-8"
        />
        Iniciar con Google
      </button>
      <div className="flex items-center gap-4">
        <hr className="flex-grow border-gray-400" />
        <p className="text-white">O</p>
        <hr className="flex-grow border-gray-400" />
      </div>
      <Input type="text" placeholder="Email" name="email" register={register} />
      <Input
        type="password"
        placeholder="Contraseña"
        name="password"
        register={register}
      />
      <div className="flex justify-center items-center text-white gap-2 ">
        <input type="checkbox" className="cursor-pointer size-4" />
        <p>Acepto los terminos y politicas de la poronga esta</p>
      </div>
      <Button txt="Iniciar Sesión" />
      <div className="flex flex-col justify-center items-center gap-4 text-white">
        <a>¿Has olvidado tu contraseña?</a>
        <p>
          Todavia no tienes una cuenta?{" "}
          <a href="/auth/register" className="underline">
            Registrate
          </a>
        </p>
      </div>
    </form>
  );
};

export default Login;
