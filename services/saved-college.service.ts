import { prisma } from "@/lib/prisma";
import { ApiError } from "@/lib/api-error";

export class SavedCollegeService {
  static async saveCollege(userId: string, collegeId: string) {
    const college = await prisma.college.findUnique({
      where: {
        id: collegeId,
      },
    });

    if (!college) {
      throw new ApiError(404, "College not found");
    }

    const existing = await prisma.savedCollege.findUnique({
      where: {
        userId_collegeId: {
          userId,
          collegeId,
        },
      },
    });

    if (existing) {
      throw new ApiError(409, "College already saved");
    }

    return prisma.savedCollege.create({
      data: {
        userId,
        collegeId,
      },
    });
  }

  static async getSavedColleges(userId: string) {
    return prisma.savedCollege.findMany({
      where: {
        userId,
      },

      include: {
        college: {
          select: {
            id: true,
            name: true,
            location: true,
            fees: true,
            rating: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static async removeSavedCollege(userId: string, collegeId: string) {
    const saved = await prisma.savedCollege.findUnique({
      where: {
        userId_collegeId: {
          userId,
          collegeId,
        },
      },
    });

    if (!saved) {
      throw new ApiError(404, "Saved college not found");
    }

    await prisma.savedCollege.delete({
      where: {
        id: saved.id,
      },
    });

    return true;
  }
}
