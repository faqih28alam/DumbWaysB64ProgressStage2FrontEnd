// api.ts

import axios from "axios";

export const api = axios.create({
    baseURL: "https://fakestoreapi.com/",
    // baseURL: "https://localhost:3000/", //if using backend localhost
});
