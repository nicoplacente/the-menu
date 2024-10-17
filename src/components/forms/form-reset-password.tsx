"use client";
import { Button } from "@/components/ui/button";
import Input from "../ui/inputLogin";
import { useForm } from "react-hook-form";
import { alerts } from "@/utils/alerts";
import { validateResetPassword } from "@/utils/validators/reset-password-validations";
import { useEffect, useState } from "react";
import { VerifyToken } from "@/actions/auth/verifyToken";
import { resetPasswordAction } from "@/actions/auth/auth-actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { update } = useSession();

  useEffect(() => {
    const checkToken = async () => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (!token) {
          alerts("error", "Token inválido o inexistente");
          router.push("/auth/login");
          return;
        }
        try {
          const response = await VerifyToken(token);
          if (response.valid) {
            setIsClient(true);
          } else {
            alerts("error", "Token inválido");
            router.push("/auth/login");
          }
        } catch (error) {
          alerts("error", "Error al validar el token");
          router.push("/auth/login");
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
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("token");
    const dataWithToken = {
      ...data,
      token: tokenFromUrl,
    };
    const response = await resetPasswordAction(dataWithToken);
    if (response.success === true) {
      await update();
      alerts("success", response.message);
      router.push("/");
    } else {
      alerts("error", "Ocurrió un error al iniciar sesión");
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
        placeholder="Ingresa la nueva contraseña"
        name="password"
        register={register}
        error={errors.password?.message}
      />{" "}
      <Input
        type="password"
        placeholder="Confirma la nueva contraseña"
        name="passwordConfirm"
        register={register}
        error={errors.passwordConfirm?.message}
      />
      <Button txt="Cambiar Contraseña" />
    </form>
  );
}
