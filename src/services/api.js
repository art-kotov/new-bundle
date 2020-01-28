import axios from "axios";

const token = () => localStorage.getItem("token");

export const ax = axios.create({
  baseURL: `${process.env.API}`,
  headers: {
    "Content-Type": "application/json"
  }
});

ax.interceptors.request.use(config => {
  config.headers.Authorization = `JWT ${token()}`;
  return config;
});

ax.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return error.response;
  }
);

export const api = {
  posts: {
    getPosts: () => ax.get("/posts")
  }
};
