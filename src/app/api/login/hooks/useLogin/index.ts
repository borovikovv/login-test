import { AuthResponse } from "@/app/types";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation<AuthResponse, Error, { email: string; password: string }>({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      console.log(email, password);

      const variables = {
        email: "demo@site.com",
        password: "demo123",
      };

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(variables),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      return response.json();
    },
  });
};
