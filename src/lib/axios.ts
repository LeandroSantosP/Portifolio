import axios from "axios";

export const apiContant = axios.create({
   baseURL: "https://api.staticforms.xyz/",
})