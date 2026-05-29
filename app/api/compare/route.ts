import { asyncHandler } from "@/lib/async-handler";

import {
  successResponse,
} from "@/lib/api-response";

import {
  compareCollegesSchema,
} from "@/schemas/compare.schema";

import { CompareService } from "@/services/compare.service";

export const GET = asyncHandler(
  async (req: Request) => {
    const { searchParams } =
      new URL(req.url);

    const idsParam =
      searchParams.get("ids");

    const ids =
      idsParam
        ?.split(",")
        .map((id) => id.trim()) ??
      [];

    const validated =
      compareCollegesSchema.parse({
        ids,
      });

    const comparison =
      await CompareService.compareColleges(
        validated.ids
      );

    return successResponse(
      comparison,
      "Comparison fetched successfully"
    );
  }
);