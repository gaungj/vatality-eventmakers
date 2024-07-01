"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function loginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const findUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!findUser) {
    return {
      status: "error",
      message: "User Tidak Ditemukan",
    };
  }

  const isPass = await bcrypt.compare(password, findUser.password);
  if (!isPass) {
    return {
      status: "error",
      message: "Password Salah",
    };
  }

  const payload = {
    id: findUser.id,
    username: findUser.username,
    email: findUser.email,
  };

  const jwtToken = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  cookies().set("token", jwtToken, { httpOnly: true });
  return {
    status: "success",
    message: "Login Berhasil",
  };
}
