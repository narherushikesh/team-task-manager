import axios from "axios";

const API = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://team-task-manager-spnf.vercel.app/_/backend",
});

export default API;