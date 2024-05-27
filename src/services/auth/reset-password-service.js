import { api } from "..";

export const resetPassword = (data) => {
  return api.post("api/admin/auth/login", {
    email: data.email,
    password: data.password,
  });
};
