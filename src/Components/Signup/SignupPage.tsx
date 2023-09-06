import { Box, Modal, TextField, Typography,Stack, Badge, Button, IconButton } from '@mui/material'
import React from 'react'
import { BiSolidUserCircle } from "react-icons/bi"
import { Image } from 'react-bootstrap'

export default function SignupPage(props:any) {
  return (
    <Modal
    open={props.open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    onClose={props.close}
    >
        <Box  width={'70%'} sx={{backgroundColor:'white',borderRadius:'10px'}} marginTop={'10%'} marginLeft={'15%'}>
       
        <Stack direction={'row'} spacing={2}  >
        
        <Box sx={{background:'linear-gradient(-160deg, #ddd6f3,#faaca8)'}}>
        <Typography color={'purple'}  gutterBottom textAlign={'center'} variant='h2' fontFamily={'Oswald'} fontWeight={'bold'}>
            
          <BiSolidUserCircle></BiSolidUserCircle>
        </Typography>
        <Stack spacing={3} direction={'column'} px={25}>
        <TextField variant='standard' color='secondary' size='small' label='Enter Your First Name' />
        <TextField  variant='standard' color='secondary'size='small' label='Enter Your Last Name' />
        <TextField  variant='standard' color='secondary'size='small'  label='Enter you Email' />
        <TextField  variant='standard' color='secondary' size='small' type='number'  label='Enter your Phone No' />
        <TextField  variant='standard' color='secondary'  size='small' type='password' label='Enter Your Password' />
             <Button variant='contained' color='info'>Sign Up</Button><br/>
        </Stack>
        </Box>
        <Image
        style={{marginTop:'10%'}}
        height={'250px'}
        width={'300px'}
        src='src\assets\images\logo.jpg'></Image>
        </Stack>
        </Box>
    </Modal>
  )
}
