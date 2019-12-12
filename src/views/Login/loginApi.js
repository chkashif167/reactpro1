import axios from "axios";

export const loginApi = (email, password) => {
  return axios
    .post("https://reqres.in/api/login", {
      username: email,
      password: password
    })
    .then(res => {
      return res.data;
    });
};
