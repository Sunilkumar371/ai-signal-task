import { asyncHandler } from "@/lib/async-handler";
import { successResponse } from "@/lib/api-response";

import { validateRequest } from "@/lib/validations/validate-request";

import { registerSchema } from "@/schemas/auth.schema";
import { AuthService } from "@/services/auth.service";

export const POST = asyncHandler(async (req: Request) => {
  const body = await req.json();

  const validatedData = validateRequest(
    registerSchema,
    body
  );

  const result = await AuthService.register(
    validatedData
  );

  return successResponse(
    result,
    "User registered successfully",
    201
  );
});