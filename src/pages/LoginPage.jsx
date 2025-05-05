import React, { useState } from 'react'
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 20,
  px: 5,
  py: 4,
  borderRadius: 2
};

export default function LoginPage() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className='w-full min-h-screen bg-[linear-gradient(135deg,_#FFB3BA_10%,_#2e2a7278_70%)]'>
      <Box sx={style}>
            <Stack>
              <Typography variant="h6" component="h2" sx={{fontWeight: 700}}>
                Login to Your Account
              </Typography>
              <Typography sx={{ mt: 2, pb: 0.5 }}>
                Email Address
              </Typography>
              <TextField onChange={(e) => setEmail(e.target.value)} size="small" sx={{width: '100%'}}/>
              <Typography sx={{ mt: 2, pb: 0.5 }}>
                Password
              </Typography>
              <TextField onChange={(e) => setPassword(e.target.value)} size="small" sx={{width: '100%'}}/>
            </Stack>
            <Button  variant="contained" sx={{width: '100%', marginTop: 3}}>Sign Up</Button>
            <Typography  sx={{textAlign: 'center',paddingTop: 4, fontSize: '15px', color: '#3c3333'}}>
              Don't have an account? <Link to='/register' className="text-[#392F5A] font-bold hover:underline">Sign up</Link>
            </Typography>
          </Box>
    </div>
  )
}
