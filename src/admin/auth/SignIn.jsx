import React, { useState } from "react";
import axios from "axios";
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", userData);
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      console.log("Login Successful");

      navigate("/admin");
    } catch (error) {
      setError(error.response ? error.response.data.message : "An error occurred");
    }
  };

  return (
    <div className="flex h-screen flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-100 text-white flex flex-col items-center justify-center rounded-lg shadow-lg p-8 sm:p-11 w-full max-w-sm sm:max-w-md">
        <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-sidebar">Sign In</h2>
        <p className="text-center text-sm sm:text-base font-normal tracking-wide leading-6 text-gray-600 mb-4 mt-2">
          Silahkan masukan email dan password anda
        </p>
        <div className="sm:mx-auto sm:w-full">
          <form onSubmit={handleLogin} className="">
            <div>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="block w-full rounded-custom-br bg-white px-10 py-2 text-sm sm:text-base text-gray-900 outline outline-2 outline-slate-500/15 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div>
              <div className="relative mt-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="block w-full rounded-custom-br bg-white px-10 py-2 text-sm sm:text-base text-gray-900 outline outline-2 outline-slate-500/15 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  ) : (
                    <EyeSlashIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end text-sm mt-2">
              <a href="/admin" className="font-semibold text-xs sm:text-sm text-blue-700/60 hover:text-blue-500">
                Lupa password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="flex mt-5 w-full justify-center rounded-custom-br bg-blue-500 px-3 py-2 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-sky-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          {error && <p className="mt-4 text-center text-xs sm:text-sm text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
