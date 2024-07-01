import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export function auth() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return null;
  }
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    return payload;
  } catch (error) {
    return null;
  }
}
