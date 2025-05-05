import api from "./api";

// FETCH ALL NOTES
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

// EDIT NOTE
export const editMyNoteById = async (id, editedNote) => {
    const res = await api.put(`/mongo/notes/${id}`, editedNote)
    return res.data;
}
