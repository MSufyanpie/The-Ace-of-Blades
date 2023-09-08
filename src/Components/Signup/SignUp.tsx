import { Box,  TextField, Typography,Stack,  Button,  } from '@mui/material'
import React, { useState } from 'react'
import { BiSolidUserCircle } from "react-icons/bi"
import {createUserWithEmailAndPassword,updateProfile
} from 'firebase/auth'
import {auth} from '../../Config/Firebase'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
     const navigate=useNavigate()
    const[data,setUserData]:any=useState({
        Name:"",
        Email:"",
        Password:""
   }) 
   const[errormsg,setErrormsg]:any=useState("");
   const HandleSubmit=()=>{
    console.log(data)
    createUserWithEmailAndPassword(auth,data.Email,data.Password).then(async(res)=>{
        const user=res.user
       await updateProfile(user,{
          displayName:data.Name
       })
    })
    .catch((err)=>{
     setErrormsg(err.message)
    })
   navigate('/')
   }
  return (
    
        <Box  width={'70%'} sx={{backgroundColor:'white',borderRadius:'10px'}} marginTop={'10%'} marginLeft={'15%'}>
       
        <Stack direction={'row'} spacing={2}  >
        
        <Box sx={{background:'linear-gradient(-160deg, #ddd6f3,#faaca8)'}}>
        <Typography color={'purple'}  gutterBottom textAlign={'center'} variant='h2' fontFamily={'Oswald'} fontWeight={'bold'}>
            
          <BiSolidUserCircle></BiSolidUserCircle>
        </Typography>
        <Stack spacing={3} direction={'column'} px={25}>
        <TextField 
        onChange={(event)=>
             setUserData((prev:any)=>({...prev,Name:event.target.value}))        
        }
        variant='standard' color='secondary' size='small' label='Enter Your Full Name' />
              
       
        
        <TextField  
         onChange={(event)=>
            setUserData((prev:any)=>({...prev,Email:event.target.value}))        
       }
        variant='standard' color='secondary'size='small'  label='Enter you Email' />
        <TextField 
         onChange={(event)=>
            setUserData((prev:any)=>({...prev,Password:event.target.value}))        
       }
        variant='standard' color='secondary'  size='small' type='password' label='Enter Your Password' />
             
             <Typography color={'red'}>{errormsg}</Typography>
             <Button 
             type='submit'
             onClick={HandleSubmit}
             variant='contained' color='info'>Sign Up</Button><br/>
        </Stack>
        </Box>
       
        </Stack>
        </Box>
    
  )
}
