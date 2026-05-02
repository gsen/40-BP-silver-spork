import { get } from "./api";

const baseUrl = "api/courses";

export const COURSE_ENDPOINTS = {
  getAllCourses: baseUrl,
};

export function getAllCourses() {
  return get(COURSE_ENDPOINTS.getAllCourses, false);
}
