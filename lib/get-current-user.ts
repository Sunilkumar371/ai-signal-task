import { headers } from "next/headers";

import { verifyToken } from "./jwt";
import { ApiError } from "./api-error";

export const getCurrentUser = async () => {
  const headersList = await headers();

  const authHeader =
    headersList.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    throw new ApiError(401, "Unauthorized");
  }

  const token = authHeader.split(" ")[1];

  const decoded = verifyToken(token) as {
    userId: string;
    email: string;
  };

  return decoded;
};