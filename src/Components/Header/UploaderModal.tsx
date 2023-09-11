import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function UploaderModal(props:any) {
  return (
    
    <Modal 
    open={props.open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    onClose={props.close}
    >
        
    <Box width={500} m={'auto'} sx={{backgroundColor:'#c4b999',borderRadius:'10px'}} marginTop={'10%'} >
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
