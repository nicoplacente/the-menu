"use server";

import prisma from "@/libs/prisma";

export async function createApp(formData: FormData) {
  const appName = formData.get("appName")?.toString();
  const primaryColor = formData.get("primaryColor")?.toString();
  const bgColor = formData.get("bgColor")?.toString();
  const textColor = formData.get("textColor")?.toString();
  const image = formData.get("image");
  const isImageRounded = formData.get("isImageRounded")?.toString() == "on";
  const isTitleVisible = formData.get("isTitleVisible")?.toString() == "on";

  if (!appName || !primaryColor || !bgColor || !textColor) {
    return;
  }

  let temporalImg;

  if (!image) {
    temporalImg = "";
  }

  const id = appName.trim().split(" ").join("-").toLowerCase();

  await prisma.app.create({
    data: {
      id,
      appName,
      primaryColor,
      bgColor,
      textColor,
      image: temporalImg,
      isImageRounded,
      isTitleVisible,
    },
  });
}
