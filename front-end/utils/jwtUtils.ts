import axios from "axios";

export const setJWT = (token?: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    localStorage.setItem("MY_WEBSITE_TOKEN", token);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("MY_WEBSITE_TOKEN");
  }
};

export const getJWT = () => {
  return localStorage.getItem("MY_WEBSITE_TOKEN");
};
