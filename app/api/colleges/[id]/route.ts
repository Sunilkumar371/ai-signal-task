import { asyncHandler } from "@/lib/async-handler";
import { successResponse } from "@/lib/api-response";

import { CollegeService } from "@/services/college.service";

type Params = Promise<{
  id: string;
}>;

export const GET = asyncHandler(
  async (
    req: Request,
    { params }: { params: Params }
  ) => {
    const { id } = await params;

    const college =
      await CollegeService.getCollegeById(
        id
      );

    return successResponse(
      college,
      "College fetched successfully"
    );
  }
);