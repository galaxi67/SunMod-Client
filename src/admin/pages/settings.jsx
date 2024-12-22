import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Settings() {
  const [user, setUser] = useState({ name: "N/A", email: "N/A" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/users");
        if (response.data && response.data.length > 0) {
          setUser(response.data[0]);
        } else {
          setUser({ name: "N/A", email: "N/A" });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout");
      navigate("/signin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="relative flex flex-col break-words h-auto w-[250px] lg:w-[450px] bg-white mb-6 shadow-xl rounded-custom-br">
      <div className="">
        <div className="w-full p-10 flex justify-center">
          <img
            alt="..."
            src="https://res.cloudinary.com/dtpxp4yjv/image/upload/v1734639559/products/jg5remlsiqixehj38tp0.png"
            className="shadow-xl p-2 rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-24 lg:w-28"
          />
        </div>
        <div className="text-center mt-2 lg:mt-4">
          {user.name === "N/A" && user.email === "N/A" ? (
            <p>Data pengguna tidak tersedia</p>
          ) : (
            <>
              <h3 className="text-xl lg:text-3xl font-normal leading-normal text-custom-black">{user.name}</h3>
              <div className="text-xs lg:text-sm leading-normal mb-2 lg:mb-8 mt-0 lg:mt-2 text-slate-400 font-bold uppercase">{user.email}</div>
            </>
          )}
        </div>
        <div className="text-center mt-4 mb-6">
          <button
            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
