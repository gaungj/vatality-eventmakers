import { s3Clients } from "@/utils/aws";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export async function uploadImage({ key, folder, body }) {
  const buffer = Buffer.from(await body.arrayBuffer());

  try {
    const fileUpload = await s3Clients.send(
      new PutObjectCommand({
        Key: `${folder}/${key}`,
        Bucket: process.env.R2_BUCKETNAME,
        Body: buffer,
      })
    );
    console.log(fileUpload);
  } catch (error) {
    console.log(error);
  }
}
