import { errorResponse } from "./api-response";
import { ApiError } from "./api-error";

export const asyncHandler = (handler:Function) => {
    return async(...args:any[]) => {
        try {
            return await handler(...args)
        } catch (error) {
            console.error(error);
            if(error instanceof ApiError){
                return errorResponse(error.message,error.statusCode)
            }
            
            return errorResponse("Internal Server Error",500)
        }
    }
}