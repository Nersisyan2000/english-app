import axios from "axios";

export const resetPassword = (data) => {
    return axios.post("http://localhost:4000/api/admin/auth/login", {
        password: data.password,
        confirmPassword: data.confirmPassword,
    })
}