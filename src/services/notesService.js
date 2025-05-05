import api from "./api";

// Fetch all notes
export const getMyNotes = async () => {
    const response = await api.get("/mongo/notes");
    return response.data;
};
