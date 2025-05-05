import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Chip, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PushPinIcon from "@mui/icons-material/PushPin";
import StepDetailEdit from "./StepDetailEdit";


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
  isPinned,
  title,
  content,
  tags,
  createdOn,
  id,
  refreshNotes
}) {
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
          {/* BOX */}
          <Box sx={style}>
            {/* CLOSE BUTTON */}
            <IconButton
              aria-label="close"
              onClick={closeDetail}
              sx={{ position: "absolute", right: 20, top: 27 }}
            >
              <CloseIcon />
            </IconButton>
            {/* CONTENT */}
            <StepDetailEdit
              title={title}
              content={content}
              tags={tags}
              isPinned={isPinned}
              createdOn={createdOn}
              id={id}
              refreshNotes={refreshNotes}
              closeDetail={closeDetail}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
