interface ApiSuccessResponse<T> {
    success: true,
    status: number,
    message: string,
    data: T[]
}


interface ApiErrorResponse {
    success: false,
    status: number,
    message: string,
    error: string
}



export type ApiResponse<T> = | ApiSuccessResponse<T> | ApiErrorResponse