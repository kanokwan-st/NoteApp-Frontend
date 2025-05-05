import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center pt-40 w-full min-h-screen bg-[linear-gradient(135deg,_#FFB3BA_10%,_#2e2a7278_70%)] shadow-gray-400 shadow-lg">
      <Typography variant="h1" sx={{ fontSize: "35px", fontWeight: "600" }}>
        👋 Hello! Welcome to My Note App! 📝
      </Typography>
      <Typography  sx={{paddingTop: 4, fontSize: '18px', color: '#3c3333'}}>
        Please <Link to='/login' className="text-[#392F5A] font-bold hover:underline">login</Link> to continue...
      </Typography>
    </div>
  );
}
