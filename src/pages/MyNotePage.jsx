import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import NoteCard from "../components/NoteCard";
import CreateNoteModal from "../components/CreateNoteModal";
import { getMyNotes } from "../services/notesService";

export default function MyNotePage() {

  const [notes, setNotes] = useState([]) 

  // State for open and close Note Form Modal (Form for create a note)
  const [noteModal, setNoteModal] = useState(false);

  function openCreateNoteForm() {
    setNoteModal(true);
  }

  function closeCreateNoteForm() {
    setNoteModal(false);
  }

  // PULL NOTE FROM LOCAL STORAGE
  // const notes = JSON.parse(localStorage.getItem("notes")) || [];

  // CONNECT TO BACKEND (GET NOTES FROM DATABASE)
  const fetchNotes = async () => {
    try {
      const data = await getMyNotes();
      setNotes(data.notes)
    } catch (err) {
      console.error(err);
    }
  };

  // Don't forget {}
  useEffect(() => {
    fetchNotes();
  }, []);



  return (
    <div className="flex flex-col">
      {/* <header className="flex flex-col px-5 sm:px-10 md:px-20 lg:px-50 py-12 w-full bg-[linear-gradient(135deg,_#FFB3BA_10%,_#f8fcff_90%)] shadow-gray-400 shadow-lg"> */}
      <header className="flex flex-col px-5 sm:px-10 md:px-20 lg:px-50 py-12 w-full bg-[linear-gradient(135deg,_#FFB3BA_10%,_#2e2a7231_70%)] shadow-gray-400 shadow-lg">
        <h1 className="pb-4 text-3xl font-bold">Welcome to My Note App 📝</h1>
        <p className="pb-8 italic">
          The place that help you manage your life by creating a note
        </p>
        <Stack direction="row" spacing={4} sx={{ paddingBottom: 3 }}>
          <TextField
            label="Search notes by title, content, or tags"
            size="small"
            sx={{ width: "100%" }}
          />
          <Button
            variant="contained"
            startIcon={<SearchIcon sx={{ fontSize: "25px !important" }} />}
            sx={{
              paddingX: 4,
              fontSize: "15px",
              background: "linear-gradient(90deg, #FF677D 25%, #392F5A 90%)",
            }}
          >
            Search
          </Button>
        </Stack>
        <Button
          variant="contained"
          startIcon={<TextSnippetIcon sx={{ fontSize: "25px !important" }} />}
          sx={{
            width: "250px",
            fontSize: "15px",
            backgroundColor: "primary.darkPink",
          }}
          onClick={() => openCreateNoteForm()} //set state note to true --> open modal
        >
          Create note
        </Button>
        <CreateNoteModal
          noteModal={noteModal}
          closeNote={closeCreateNoteForm}
          refreshNotes={fetchNotes}
        />
      </header>
      <main className="flex flex-col px-5 sm:px-10 md:px-20 lg:px-50 py-10 w-full bg-[linear-gradient(180deg,_#2e2a72a2_30%,_#f8fcff_99%)]">
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          {Array.isArray(notes) && notes.map((note) => {
            return (
              <NoteCard
                key={note._id}
                id={note._id}
                title={note.title}
                content={note.content}
                tags={note.tags}
                isPinned={note.isPinned}
                createdOn={note.createdOn}
                refreshNotes={fetchNotes}
              />
            );
          })}

        </Stack>
      </main>
    </div>
  );
}
