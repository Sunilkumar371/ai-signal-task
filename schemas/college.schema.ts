import { z } from "zod";

export const getCollegesSchema = z.object({
  page: z.coerce.number().min(1).default(1),

  limit: z.coerce.number()
    .min(1)
    .max(50)
    .default(10),

  search: z.string().optional(),

  location: z.string().optional(),

  minFees: z.coerce.number().optional(),

  maxFees: z.coerce.number().optional(),

  sortBy: z
    .enum(["fees", "rating", "createdAt"])
    .default("createdAt"),

  order: z
    .enum(["asc", "desc"])
    .default("desc"),
});

export type GetCollegesInput =
  z.infer<typeof getCollegesSchema>;