"use server";

import prisma from "@/libs/prisma";

export async function createApp(formData: FormData) {
  const appName = formData.get("name");
  const primaryColor = formData.get("primaryColor");
  const bgColor = formData.get("bgColor");
  const textColor = formData.get("textColor");
  const image = formData.get("image");
  const isImageRounded = formData.get("isImageRounded") === "on";
  const isTitleVisible = formData.get("isTitleVisible") === "on";

  console.log(
    appName,
    primaryColor,
    bgColor,
    textColor,
    image,
    isImageRounded,
    isTitleVisible
  );
}
