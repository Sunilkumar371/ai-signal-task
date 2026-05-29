import { z } from "zod";

export const compareCollegesSchema = z.object({
  ids: z
    .array(z.uuid())
    .min(2, "Minimum 2 colleges required")
    .max(3, "Maximum 3 colleges allowed"),
});

export type CompareCollegesInput =
  z.infer<typeof compareCollegesSchema>;