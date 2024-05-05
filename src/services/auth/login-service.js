import axios from "axios";

export const sendLoginInfo = (data) => {
  return axios.post("http://localhost:4000/api/admin/auth/login", {
    email: data.username,
    password: data.password,
  });
};
