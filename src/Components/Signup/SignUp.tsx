import { Box,  TextField, Typography,Stack,  Button,  } from '@mui/material'
import { useState } from 'react'
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
    
        <Box   width={{xs:'100%',md:600}} m={{xs:'none',md:'auto'}} sx={{backgroundColor:'white',borderRadius:'10px'}} marginTop={{xs:'30%',md:'10%'}} >
       
        <Stack direction={'row'} spacing={2}  >
        
        <Box boxShadow={10} sx={{background:'linear-gradient(to right, #67b26f,#4ca2cd)'}}>
        <Typography color={'purple'}  gutterBottom textAlign={'center'} variant='h2' fontFamily={'Oswald'} fontWeight={'bold'}>
            
          <BiSolidUserCircle></BiSolidUserCircle>
        </Typography>
        <Stack spacing={3} direction={'column'} px={{xs:13,md:25}}>
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
             
             sx={{fontWeight:'bold'}}
             type='submit'
             onClick={HandleSubmit}
             variant='contained' color='secondary'>Sign Up</Button><br/>
        </Stack>
        </Box>
       
        </Stack><br/>
        </Box>
    
  )
}
