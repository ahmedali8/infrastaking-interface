import axios from "axios";

const client = axios.create({
  baseURL: "https://backend.depins.io",
  // baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
