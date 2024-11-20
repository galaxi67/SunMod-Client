import React from "react";
import ProfilImage from "../assets/profile.jpg";

const Profil = () => {
  return (
    <div className="profile-container max-w-full mt-12 mx-[10%] grid grid-cols-1 sm:grid-cols-2">
      <div className="profile-avatar-wrapper ml-14">
        <img src={ProfilImage} alt="Profile" className="profile-avatar  " />
      </div>
      <div className="profile-content p-6 space-y-4 mt-5">
        <h1 className="text-6xl font-semi-bold leading-tight">
          Hallo, Saya <br />
          dr. Fils
        </h1>
        <p className="text-gray-700 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Profil;
