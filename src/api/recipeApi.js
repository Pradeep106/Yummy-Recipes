import api from "./api";
// import dotenv from "dotenv";
export const getRecipe = async (number = 20) => {
  // dotenv.config();
  try {
    const response = await api.get("/random", {
      params: {
        number: number,
        apiKey: "c358bca78e964aa788a333d3ac61efd7",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
