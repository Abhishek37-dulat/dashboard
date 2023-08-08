import axios from "axios";

const URL = "https://hair-product-api-buuh.vercel.app";

export const authenticatesSignup = async (data) => {
  try {
    const registerdata = await axios.post(`${URL}/admin/register`, data);
    return registerdata;
  } catch (error) {
    return error.response;
  }
};

export const authenticatesLogin = async (data) => {
  try {
    const logindata = await axios.post(`${URL}/admin/login`, data);
    localStorage.setItem("token", logindata.data.token);
    localStorage.setItem("refreshtoken", logindata.data.refreshtoken);
    return logindata;
  } catch (error) {
    return error;
  }
};

export const refreshCall = async (data) => {
  try {
    const logindata = await axios.post(`${URL}/admin/refresh-token`, data);

    localStorage.setItem("token", logindata.data.token);
    localStorage.setItem("refreshtoken", logindata.data.refreshtoken);
    return logindata;
  } catch (error) {
    return error;
  }
};
