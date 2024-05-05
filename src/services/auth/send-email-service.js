import axios from "axios";

export const sendEmail = (data) => {
    return axios.post("http://localhost:4000/api/admin/auth/login", {
        email: data.email,
    })
}