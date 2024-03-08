import api from "./apiConfig.js";

export const getCats = async () => {
  try {
    const response = await api.get("/cats");
    return response.data;
  } catch (error) {
    console.error("Error Getting all Cats");
  }
};

export const getCat = async (id) => {
  try {
    const response = await api.get(`/cat/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error Getting Cat");
  }
};

export const createCat = async (catData) => {
  try {
    const response = await api.post("/cats", catData);
    return response.data;
  } catch (error) {
    console.error("Error Creating a Cat");
  }
};

export const editCat = async (id, catData) => {
  try {
    const response = await api.put(`/cats/${id}`, catData);
    return response.data;
  } catch (error) {
    console.error("Error Creating a Cat");
  }
};

export const deleteCat = async (id) => {
  try {
    const response = await api.delete(`/cats/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error Creating a Cat");
  }
};
