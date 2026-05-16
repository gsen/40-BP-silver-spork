import Bull from "bull";
export const signupQueue = new Bull("sign-up-queue");


