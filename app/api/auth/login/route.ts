import { asyncHandler } from "@/lib/async-handler";
import { successResponse } from "@/lib/api-response";

import { validateRequest } from "@/lib/validations/validate-request";

import { loginSchema } from "@/schemas/auth.schema";
import { AuthService } from "@/services/auth.service";

export const POST = asyncHandler(async (req: Request) => {
  const body = await req.json();

  const validatedData = validateRequest(
    loginSchema,
    body
  );

  const result = await AuthService.login(
    validatedData
  );

  return successResponse(
    result,
    "Login successful"
  );
});