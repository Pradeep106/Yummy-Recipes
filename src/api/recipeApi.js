import api from "./api";

export const getRecipe = async () => {
  try {
    const response = await api.get(``, {
      params: {
        apiKey: "259032d0a8be419f8ddb21c6ec034a73", // Use the correct parameter name
        // You can add additional query parameters here, such as includeNutrition, etc.
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
