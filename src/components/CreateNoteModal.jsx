import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Checkbox, FormControlLabel, IconButton, Radio, Stack, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  px: 5,
  py: 4,
  borderRadius: 4
};

export default function CreateNoteModal({ noteModal, closeNote }) {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [tags, setTags] = useState();
  const [isPinned, setIsPinned] = useState(false);

  function throwNoteToStored() {
    const getNotesFromStored = JSON.parse(localStorage.getItem('notes')) || [];

    const newNote = {
      title,
      content,
      tags,
      isPinned
    }

    getNotesFromStored.push(newNote);
    localStorage.setItem('notes', JSON.stringify(getNotesFromStored));
    closeNote();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={noteModal} //if open == true --> open modal
        onClose={closeNote} //if click outside modal --> call function closeNote --> set state note to false
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={noteModal}>
          <Box sx={style}>
            <IconButton aria-label="close" onClick={closeNote} sx={{position: 'absolute', right: 20, top: 27 }}>
              <CloseIcon />
            </IconButton>
            <Stack>
              <Typography variant="h6" component="h2" sx={{fontWeight: 700}}>
                Create a New Note
              </Typography>
              <Typography sx={{ mt: 2, pb: 0.5 }}>
                Title
              </Typography>
              <TextField onChange={(e) => setTitle(e.target.value)} size="small" sx={{width: '100%'}}/>
              <Typography sx={{ mt: 2, pb: 0.5 }}>
                Content
              </Typography>
              <TextField onChange={(e) => setContent(e.target.value)} size="small" multiline rows={4} sx={{width: '100%'}}/>
              <Typography sx={{ mt: 2, pb: 0.5 }}>
                Tags
              </Typography>
              <TextField onChange={(e) => setTags(e.target.value)} size="small" placeholder="Enter tags separated by commas" sx={{width: '100%'}}/>
              <FormControlLabel control={<Checkbox checked={isPinned} onChange={(e) => setIsPinned(e.target.checked)} />} label="Pin this note" sx={{mt: 1}} />
            </Stack>
            <Button onClick={throwNoteToStored} variant="contained" sx={{width: '100%', marginTop: 2}}>Create Note</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
