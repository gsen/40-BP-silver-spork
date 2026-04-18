import React from "react";

export default function Contact() {
  function getContactInfo() {
    throw new Error("Failed to fetch contact info");
  }

  return (
    <div>
      Contact
      {getContactInfo()}
      <button>Contact Us</button>
    </div>
  );
}
