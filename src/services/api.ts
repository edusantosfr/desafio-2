import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    'Authorization': `token`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});