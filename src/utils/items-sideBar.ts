import { signOut } from "next-auth/react";
interface Item {
  txt: string;
  funcion?: () => Promise<void>;
}

export const ItemsSideBar: Item[] = [
  {
    txt: "Perfil",
    funcion: undefined,
  },
  {
    txt: "Administrar Carta",
    funcion: undefined,
  },
  {
    txt: "Administrar Metodos de pago",
    funcion: undefined,
  },
  {
    txt: "Cancelar Subscripcion",
    funcion: undefined,
  },
  {
    txt: "Cerrar Sesion",
    funcion: async () => {
      await signOut({
        callbackUrl: "/",
      });
    },
  },
];
