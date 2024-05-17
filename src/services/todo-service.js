import { api } from "../api/api";

export const getTodos = async () => {
  try {
    const res = await api.get("/todos");
    if (!res.data) {
      throw new Error("No data received from server");
    }
    return res.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};


export const deleteTodos = async (id) => {
    try {
      const res = await api.delete(`/todos/${id}`);
      if (!res.data) {
        throw new Error("No data received from server");
      }
      return res.data;
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  };
  
