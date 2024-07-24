"use client";

import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  // return <div className="text-white">Login</div>;
  return (
    <div className="bg-gray-900 text-white p-8 shadow-lg w-full max-w-md my-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form className="space-y-4">
        <div>
          <label for="email" className="block text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 mt-1 text-black focus:outline-none"
            required
          />
        </div>
        <div>
          <label for="password" className="block text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 mt-1 text-black focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-black text-white font-semibold border-white border-2 hover:bg-gray-800 hover:border-gray-100"
        >
          Sign In
        </button>
      </form>
      <br />
      <div className="mt-6 flex flex-col space-y-4">
        <button
          className="w-full py-2 bg-red-600 text-white font-semibold hover:bg-red-700 flex items-center justify-center"
          onClick={() => signIn("google")}
        >
          <i className="fab fa-google mr-2"></i> Sign in with Google
        </button>
        <button
          className="w-full py-2 bg-gray-900 text-white font-semibold hover:bg-gray-800 flex items-center justify-center"
          onClick={() => signIn("Github")}
        >
          <i className="fab fa-github mr-2"></i> Sign in with GitHub
        </button>
        <button
          className="w-full py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center justify-center"
          onClick={() => signIn("facebook")}
        >
          <i className="fab fa-facebook mr-2"></i> Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
