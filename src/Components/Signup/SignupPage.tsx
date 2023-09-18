import { Box, Modal, TextField, Typography,Stack, Badge, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { BiSolidUserCircle } from "react-icons/bi"
import { Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Config/Firebase'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
const schema=yup.
object()
.shape({
  Email:yup.string().email().required(),
  password:yup.string().min(4).required()
})
.required()
export default function SignupPage({open,close}:any) {
  const {register,formState}=useForm({
    resolver:yupResolver(schema)
  })
  const {errors}=formState
  const navigate=useNavigate()
    const[data,setUserData]:any=useState({
        
        Email:"",
        Password:""
   }) 
   
   const[errormsg,setErrormsg]:any=useState("");
   const HandleSubmit=()=>{
    signInWithEmailAndPassword(auth,data.Email,data.Password).then(async(res)=>{
            navigate('/AOBCollection')
            close
    }).catch((err)=>{
      setErrormsg(err.message)
    })

   }
  return (
    <Modal
    open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    onClose={close}
    >
        <Box  width={'60%'} sx={{backgroundColor:'white',borderRadius:'10px'}} marginTop={'10%'} marginLeft={'15%'}>
       
        <Stack direction={'row'} spacing={2}  >
        
        <Box sx={{background:'linear-gradient(-160deg, #ddd6f3,#faaca8)'}}>
        <Typography color={'purple'}  gutterBottom textAlign={'center'} variant='h2' fontFamily={'Oswald'} fontWeight={'bold'}>
            
          <BiSolidUserCircle></BiSolidUserCircle>
        </Typography>
        <Stack spacing={3} direction={'column'} px={20}>
        
        
        <TextField  
        {...register('Email')}
         onChange={(event)=>
          setUserData((prev:any)=>({...prev,Email:event.target.value}))}
          id='Email'
          
        variant='standard' color='secondary'size='small'  label='Enter you Email' />
        {errors.Email?.message}
        <TextField  
        id='password'
        
        {...register('password')}
        onChange={(event)=>
          setUserData((prev:any)=>({...prev,Password:event.target.value}))}
        variant='standard' color='secondary'  size='small' type='password' label='Enter Your Password' />
             
             <Typography color={'red'}>{errormsg}</Typography>
             <Button 
             type='submit' onClick={HandleSubmit}
             variant='contained' color='info'>Login</Button><br/>
             <Typography>Don't Have Any Account?</Typography>

             <Link to={'./SignUp'} style={{textDecoration:'none'}}><Typography>Create an Account</Typography></Link>
        </Stack>
        </Box>
        <Image
        style={{marginTop:'10%'}}
        height={'220px'}
        width={'270px'}
        src='src\assets\images\logo.jpg'></Image>
        </Stack>
        </Box>
    </Modal>
  )
}
