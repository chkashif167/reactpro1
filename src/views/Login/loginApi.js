import axios from "axios";

export const loginApi = (email, password) => {
  return axios
    .post("https://reactpro1.herokuapp.com/user/login", {
      email: email,
      password: password
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      return res.data;
    });
};
