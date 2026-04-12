import React, { useEffect } from "react";
import { fetchProfile, uploadProfileImage } from "../../api/user-api";
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

  async function uploadProfilePicture(event) {
    event.preventDefault();
    const formData = new FormData();
    const file = event.target.avatar.files[0];
    formData.append("avatar", file);

    const result = await uploadProfileImage(formData);
    if (result) {
      alert("Profile image uploaded!");
    }
  }

  useEffect(() => {
    displayUserProfile();
  }, []);
  return (
    <form onSubmit={uploadProfilePicture}>
      <input type="file" name="avatar" />
      <button type="submit">Upload</button>
    </form>
  );
}
