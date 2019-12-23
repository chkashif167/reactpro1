import axios from "axios";

export const registerApi = (username, fullname, email, password) => {
  return axios
    .post("https://reactpro1.herokuapp.com/user/signup", {
      username: username,
      fullname: fullname,
      email: email,
      password: password
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      //return res.data;
    });
};
