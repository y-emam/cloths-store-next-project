import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SigninForm = ({ page }) => {
  return (
    <div className="bg-gray-900 text-white p-8 shadow-lg w-full max-w-md my-20">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {page === "signUp" ? "Sign Up" : "Sign In"}
      </h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm">
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
        {page === "signUp" && (
          <div>
            <label htmlFor="username" className="block text-sm">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 mt-1 text-black focus:outline-none"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="password" className="block text-sm">
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
          onClick={async () => {
            if (page === "signUp") {
              const email = document.getElementById("email").value;
              const password = document.getElementById("password").value;
              const username = document.getElementById("username").value;
              const res = await mongoSignUp(email, username, password);
              if (res) {
                return signIn("credentials", { email, password });
              }
            } else {
              return signIn("credentials", { email, password });
            }
          }}
        >
          {page === "signUp" ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <div className="w-full flex items-center mt-4">
        <Link
          href={page === "signUp" ? "/signin" : "/signup"}
          className="w-full text-white text-center hover:underline"
        >
          {page === "signUp"
            ? "Already have an Account."
            : "Create a new Account"}
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4">
        <hr className="w-1/4 border-1 border-gray-500" />
        <span className="text-gray-400">OR</span>
        <hr className="w-1/4 border-1 border-gray-500" />
      </div>
      <div className="mt-6 flex flex-col space-y-4">
        <button
          className="w-full py-2 bg-red-600 text-white font-semibold hover:bg-red-700 flex items-center justify-center"
          onClick={() => signIn("google")}
        >
          <i className="fab fa-google mr-2"></i>
          {page === "signUp" ? "Sign up with Google" : "Sign in with Google"}
        </button>
        <button
          className="w-full py-2 bg-gray-900 text-white font-semibold hover:bg-gray-800 flex items-center justify-center"
          onClick={() => signIn("github")}
        >
          <i className="fab fa-github mr-2"></i>
          {page === "signUp" ? "Sign up with Github" : "Sign in with Github"}
        </button>
      </div>
    </div>
  );
};

export default SigninForm;