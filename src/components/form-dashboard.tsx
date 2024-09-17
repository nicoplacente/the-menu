"use client";

import { IconUserCircle } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Input from "./ui/inputLogin";

export default function FormDashboard() {
  const { data: session } = useSession();
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
      <span className="flex flex-col gap-3">
        <Input
          type="text"
          placeholder="modificar 1"
          name="field1"
          register={register}
        />
        <Input
          type="text"
          placeholder="modificar 2"
          name="field2"
          register={register}
        />
        <Input
          type="text"
          placeholder="modificar 3"
          name="field3"
          register={register}
        />
        <Input
          type="text"
          placeholder="modificar 4"
          name="field4"
          register={register}
        />
      </span>
      <span>
        {session?.user?.image ? (
          <img
            src={session?.user?.image}
            alt="User Image"
            className="rounded-full size-52"
          />
        ) : (
          <label htmlFor="fileInput">
            <IconUserCircle className="cursor-pointer text-white text-6xl size-52" />
          </label>
        )}
        <input
          id="fileInput"
          type="file"
          className="hidden"
          {...register("file")}
        />
      </span>
    </form>
  );
}
