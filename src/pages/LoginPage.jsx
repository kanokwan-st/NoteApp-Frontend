import React, { useState } from 'react'
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/usersService';
import { useAuth } from '../context/AuthContext';


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
  const { login } = useAuth();
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // CONNECT TO BACKEND
  const handleLogin = async () => {
    try {
      const user = {
        email,
        password
      }
      const response = await loginUser(user);
      login(response.user)
      navigate('/mynote');
    } catch(err) {
      console.log(err);
    }
  }

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
              <TextField value={email} onChange={(e) => setEmail(e.target.value)} size="small" sx={{width: '100%'}}/>
              <Typography sx={{ mt: 2, pb: 0.5 }}>
                Password
              </Typography>
              <TextField value={password} onChange={(e) => setPassword(e.target.value)} size="small" sx={{width: '100%'}}/>
            </Stack>
            <Button onClick={handleLogin} variant="contained" sx={{width: '100%', marginTop: 3}}>Login</Button>
            <Typography  sx={{textAlign: 'center',paddingTop: 4, fontSize: '15px', color: '#3c3333'}}>
              Don't have an account? <Link to='/register' className="text-[#392F5A] font-bold hover:underline">Sign up</Link>
            </Typography>
          </Box>
    </div>
  )
}
