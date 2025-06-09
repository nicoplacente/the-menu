// import uploadToR2 from "@/utils/upload-r2";
// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/libs/prisma";
// import handleFileUpload from "@/utils/validators/validate-image";

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();

//     const categories = [];
//     const uploadErrors: string[] = [];
//     const userAppData = formData.get("userApp[0]") as string;
//     const appData = JSON.parse(userAppData);

//     let app = await prisma.app.findUnique({
//       where: { id: appData.id },
//     });

//     if (!app) {
//       app = await prisma.app.create({
//         data: {
//           id: appData.id,
//           appName: appData.appName,
//           textColor: appData.textColor,
//           bgColor: appData.bgColor,
//           primaryColor: appData.primaryColor,
//           image: appData.image,
//           isTitleVisible: appData.isTitleVisible,
//           userId: appData.userId,
//         },
//       });
//     }

//     for (let i = 0; formData.has(`categories[${i}][name]`); i++) {
//       const name = formData.get(`categories[${i}][name]`) as string;
//       const link = formData.get(`categories[${i}][link]`) as string;
//       const subcategories = [];
//       const image = formData.get(`categories[${i}][image]`);

//       for (
//         let j = 0;
//         formData.has(`categories[${i}][subcategories][${j}]`);
//         j++
//       ) {
//         subcategories.push(
//           formData.get(`categories[${i}][subcategories][${j}]`) as string
//         );
//       }

//       let categoryImage = link;

//       if (image instanceof File) {
//         const { success, errors } = await handleFileUpload(image);

//         if (!success) {
//           uploadErrors.push(
//             `Error in category "${name}": ${errors.join(", ")}`
//           );
//           continue;
//         }

//         const imageBuffer = await image.arrayBuffer();
//         const buffer = Buffer.from(imageBuffer);
//         const imageKey = `imagenesComunidad/${image.name}`;
//         categoryImage = await uploadToR2(buffer, "aci", imageKey);
//       }

//       const categoryData = {
//         name,
//         categoryImage,
//         subcategories,
//       };
//       categories.push(categoryData);

//       // Create the category and link it to the App
//       await prisma.category.create({
//         data: {
//           categoryID: name.trim().toLowerCase().replace(/ /g, "-"),
//           name: categoryData.name,
//           categoryImage: categoryData.categoryImage,
//           appId: app.id,
//           subcategories: {
//             create: categoryData.subcategories.map((subcat) => ({
//               name: subcat,
//             })),
//           },
//         },
//         include: { subcategories: true },
//       });
//     }

//     if (uploadErrors.length > 0) {
//       return new NextResponse(
//         JSON.stringify({
//           message: "Errores de validación de archivos",
//           errors: uploadErrors,
//           success: false,
//         }),
//         { status: 400 }
//       );
//     }

//     return new NextResponse(
//       JSON.stringify({
//         message: "Categorías creadas correctamente",
//         categories,
//         success: true,
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error al crear las categorías:", error);
//     return new NextResponse(
//       JSON.stringify({ message: "Error al crear las categorías" }),
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// export async function OPTIONS() {
//   return new NextResponse(null, { status: 204 });
// }
