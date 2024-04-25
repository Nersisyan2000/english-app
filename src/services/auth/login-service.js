import axios from "axios";

export const sendLoginInfo = (data) => {
  console.log(data, "data");
  return axios.post("https://dummyjson.com/auth/login", {
    username: "kminchelle",
    password: "0lelplR",
    expiresInMins: 30,
  });
};
