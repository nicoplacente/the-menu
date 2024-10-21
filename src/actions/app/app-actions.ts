"use server";

import prisma from "@/libs/prisma";
import { redirect } from "next/navigation";

export async function createApp(formData: any) {
  const {
    appName,
    primaryColor,
    bgColor,
    textColor,
    image,
    isImageRounded,
    isTitleVisible,
  } = JSON.parse(formData);

  // const primaryColor = formData.get("primaryColor")?.toString();
  // const bgColor = formData.get("bgColor")?.toString();
  // const textColor = formData.get("textColor")?.toString();
  // const image = formData.get("image");
  // const isImageRounded = formData.get("isImageRounded")?.toString() == "on";
  // const isTitleVisible = formData.get("isTitleVisible")?.toString() == "on";

  const isImageRoundedBool = isImageRounded?.toString() == "on";
  const isTitleVisibleBool = isTitleVisible?.toString() == "on";

  console.log(isImageRoundedBool);

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
        isImageRounded: isImageRoundedBool,
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
