import { asyncHandler } from "@/lib/async-handler";

import {
  successResponse,
} from "@/lib/api-response";

import { getCurrentUser } from "@/lib/get-current-user";

import { SavedCollegeService } from "@/services/saved-college.service";

type Params = Promise<{
  collegeId: string;
}>;

export const DELETE =
  asyncHandler(
    async (
      req: Request,
      {
        params,
      }: {
        params: Params;
      }
    ) => {
      const currentUser =
        await getCurrentUser();

      const { collegeId } =
        await params;

      await SavedCollegeService.removeSavedCollege(
        currentUser.userId,
        collegeId
      );

      return successResponse(
        null,
        "College removed successfully"
      );
    }
  );