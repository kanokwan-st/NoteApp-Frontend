import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import { Link } from "react-router-dom";
import { deleteMyNoteById } from "../services/notesService";
import DetailModal from "./DetailModal";

export default function NoteCard({
  isPinned = true,
  title = "Title",
  content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente assumenda suscipit adipisci optio repudiandae fugiat eligendi quam? Ipsa odio voluptatem assumenda repellendus nobis pariatur provident sed eius, recusandae dolores?",
  tags = "tag",
  createdOn = "5/14/2025",
  id,
  refreshNotes
}) {

  const [detailModal, setDetailModal] = useState(false)
  function openDetail() {
    setDetailModal(true)
  }
  function closeDetail() {
    setDetailModal(false)
  }

  const date = new Date(createdOn);

  // DELETE FUNCTION
  const deleteNote = async (id) => {
    try {
      await deleteMyNoteById(id);
      await refreshNotes();
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { lg: "350px" },
          height: { lg: "220px" },
          gap: 1,
          paddingX: 3,
          paddingY: 2,
          bgcolor: "white",
          color: "primary.purple",
          transition: "all 0.5s ease",
          "&:hover": { transform: "scale(1.01)" },
        }}
      >
        {isPinned && (
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            <PushPinIcon sx={{ fontSize: "20px" }} /> Pinned
          </Typography>
        )}
        <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
          }}
        >
          {content}
        </Typography>
        <Chip label={`# ${tags}`} sx={{ alignSelf: "start", width: "auto" }} />
        <div className="flex justify-between mt-auto">
          <Typography sx={{ fontSize: "12px", paddingTop: "3px" }}>
            Created on: {date.toLocaleDateString()}
          </Typography>
          <div className="flex items-center gap-2 text-[12px]">
            
            {/* DETAIL BUTTON*/}
            <Link onClick={openDetail} className="textBlue hover:underline">
              Details
            </Link>
            <DetailModal detailModal={detailModal} closeDetail={closeDetail} refreshNotes={refreshNotes} id={id} title={title} content={content} tags={tags} isPinned={isPinned} createdOn={createdOn} />
            
            {/* DELETE BUTTON*/}
            <Link onClick={() => deleteNote(id)} className="textBlue hover:underline">
              Delete
            </Link>

            {/* PUBLISH BUTTON*/}
            <Link to="/" className="textBlue hover:underline">
              Publish
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
}
