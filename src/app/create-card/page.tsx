"use client";

import { createApp } from "@/actions/app/app-actions";
import YesNoButton from "@/components/dashboard/yes-no-button";
import SectionContainer from "@/components/yourcard-landing/section-container";
import { useRouter } from "next/navigation";
import { alerts } from "@/utils/alerts";
import Label from "@/components/ui/label-form";
import InputForm from "@/components/ui/input-form";
import Parrafos from "@/components/ui/parrafos";
import { IconUpload } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

export default function CreateCard() {
  const router = useRouter();
  const { data, update } = useSession();
  const userId = data?.user?.id;
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const dataFull = { ...data, userId };
    try {
      const anashe = await createApp(JSON.stringify(dataFull));
      if (!anashe) {
        alerts("error", "Debes completar todos los campos");
      } else {
        await update();
        alerts("success", "Carta creada exitosamente");
        router.push("/create-card/preview");
      }
    } catch (err) {
      alerts("error", "Error al crear el menú, vuelve a intentarlo mas tarde");
    }
  };

  return (
    <SectionContainer
      className="text-white"
      title="Crea tu carta"
      description="Es muy simple, solo sigue las indicaciones"
    >
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="create-card-form grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 items-center">
          <Label>
            <h3>Nombre del restaurante</h3>

            <InputForm
              type="text"
              className="py-2 px-4 bg-gray-900 text-white"
              name="appName"
              placeholder="Ej: Tacos Bar"
            />
          </Label>

          <Label>
            <h4>Banner</h4>
            <Parrafos>
              Ingresa una foto del banner o logo de tu restaurante
            </Parrafos>
            <InputForm
              type="file"
              name="image"
              className="hidden"
              accept=".png, .jpeg, .jpg, .webp"
            />
            <span className="hover:underline cursor-pointer flex gap-2 items-center">
              Subir imágen <IconUpload />
            </span>
          </Label>
        </div>

        <button
          type="submit"
          className="relative my-12 w-full sm:w-1/3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-pink-800"
          aria-label="Iniciar sesión con Google"
        >
          <span className="mx-auto px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 w-full rounded-md group-hover:bg-opacity-0">
            Continuar
          </span>
        </button>
      </form>
    </SectionContainer>
  );
}
