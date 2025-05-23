import React, { useState } from 'react'
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import { registerNewUser } from '../services/usersService';


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

export default function RegisterPage() {
  
const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const register = async () => {
    const newUser = {
      fullName,
      email,
      password,
      confirmPass,
    };

    await registerNewUser(newUser);
    navigate('/login')
  };


  return (
    <div  className='w-full min-h-screen bg-[linear-gradient(135deg,_#FFB3BA_10%,_#2e2a7278_70%)]'>
      <Box sx={style}>
            <Stack>
              <Typography variant="h6" component="h2" sx={{fontWeight: 700}}>
                Create Your Account
              </Typography>
              <Typography sx={{ mt: 2, pb: 0.5 }}>
                Full Name
              </Typography>
              <TextField value={fullName} onChange={(e) => setFullName(e.target.value)} size="small" sx={{width: '100%'}}/>
              <Typography sx={{ mt: 2, pb: 0.5 }}>
                Email Address
              </Typography>
              <TextField value={email} onChange={(e) => setEmail(e.target.value)} size="small" sx={{width: '100%'}}/>
              <Typography sx={{ mt: 2, pb: 0.5 }}>
                Password
              </Typography>
              <TextField value={password} onChange={(e) => setPassword(e.target.value)} size="small" sx={{width: '100%'}}/>
              <Typography sx={{ mt: 2, pb: 0.5 }}>
                Confirm Password
              </Typography>
              <TextField value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} size="small" sx={{width: '100%'}}/>
            </Stack>
            <Button onClick={register} variant="contained" sx={{width: '100%', marginTop: 3}}>Sign Up</Button>
            <Typography  sx={{textAlign: 'center',paddingTop: 4, fontSize: '15px', color: '#3c3333'}}>
              Already have an account? <Link to='/login' className="text-[#392F5A] font-bold hover:underline">login</Link>
            </Typography>
          </Box>
    </div>
  )
}
