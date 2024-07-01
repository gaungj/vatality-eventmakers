"use server";

import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/uploadImage";

export async function createEventAction(formData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const location = formData.get("location");
  const image = formData.get("image");

  if (!name || !description || !location) {
    return {
      success: false,
      message: "Required fields are not set",
    };
  }
  console.log(image.size);
  if (image.size > 1000000) {
    return {
      success: false,
      message: "Image is too large, max 1 MB",
    };
  }
    console.log(image);
    const event = await prisma.event.create({
      data: {
        name,
        description,
        location,
        image: image.name,
      },
    });
    await uploadImage({ key: image.name, body: image, folder: event.id });

  redirect("/dashboard/events");
}
