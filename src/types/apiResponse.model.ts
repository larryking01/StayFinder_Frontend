interface ApiSuccessResponse<T> {
    message: string,
    data: T
}


interface ApiErrorResponse {
    message: string,
    error: string
}



export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse