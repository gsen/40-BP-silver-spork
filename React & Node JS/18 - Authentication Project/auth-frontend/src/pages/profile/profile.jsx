import React, { useEffect } from "react";
import { fetchProfile } from "../../api/user-api";
import { useNavigate } from "react-router";

export default function Profile() {
  const navigate = useNavigate();
  function displayUserProfile() {
    try {
      fetchProfile().then(console.log);
    } catch (ex) {
      console.error(ex);
      navigate("/user");
    }
  }

  useEffect(() => {
    displayUserProfile();
  }, []);
  return <div>Profile</div>;
}
