import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  IconButton,
  Radio,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PushPinIcon from "@mui/icons-material/PushPin";

// import { createMyNote } from "../services/notesService";

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
  borderRadius: 4,
};

export default function DetailModal({
  detailModal,
  closeDetail,
//   refreshNotes,
  isPinned = true,
  title = "Title",
  content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente assumenda suscipit adipisci optio repudiandae fugiat eligendi quam? Ipsa odio voluptatem assumenda repellendus nobis pariatur provident sed eius, recusandae dolores?",
  tags = "tag",
  createdOn = "5/14/2025",
}) {

  const date = new Date(createdOn);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={detailModal} //if open == true --> open modal
        onClose={closeDetail} //if click outside modal --> call function closeDetail --> set state detailModal to false
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={detailModal}>
          <Box sx={style}>
            <IconButton
              aria-label="close"
              onClick={closeDetail}
              sx={{ position: "absolute", right: 20, top: 27 }}
            >
              <CloseIcon />
            </IconButton>
            {/* CONTENT */}
            <Stack spacing={2}>
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
              <Chip
                label={`# ${tags}`}
                sx={{ alignSelf: "start", width: "auto" }}
              />
              <Typography sx={{ fontSize: "12px", paddingTop: "3px" }}>
                Created on: {date.toLocaleDateString()}
              </Typography>
              <Button
                        variant="contained"
                        sx={{
                          width: "150px",
                          fontSize: "15px",
                          backgroundColor: "primary.darkPink",
                        }}
                        // onClick={() => openCreateNoteForm()} //set state note to true --> open modal
                      >
                        Edit note
                </Button>
            </Stack>
            {/* <Button onClick={createNote} variant="contained" sx={{width: '100%', marginTop: 2}}>Create Note</Button> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
