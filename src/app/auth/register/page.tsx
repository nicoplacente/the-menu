"use client";
import { LoginAction, LoginGoogleAction } from "@/actions/auth/auth-actions";
import Input from "@/components/ui/inputLogin";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { alerts } from "@/utils/alerts";
import { Button } from "@/components/ui/button";
import CheckBoxButton from "@/components/ui/checkbox-button";
import Link from "next/link";
const Register = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const result = await LoginAction(data);

    if (result?.error || !result || result.status === 401) {
      alerts("error", "Ha ocurrido un error al registrarse");
    } else if (result.status === 200) {
      alerts("success", "Usuario registrado correctamente");
      router.push("/");
    }
  };

  const SubmitGoogle = async () => {
    const result = await LoginGoogleAction();
    if (result) {
      router.push("/");
    }
  };

  return (
    <section className="flex w-full h-screen items-center p-4 md:p-0">
      <img
        src="/yourcard.webp"
        alt="YourCard"
        className="w-1/2 h-full object-cover hidden md:block"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mx-auto justify-center lg:w-1/4"
      >
        <button
          type="button"
          onClick={SubmitGoogle}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-pink-800"
          aria-label="Iniciar sesión con Google"
        >
          {" "}
          <span className="flex items-center justify-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 w-full rounded-md group-hover:bg-opacity-0">
            <img src="/google.webp" alt="Google Logo" className="size-4" />
            Iniciar con Google
          </span>
        </button>
        <div className="flex items-center gap-4">
          <hr className="flex-grow border-gray-400" />
          <p className="text-white">O</p>
          <hr className="flex-grow border-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          register={register}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          name="password"
          register={register}
        />
        <CheckBoxButton />
        <Button txt="Registrarse" />
        <div className="flex flex-col justify-center items-center gap-4 text-white">
          <Link className="hover:underline" href="/reset-password">
            ¿Has olvidado tu contraseña?
          </Link>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link href="/auth/login" className="hover:underline">
              Inicia Sesión
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
