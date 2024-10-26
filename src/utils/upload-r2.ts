import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

const accessKeyId = process.env.ACCESS_KEY as string;
const secretAccessKey = process.env.SECRET_KEY as string;

if (!accessKeyId || !secretAccessKey) {
  throw new Error(
    "Las claves de acceso de AWS no están definidas en las variables de entorno."
  );
}

const s3 = new S3Client({
  endpoint: process.env.URL_CLOUDFLARE,
  region: "auto",
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

async function uploadToR2(fileBuffer: Buffer, bucketName: string, key: string) {
  try {
    const webpBuffer = await sharp(fileBuffer).webp({ quality: 20 }).toBuffer();

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: webpBuffer,
      ContentType: "image/webp",
      ACL: "public-read",
    });

    await s3.send(command);
    const imageUrl = `https://${process.env.PUBLIC_URL}/${key}`;
    return imageUrl;
  } catch (err) {
    console.error("Error uploading file:", err);
    throw err;
  }
}

export default uploadToR2;
