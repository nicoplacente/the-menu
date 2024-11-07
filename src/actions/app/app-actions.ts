"use server";

import prisma from "@/libs/prisma";

export async function createApp(formData: any) {
  const { appName, image, userId } = JSON.parse(formData);
  // const isTitleVisibleBool = isTitleVisible?.toString() == "on";
  try {
    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      return { error: "Usuario no encontrado" };
    }

    if (!appName) {
      return false;
    }

    let temporalImg;

    if (!image) {
      temporalImg = "";
    }

    const id = appName.trim().split(" ").join("-").toLowerCase();

    const createdApp = await prisma.app.create({
      data: {
        id,
        appName,
        image: temporalImg,
        userId,
      },
      include: {
        User: true,
      },
    });

    if (!createdApp) {
      return false;
    }

    return true;
  } catch (err) {
    return { error: "Error al crear el menú" };
  }
}
