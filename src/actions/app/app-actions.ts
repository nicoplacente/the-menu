"use server";

import prisma from "@/libs/prisma";

export async function createApp(formData: any) {
  const { appName, primaryColor, bgColor, textColor, image, isTitleVisible } =
    JSON.parse(formData);

  const isTitleVisibleBool = isTitleVisible?.toString() == "on";

  try {
    if (!appName || !primaryColor || !bgColor || !textColor) {
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
        primaryColor,
        bgColor,
        textColor,
        image: temporalImg,
        isTitleVisible: isTitleVisibleBool,
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
