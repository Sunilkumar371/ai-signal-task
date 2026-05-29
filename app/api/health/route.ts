import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json(
      {
        success: true,
        status: "healthy",
        services: {
          api: "up",
          database: "connected",
        },
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Health Check Failed:", error);

    return NextResponse.json(
      {
        success: false,
        status: "unhealthy",
        services: {
          api: "up",
          database: "disconnected",
        },
        timestamp: new Date().toISOString(),
      },
      {
        status: 503,
      }
    );
  }
}