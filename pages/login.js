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
    <div class="flex items-center justify-center h-screen">
      <Header />
      <div class="flex flex-col mt-16 items-center">
        <div class="max-w-4xl bg-slate-700 px-14 py-12 rounded-lg shadow-md w-[35rem] h-[27.5rem]">
          <h2 class="text-3xl text-white font-semibold mb-8">Login</h2>
          <div class="mb-4">
            <label
              htmlFor="username"
              class="block mb-2 text-sm font-medium text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              class="w-full px-3 py-2 border rounded-md focus:outline-none mb-3 focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div class="mb-4">
            <label
              htmlFor="password"
              class="block mb-2 text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              class="w-full px-3 py-2 border rounded-md mb-6 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600"
            onClick={handleGoToMyAccount}
          >
            Go to My Account
          </button>
        </div>
      </div>
    </div>
  );
}
