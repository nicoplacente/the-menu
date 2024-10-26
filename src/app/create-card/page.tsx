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
import { useEffect } from "react";

export default function CreateCard() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    try {
      const anashe = await createApp(JSON.stringify(data));

      if (!anashe) {
        alerts("error", "Debes completar todos los campos");
      } else {
        alerts("success", "Carta creada exitosamente");
        router.push("/create-card/add-categories");
      }
    } catch (err) {
      alerts("error", "Error al crear el menú, vuelve a intentarlo mas tarde");
    }
  };

  useEffect(() => {
    window.alert(
      "PONER DATOS PARA GUARDAR EL FOOTER EN PRISMA Y EN LOS FORMS (HORARIOS,UBICACION, NUMERO DE TELEFONO Y INSTAGRAM Y FACEBOOK), LAS REDESSOCIALES SON OPCIONALES PERO LA UBICACION, HORARIOS Y NUMERO DETELEFONO NO"
    );
  }, []);

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
            <h4>Color principal</h4>
            <Parrafos>Este será el color que resaltará en la carta</Parrafos>
            <InputForm type="color" name="primaryColor" className="hidden" />
            <span className="hover:underline cursor-pointer opacity-75">
              Seleccionar color
            </span>
          </Label>

          <Label>
            <h4>Color de fondo</h4>
            <Parrafos>Este será el color de fondo en la carta</Parrafos>
            <InputForm type="color" name="bgColor" className="hidden" />
            <span className="hover:underline cursor-pointer opacity-75">
              Seleccionar color
            </span>
          </Label>

          <Label>
            <h4>Color del texto</h4>
            <Parrafos>
              Es recomendable elegir un color que contraste bien con el color de
              fondo
            </Parrafos>
            <select
              name="textColor"
              className="bg-transparent p-2 opacity-70 [&>option]:bg-gray-900"
            >
              <option value="#000">Negro</option>
              <option value="#FFF">Blanco</option>
            </select>
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

          <Label>
            <h4>¿Mostrar el nombre de la carta como titulo en el banner?</h4>
            <Parrafos>Si marcas que no, solo se verá el banner</Parrafos>
            <YesNoButton name="isTitleVisible" />
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
