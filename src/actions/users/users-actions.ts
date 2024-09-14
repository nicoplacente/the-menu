"use server";

import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function CreateUsers(formData: FormData) {}

export async function UpdateUsers(formData: FormData) {}

export async function DeleteUsers(formData: FormData) {
  "use server";
  const userId = formData.get("userId")?.toString();

  if (!userId) {
    return;
  }

  //   await prisma.task.delete({
  //     where: {
  //       id: parseInt(taskId),
  //     },
  //   });

  revalidatePath("/");
}
