"use server";

export async function registerAction(formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirm_pass = formData.get("confirm-password");
}
