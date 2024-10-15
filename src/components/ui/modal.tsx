"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { resetPasswordAction } from "@/actions/auth/auth-actions";
import { alerts } from "@/utils/alerts";

interface ModalProps {
  onclick: () => void;
}

export function Modal({ onclick }: ModalProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();
      if (response.ok) {
        alerts("success", "Correo de restablecimiento enviado");
      } else {
        alerts("error", result.error || "Ocurrió un error al enviar el correo");
      }
    } catch (error) {
      console.error("Error al restablecer la contraseña", error);
      alerts("error", "Ocurrió un error inesperado");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Restablecer contraseña</h2>
        <input
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Ingresa un email válido",
            },
          })}
          type="email"
          placeholder="Ingresa tu email"
          className={`outline-none border-2 text-sm py-2 px-4 rounded-lg text-black w-full ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">
            {errors.email.message as string}
          </span>
        )}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onclick}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleSubmit(onSubmit)}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
