"use client";

import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "./ui/button";

export default function AzureAuthButton() {
  const { instance } = useMsal();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await instance.loginPopup({
        scopes: ["user.read"],
        prompt: "select_account",
      });
    } catch (error) {
      console.error("Login failed", error);
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    instance.logoutPopup();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign in with Azure AD"}
      </Button>
      <Button onClick={handleLogout} variant="outline">
        Sign out
      </Button>
    </div>
  );
}

