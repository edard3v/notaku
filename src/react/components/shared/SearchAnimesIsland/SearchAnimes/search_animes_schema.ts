import { z } from "astro/zod";

export const search_animes_schema = z.object({
  title: z.string().min(2, { message: "Mínimo 2 carácteres" }),
});

export type SearchAnimesSchema = z.infer<typeof search_animes_schema>;
