import uploadToR2 from "@/utils/upload-r2";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import handleFileUpload from "@/utils/validators/validate-image";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const categories = [];
    const uploadErrors: string[] = [];

    for (let i = 0; formData.has(`categories[${i}][name]`); i++) {
      const name = formData.get(`categories[${i}][name]`) as string;
      const link = formData.get(`categories[${i}][link]`) as string;
      const subcategories = [];
      const image = formData.get(`categories[${i}][image]`);

      for (
        let j = 0;
        formData.has(`categories[${i}][subcategories][${j}]`);
        j++
      ) {
        subcategories.push(
          formData.get(`categories[${i}][subcategories][${j}]`) as string
        );
      }

      let categoryImage = link;

      if (image instanceof File) {
        const { success, errors } = await handleFileUpload(image);

        if (!success) {
          uploadErrors.push(
            `Error en la categoría "${name}": ${errors.join(", ")}`
          );
          continue;
        }

        const imageBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(imageBuffer);
        const imageKey = `imagenesComunidad/${image.name}`;
        categoryImage = await uploadToR2(buffer, "aci", imageKey);
      }

      categories.push({
        name: name,
        categoryImage: categoryImage,
        subcategories: subcategories,
      });
    }

    if (uploadErrors.length > 0) {
      return new NextResponse(
        JSON.stringify({
          message: "Errores de validación de archivos",
          errors: uploadErrors,
          success: false,
        }),
        { status: 400 }
      );
    }
    for (const category of categories) {
      const categoryID = category.name
        .trim()
        .split(" ")
        .join("-")
        .toLowerCase();
      await prisma.category.create({
        data: {
          categoryID,
          name: category.name,
          categoryImage: category.categoryImage,
          subcategories: {
            create: category.subcategories.map((subcat) => ({
              name: subcat,
            })),
          },
        },
        include: {
          subcategories: true,
        },
      });
    }

    return new NextResponse(
      JSON.stringify({
        message: "Archivos subidos correctamente",
        categories,
        success: true,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error uploading file" }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
