import { useSession } from "next-auth/react";

export const Perfil: React.FC = () => {
  const { data } = useSession();
  return (
    <div className="flex justify-between text-white">
      <div className="p-2">
        <h1>Perfil</h1>
        <h2>Nombre del usuario: {data?.user?.name}</h2>
        <h4>Correo del usuario: {data?.user?.email}</h4>
      </div>
      <div>
        <img
          src={data?.user?.image || ""}
          alt={data?.user?.name}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
