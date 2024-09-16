"use client";
import { LoginAction, LoginGoogleAction } from "@/actions/auth/auth-actions";
import Input from "@/components/ui/inputLogin";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { alerts } from "@/utils/alerts";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="flex w-full h-screen items-center p-4 md:p-0">
      <img
        src="https://imgs.search.brave.com/OXOxyx32R_ZaOGTmDNEpOmSxoF2swtf2Soy3q8fErAk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5z/cGVjc2V1LmJpemF5/LmNvbS8yNC8xNC9l/bWVudGEtQTQucG5n/P3ZlcnNpb249M2E1/NDdjNDhlNmQ3Y2E2/ZWE2NWJjNWU1MGQ3/M2IzNzM"
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
    </section>
  );
};

export default Login;
