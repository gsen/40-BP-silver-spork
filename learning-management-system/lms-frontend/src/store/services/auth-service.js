// Need to use the React-specific entry point to import createApi
import { backendURL } from '@/api/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints

const ENDPOINTS = {
    REGISTER: '/register'
}

const baseURL = `${backendURL}/api/auth`
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query(body) {
                return {
                    url: ENDPOINTS.REGISTER,
                    method: 'POST',
                    body
                }
            }
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation } = authApi

export default authApi;