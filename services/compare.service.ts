import { prisma } from "@/lib/prisma";
import { ApiError } from "@/lib/api-error";

export class CompareService {
  static async compareColleges(ids: string[]) {
    const colleges = await prisma.college.findMany({
      where: {
        id: {
          in: ids,
        },
      },

      include: {
        placements: true,
      },
    });

    if (colleges.length < 2) {
      throw new ApiError(404, "Colleges not found");
    }

    return colleges.map((college) => ({
      id: college.id,
      valueScore: 
      (
        (college.rating / 5 ) * 40 +
        (college.placements[0]?.averagePackage / 20 ) * 60
      ).toFixed(1),
      name: college.name,

      location: college.location,

      fees: college.fees,

      rating: college.rating,

      averagePackage: college.placements[0]?.averagePackage ?? 0,

      highestPackage: college.placements[0]?.highestPackage ?? 0,
    }));
  }
}
