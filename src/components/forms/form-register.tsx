"use client";
import { registerAction } from "@/actions/auth/auth-actions";
import Input from "@/components/ui/inputLogin";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckBoxButton } from "@/components/ui/checkbox-button";
import Link from "next/link";
import { validateRegister } from "@/utils/validators/register-validations";
import { LoginGoogleAction } from "@/actions/auth/login-google";
export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      const validationErrors = await validateRegister(data);
      if (validationErrors) {
        Object.keys(validationErrors).forEach((field) => {
          setError(field, {
            type: "manual",
            message: validationErrors[field],
          });
        });
        return;
      }
      const result = await registerAction(data);
      if (result.success === true) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
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
        placeholder="Nombre y Apellido"
        name="name"
        register={register}
        error={errors.name?.message}
      />
      <Input
        type="text"
        placeholder="Telefono"
        name="phone"
        register={register}
        error={errors.phone?.message}
      />
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
      <CheckBoxButton
        name="terms"
        register={register}
        error={errors.terms?.message}
      />
      <Button txt="Registrarse" />
      <div className="flex flex-col justify-center items-center gap-4 text-white">
        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link href="/auth/login" className="hover:underline">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </form>
  );
};
