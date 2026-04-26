import { useState } from "react";
import { LoginForm } from "@components/auth/login";
import "./App.css";
import { Routes, Route } from "react-router";
import AuthLayout from "@components/auth/auth-layout";
import { SignupForm } from "@components/auth/sign-up";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Route>

      <Route path="/">
        <Route index element={<h1>Home Page</h1>} />
      </Route>

      {/* <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Profile />} />
      </Route> */}
    </Routes>
  );
}

export default App;
