import React from 'react'
import Typography from "@mui/material/Typography";
import { Button, Chip, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PushPinIcon from "@mui/icons-material/PushPin";

export default function DetailBlock({
  isPinned,
  title,
  content,
  tags,
  createdOn,
}) {

  const date = new Date(createdOn);

  return (
    <div>
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
            </Stack>
    </div>
  )
}
