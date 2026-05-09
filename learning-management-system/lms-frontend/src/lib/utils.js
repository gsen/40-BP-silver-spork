import { backendURL } from "@/api/api";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getInstructorName(instructor) {
  if (!instructor) {
    return "Instructor";
  }

  const fullName = [instructor.firstName, instructor.lastName].filter(Boolean).join(" ");
  return fullName || instructor.email || "Instructor";
}

export function createImageUrl(imageURL) {
  if (imageURL) {
    return `${backendURL}/${imageURL}`;
  }
  return null;
}
