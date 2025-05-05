import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DetailBlock from "./DetailBlock";
import EditBlock from "./EditBlock";

export default function StepDetailEdit({
  isPinned,
  title,
  content,
  tags,
  createdOn,
}) {
  const steps = ["DetailBlock", "EditBlock"];
  const step = [
    <DetailBlock
      title={title}
      content={content}
      tags={tags}
      isPinned={isPinned}
      createdOn={createdOn}
    />,
    <EditBlock
      title={title}
      content={content}
      tags={tags}
      isPinned={isPinned}
      createdOn={createdOn}
    />,
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            The edit has been completed.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleReset}
              color="inherit"
              sx={{ mr: 0, background: "" }}
            >
              Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        // ---------------------------------------------------------------------------------------> here
        <React.Fragment sx={{ width: "100%" }}>
          <div className="pt-[32px]">{step[activeStep]}</div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 4,
              justifyContent: "space-around",
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 0, background: "" }}
            >
              Back
            </Button>
            {/* <Box sx={{ flex: "1 1 auto" }} /> */}
            {activeStep === 0 ? (
              <Button
                onClick={handleNext}
                sx={{
                  width: "150px",
                  fontSize: "15px",
                  backgroundColor: "primary.blue",
                  color: "white",
                }}
              >
                Edit note
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                sx={{
                  width: "150px",
                  fontSize: "15px",
                  backgroundColor: "primary.darkPink",
                  color: "white",
                }}
              >
                Save note
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
