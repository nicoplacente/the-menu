"use client";
import { Button } from "@/components/ui/button";
import Input from "../ui/inputLogin";
import { useForm } from "react-hook-form";
import { alerts } from "@/utils/alerts";
import { validateResetPassword } from "@/utils/validators/reset-password-validations";
import { useEffect, useState } from "react";
import { VerifyToken } from "@/actions/auth/verifyToken";

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (!token) {
          // window.location.href = "/auth/login";
          alerts("error", "Token inválido o inexistente");
          return;
        }
        try {
          const response = await VerifyToken(token);
          if (response.valid) {
            setIsClient(true);
          } else {
            // window.location.href = "/auth/login";
            alerts("error", "Token inválido");
          }
        } catch (error) {
          // window.location.href = "/auth/login";
          alerts("error", "Error al validar el token");
        }
      }
    };
    checkToken();
  }, []);

  const onSubmit = async (data: any) => {
    const validationErrors = await validateResetPassword(data);

    if (validationErrors) {
      Object.keys(validationErrors).forEach((key) => {
        setError(key, { message: validationErrors[key] });
      });
      return;
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mx-auto justify-center lg:w-1/4 min-h-[60vh]"
    >
      <Input
        type="password"
        placeholder="Contraseña"
        name="password"
        register={register}
        error={errors.password?.message}
      />{" "}
      <Input
        type="password"
        placeholder="Confirmar Contraseña"
        name="passwordConfirm"
        register={register}
        error={errors.passwordConfirm?.message}
      />
      <Button txt="Cambiar Contraseña" />
    </form>
  );
}
