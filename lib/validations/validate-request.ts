import {unknown, z} from "zod";
import { ApiError } from "../api-error";

export const validateRequest = <T>(
    schema : z.ZodSchema<T>,
    data : unknown
):T => {
    const result = schema.safeParse(data);

    if(!result.success){
        throw new ApiError(
            400,
            result.error.issues[0]?.message || "Validation failed"
        )
    }

    return result.data
}