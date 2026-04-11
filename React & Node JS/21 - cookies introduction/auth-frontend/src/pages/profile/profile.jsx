import React, { useEffect } from "react";
import { fetchProfile } from "../../api/user-api";
import { useNavigate } from "react-router";

export default function Profile() {
  const navigate = useNavigate();
  async function displayUserProfile() {
    try {
      const result = await fetchProfile();
      console.log(result);
    } catch (ex) {
      console.error(ex);
      navigate("/user");
    }
  }

  useEffect(() => {
    displayUserProfile();
  }, []);
  return (
    <form action="http://localhost:3000/api/user/profile" encType="multipart/form-data" method="post">
      <input type="file" name="avatar" />
      <button type="submit">Upload</button>
    </form>
  );
}
