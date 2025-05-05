import api from "./api";

// Fetch all notes
export const getMyNotes = async () => {
    const response = await api.get("/mongo/notes");
    return response.data;
};

// CREATE NOTE
export const createMyNote = async (newNote) => {
    const response = await api.post("/mongo/notes", newNote);
    return response.data;
}

// DELETE NOTE
export const deleteMyNoteById = async (id) => {
    const res = await api.delete(`/mongo/notes/${id}`);
    return res.data;
}
