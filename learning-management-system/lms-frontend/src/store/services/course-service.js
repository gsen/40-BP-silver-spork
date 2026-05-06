import { backendURL } from '@/api/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = `${backendURL}/api/`;

export const courseAPI = createApi({
    reducerPath: 'courseAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        fetchAllCourses: builder.query({
            query: () => ({ url: "courses" })
        }),
        fetchCourseById: builder.query({
            query: (courseId) => `/courses/${courseId}`
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchAllCoursesQuery, useFetchCourseByIdQuery } = courseAPI;

export default courseAPI;
