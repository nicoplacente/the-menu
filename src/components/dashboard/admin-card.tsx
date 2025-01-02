import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { InputDashboard } from "../ui/input-dashboard";

export const AdminCard: React.FC = () => {
  const { data } = useSession();
  const [appName, setAppName] = useState(data?.user?.app[0].appName || "");

  const handleSave = () => {
    console.log({ appName });
  };

  return (
    <div className="flex flex-col h-full justify-between border-2 text-white">
      <div className="p-2">
        <h1 className="underline">Editar Datos del APP</h1>
        <h3>Identificador del App: {data?.user?.app[0].id}</h3>
        <InputDashboard
          label="Nombre App:"
          value={appName}
          onChange={setAppName}
        />
      </div>
      <div className="justify-end mx-2">
        <Button txt="Guardar" onclick={handleSave} />
      </div>
    </div>
  );
};
