import axios from "axios";

const API = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.ap",
  timeout: 15000,
});

export default API;
