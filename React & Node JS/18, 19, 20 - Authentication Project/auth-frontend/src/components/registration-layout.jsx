import React from "react";
import { Outlet } from "react-router";
export default function RegistrationLayout() {
  return (
    <article className="grid h-dvh place-content-center">
      <Outlet />
    </article>
  );
}
