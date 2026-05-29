import { ApiError } from "@/lib/api-error";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

import { GetCollegesInput } from "@/schemas/college.schema";

export class CollegeService {
  static async getColleges(
    query: GetCollegesInput
  ) {
    const {
      page,
      limit,
      search,
      location,
      minFees,
      maxFees,
      sortBy,
      order,
    } = query;

    const skip = (page - 1) * limit;

    const where: Prisma.CollegeWhereInput =
      {};

    // Search by college name
    if (search) {
      where.name = {
        contains: search,
        mode: "insensitive",
      };
    }

    // Filter by location
    if (location) {
      where.location = {
        equals: location,
        mode: "insensitive",
      };
    }

    // Filter by fees range
    if (
      minFees !== undefined ||
      maxFees !== undefined
    ) {
      where.fees = {};

      if (minFees !== undefined) {
        where.fees.gte = minFees;
      }

      if (maxFees !== undefined) {
        where.fees.lte = maxFees;
      }
    }

    const [colleges, total] =
      await Promise.all([
        prisma.college.findMany({
          where,
          skip,
          take: limit,

          orderBy: {
            [sortBy]: order,
          },
        }),

        prisma.college.count({
          where,
        }),
      ]);

    return {
      colleges,

      pagination: {
        total,
        page,
        limit,

        totalPages: Math.ceil(
          total / limit
        ),

        hasNextPage:
          page * limit < total,

        hasPrevPage:
          page > 1,
      },
    };
  }


static async getCollegeById(
  collegeId: string
) {
  const college =
    await prisma.college.findUnique({
      where: {
        id: collegeId,
      },

      include: {
        courses: true,
        placements: true,
        reviews: true,
      },
    });

  if (!college) {
    throw new ApiError(
      404,
      "College not found"
    );
  }

  return college;
}
}