import api from "./api";
import dotenv from "dotenv";
export const getRecipe = async (number = 20) => {
  dotenv.config();
  try {
    const response = await api.get("/random", {
      params: {
        number: number,
        apiKey: process.env.apiKey,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
