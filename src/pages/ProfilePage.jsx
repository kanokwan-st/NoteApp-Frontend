import { Typography } from "@mui/material";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col py-12 px-5 sm:px-10 md:px-20 lg:px-50 w-full min-h-screen bg-[linear-gradient(135deg,_#FFB3BA_10%,_#2e2a7278_70%)] shadow-gray-400 shadow-lg">
      <Typography variant="h1" sx={{ fontSize: "35px", fontWeight: "600" }}>
        abc's Public Profile
      </Typography>
      <Typography sx={{ paddingTop: 4, fontSize: "18px" }}>
        Email: abc@gmail.com
      </Typography>
      <Typography sx={{ paddingTop: 4, fontSize: "18px" }}>
        Public Notes
      </Typography>
      <Typography sx={{ paddingTop: 4, fontSize: "18px" }}>
        No public notes available.
      </Typography>
    </div>
  );
}
