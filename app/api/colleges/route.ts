import { asyncHandler } from "@/lib/async-handler";
import { successResponse } from "@/lib/api-response";

import { CollegeService } from "@/services/college.service";

import {
  getCollegesSchema,
} from "@/schemas/college.schema";

export const GET = asyncHandler(
  async (req: Request) => {
    const { searchParams } =
      new URL(req.url);

    const query = {
      page:
        searchParams.get("page") ??
        undefined,

      limit:
        searchParams.get("limit") ??
        undefined,

      search:
        searchParams.get("search") ??
        undefined,

      location:
        searchParams.get("location") ??
        undefined,

      minFees:
        searchParams.get("minFees") ??
        undefined,

      maxFees:
        searchParams.get("maxFees") ??
        undefined,

      sortBy:
        searchParams.get("sortBy") ??
        undefined,

      order:
        searchParams.get("order") ??
        undefined,
    };

    const validatedQuery =
      getCollegesSchema.parse(query);

    const result =
      await CollegeService.getColleges(
        validatedQuery
      );

    return successResponse(
      result,
      "Colleges fetched successfully"
    );
  }
);