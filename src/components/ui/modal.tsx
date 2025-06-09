"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { alerts } from "@/utils/alerts";

interface ModalProps {
  onclick: () => void;
}

export function Modal({ onclick }: ModalProps) {
  const {
    register,
    handleSubmit,
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
        onclick();
      } else {
        alerts("error", result.error || "Ocurrió un error al enviar el correo");
      }
    } catch (error) {
      console.error("Error al restablecer la contraseña", error);
      alerts("error", "Ocurrió un error inesperado");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg w-full flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full border-sky-500 border-2">
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
            className="bg-gray-500 text-white py-2 px-4 rounded hover:opacity-70 transition w-full"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="py-2 px-4 rounded bg-gradient-to-br to-orange-400 from-pink-500 w-full text-white hover:opacity-70 transition"
            onClick={handleSubmit(onSubmit)}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
