import { createApp } from "@/actions/app/app-actions";
import YesNoButton from "@/components/dashboard/yes-no-button";
import SectionContainer from "@/components/yourcard-landing/section-container";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export default async function CreateCard() {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
  }
  return (
    <SectionContainer
      className="text-white"
      title="Crea tu carta"
      description="Es muy simple, solo sigue las indicaciones"
    >
      <form
        action={createApp}
        className="create-card-form grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-9 items-center"
      >
        <label>
          <h3>Nombre del restaurante</h3>

          <input type="text" name="appName" />
        </label>

        <label>
          <h3>Color principal</h3>
          <p>Este será el color que resaltará en la carta</p>
          <input type="color" name="primaryColor" />
        </label>

        <label>
          <h3>Color de fondo</h3>
          <p>Este será el color de fondo en la carta</p>
          <input type="color" name="bgColor" />
        </label>

        <label>
          <h3>Color del texto</h3>
          <p>
            Es recomendable elegir un color que contraste bien con el color de
            fondo
          </p>
          <select
            name="textColor"
            className="bg-transparent p-2 opacity-70 [&>option]:bg-gray-900"
          >
            <option value="#000">Negro</option>
            <option value="#FFF">Blanco</option>
          </select>
        </label>

        <label>
          <h3>Logo</h3>
          <p>Ingresa una foto del logo de tu restaurante</p>
          <input
            type="file"
            name="image"
            className="hidden"
            accept=".png, .jpeg, .jpg"
          />
          <span className="hover:underline cursor-pointer">Subir imágen</span>
        </label>

        <label>
          <h3>¿Tu Logo es redondo?</h3>
          <p>En caso de poner que no, el logo sera cuadrado</p>
          <YesNoButton name="isImageRounded" />
        </label>

        <label>
          <h3>¿Mostrar el nombre de la carta como titulo?</h3>
          <p>Si marcas que no, solo se verá la imagen de logo</p>
          <YesNoButton name="isTitleVisible" />
        </label>
      </form>
      <div className="flex justify-center">
        <button
          type="submit"
          className="relative my-12 w-full sm:w-1/3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-pink-800"
          aria-label="Iniciar sesión con Google"
        >
          <span className="mx-auto px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 w-full rounded-md group-hover:bg-opacity-0">
            Continuar
          </span>
        </button>
      </div>
    </SectionContainer>
  );
}
