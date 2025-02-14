import z from "zod";

export const createProductShema = z.object({
  name: z.string().min(1),
  price: z.number(),
});

export const productShema = z.object({
  ...createProductShema.shape,
  id: z.string(),
});

export type CreateProduct = z.infer<typeof createProductShema>;
export type Product = z.infer<typeof productShema>;
