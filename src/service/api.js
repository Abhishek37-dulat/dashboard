import axios from "axios";

const URL = process.env.REACT_APP_URL;
console.log(URL);

export const authenticatesSignup = async (data) => {
  try {
    const registerdata = await axios.post(`${URL}/admin/register`, data);
    return registerdata;
  } catch (error) {
    return error.response;
  }
};

export const authenticatesLogin = async (data) => {
  console.log(URL);
  try {
    const logindata = await axios.post(`${URL}/admin/login`, data);
    localStorage.setItem("admintoken", logindata.data.token);
    localStorage.setItem("adminrefreshtoken", logindata.data.refreshtoken);
    return logindata;
  } catch (error) {
    return error;
  }
};

export const refreshCall = async (data) => {
  try {
    const logindata = await axios.post(`${URL}/admin/refresh-token`, data);

    localStorage.setItem("admintoken", logindata.data.token);
    localStorage.setItem("adminrefreshtoken", logindata.data.refreshtoken);
    return logindata;
  } catch (error) {
    return error;
  }
};
