import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function UploaderModal({open,onClose}:any) {

  console.log("model state:",open)
  return (
    
    <Modal 
    open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    onClose={onClose}
    >
        
    <Box  sx={{backgroundColor:'#c4b999',borderRadius:'10px'}} >
    <Stack spacing={5}><br/>
    <Link to={'./upload-Products'}>
    <Typography textAlign={'center'}>
        <Button variant='contained'>Upload Products</Button></Typography>
        
    </Link>
    <Link to={'./upload-articles'}>
        <Typography textAlign={'center'}>
    <Button variant='contained' color='error'>Upload Articles</Button></Typography>
        
    </Link>
    <Link to={'./ImageUploader'}>
        <Typography textAlign={'center'}>
    <Button variant='contained' color='success'>Upload Images in Gallery</Button></Typography>
        
    </Link><br/>
    </Stack>

    </Box>



    </Modal>

    
  )
}
