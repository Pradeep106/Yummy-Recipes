import axios from "axios";

const baseUrl = "https://api.spoonacular.com/recipes";
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
