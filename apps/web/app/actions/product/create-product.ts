"use server";

import { createProductShema } from "@repo/types";
import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData) {
  const name = formData.get("name");
  const price = Number(formData.get("price"));
  const product = { name, price };

  const parsed = createProductShema.safeParse(product);
  if (!parsed.success) {
    throw new Error(parsed.error.message);
  }

  const response = await fetch(`${process.env.API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  revalidateTag("products");

  return response.json();
}
