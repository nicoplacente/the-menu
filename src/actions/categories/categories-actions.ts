"use server";

import uploadToR2 from "@/utils/upload-r2";
import handleFileUpload from "@/utils/validators/validate-image";
export const CategoriesAction = async (formData: FormData) => {
  try {
    console.log(formData);
    const image = formData.get("categories[0][image]") as File;
    console.log(image);

    if (image) {
      const response = await handleFileUpload(image);
      if (response.success === false) {
        return response;
      }
      // const imageKey = `imagenesComunidad/${image.originalname}`;
      // const imageUrl = await uploadToR2(image.buffer, "aci", imageKey);
    }

    return true;
  } catch (error) {
    console.error("Error al procesar la categoría", error);
    return false;
  }
};
