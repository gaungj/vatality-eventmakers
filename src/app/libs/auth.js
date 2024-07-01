import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export function auth() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return null;
  }
  try {
<<<<<<< HEAD
    const payload = jwt.verify(token, process.env.SECRET_KEY);
=======
    const payload = jwt.verify(token, process.env.SECTET_KEY);
>>>>>>> d23548e (membuat ui login dan authentication login)
    return payload;
  } catch (error) {
    return null;
  }
}
