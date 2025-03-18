import { z } from "astro/zod";

export const search_animes_schema = z.object({
  title: z.string().min(1),
});

export type SearchAnimesSchema = z.infer<typeof search_animes_schema>;
