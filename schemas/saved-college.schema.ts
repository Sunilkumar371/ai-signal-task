import { z } from "zod";

export const saveCollegeSchema = z.object({
  collegeId: z.uuid("Invalid college id"),
});

export type SaveCollegeInput =
  z.infer<typeof saveCollegeSchema>;