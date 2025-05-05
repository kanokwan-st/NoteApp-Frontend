import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Checkbox, FormControlLabel, IconButton, Radio, Stack, TextField } from "@mui/material";

export default function EditBlock({
  isPinned,
  title,
  content,
  tags,
  // createdOn,
}) {

  const [editIsPinned, setEditIsPinned] = useState(isPinned);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const [editTags, setEditTags] = useState(tags);


  return (
    <div>
      <Stack>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
          Edit Note
        </Typography>
        <Typography sx={{ mt: 2, pb: 0.5 }}>Title</Typography>
        <TextField
          onChange={(e) => setEditTitle(e.target.value)}
          value={editTitle}
          size="small"
          sx={{ width: "100%" }}
        />
        <Typography sx={{ mt: 2, pb: 0.5 }}>Content</Typography>
        <TextField
          onChange={(e) => setEditContent(e.target.value)}
          value={editContent}
          size="small"
          multiline
          rows={4}
          sx={{ width: "100%" }}
        />
        <Typography sx={{ mt: 2, pb: 0.5 }}>Tags</Typography>
        <TextField
          onChange={(e) => setEditTags(e.target.value)}
          value={editTags}
          size="small"
          placeholder="Enter tags separated by commas"
          sx={{ width: "100%" }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={editIsPinned}
              onChange={(e) => setEditIsPinned(e.target.checked)}
            />
          }
          label="Pin this note"
          sx={{ mt: 1 }}
        />
      </Stack>
    </div>
  );
}
