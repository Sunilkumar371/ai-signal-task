import { asyncHandler } from "@/lib/async-handler";
import {
  successResponse,
} from "@/lib/api-response";

import { getCurrentUser } from "@/lib/get-current-user";

import { validateRequest } from "@/lib/validations/validate-request";

import { saveCollegeSchema } from "@/schemas/saved-college.schema";

import { SavedCollegeService } from "@/services/saved-college.service";

export const POST = asyncHandler(
  async (req: Request) => {
    const currentUser =
      await getCurrentUser();

    const body =
      await req.json();

    const validatedData =
      validateRequest(
        saveCollegeSchema,
        body
      );

    const savedCollege =
      await SavedCollegeService.saveCollege(
        currentUser.userId,
        validatedData.collegeId
      );

    return successResponse(
      savedCollege,
      "College saved successfully",
      201
    );
  }
);

export const GET = asyncHandler(
  async () => {
    const currentUser =
      await getCurrentUser();

    const savedColleges =
      await SavedCollegeService.getSavedColleges(
        currentUser.userId
      );

    return successResponse(
      savedColleges,
      "Saved colleges fetched successfully"
    );
  }
);