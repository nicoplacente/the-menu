"use client";
import Input from "@/components/ui/inputLogin";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { alerts } from "@/utils/alerts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { validateLogin } from "@/utils/validators/login-validations";
import { LoginAction } from "@/actions/auth/auth-actions";
import { LoginGoogleAction } from "@/actions/auth/login-google";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const validationErrors = await validateLogin(data);

    if (validationErrors) {
      Object.keys(validationErrors).forEach((key) => {
        setError(key, { message: validationErrors[key] });
      });
      return;
    }

    const response = await LoginAction(data);
    if (response.error) {
      alerts("error", response?.error);
    } else {
      router.push("/dashboard");
    }
  };

  const SubmitGoogle = async () => {
    await LoginGoogleAction();
  };
  return (
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
        error={errors.email?.message}
      />
      <Input
        type="password"
        placeholder="Contraseña"
        name="password"
        register={register}
        error={errors.password?.message}
      />

      <Button txt="Iniciar Sesión" />
      <div className="flex flex-col justify-center items-center gap-4 text-white">
        <Link className="hover:underline" href="/reset-password">
          ¿Has olvidado tu contraseña?
        </Link>
        <p>
          ¿Todavia no tienes una cuenta?{" "}
          <Link href="/auth/register" className="hover:underline">
            Registrate
          </Link>
        </p>
      </div>
    </form>
  );
};
