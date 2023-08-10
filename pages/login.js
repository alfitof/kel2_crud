import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";

export default function Login() {
    const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleGoToMyAccount = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Header />
      <div className="flex flex-col items-center">
        <div className="max-w-4xl bg-slate-700 p-5 rounded-lg shadow-md">
          <h2 className="text-2xl text-white font-semibold mb-4">Login</h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={handleGoToMyAccount}
          >
            Go to My Account
          </button>
        </div>
      </div>
    </div>
  );
};

