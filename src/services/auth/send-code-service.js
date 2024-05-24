import { api } from "..";

export const sendCode = (data) => {
  console.log(data, "data");
  return api.post("api/admin/auth/recovery/check", {
    email: data.email,
    code: "823396",
  });
};
