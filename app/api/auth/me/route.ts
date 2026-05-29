import { asyncHandler } from "@/lib/async-handler";
import { successResponse } from "@/lib/api-response";

import { getCurrentUser } from "@/lib/get-current-user";

import { AuthService } from "@/services/auth.service";

export const GET = asyncHandler(async () => {
  const currentUser =
    await getCurrentUser();

  const user =
    await AuthService.getProfile(
      currentUser.userId
    );

  return successResponse(
    user,
    "Profile fetched successfully"
  );
});