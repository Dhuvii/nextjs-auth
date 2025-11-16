"use client";

import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import Cookie from "js-cookie";

const SigninForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setIsSubmitting(true);

    try {
      const loginData = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      const loginResult = await loginData.json();
      const token = loginResult.data.token || "";

      Cookie.set("auth_token", token);
    } catch (error) {
      console.error("Failed to sign in", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex w-full items-center justify-center gap-2">
            <Spinner
              size="xs"
              wrapperClass="w-auto justify-center "
              className="text-white"
              aria-label="Signing in"
            />
            <span>Signing In...</span>
          </div>
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
};

export default SigninForm;
