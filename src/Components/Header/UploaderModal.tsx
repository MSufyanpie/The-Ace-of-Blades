import { Box, Button, Modal, Stack, Typography } from '@mui/material'

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
        
    <Box width={500} m={'auto'}  sx={{backgroundColor:'#dedbd3',borderRadius:'10px'}} marginTop={'10%'} >
    <Stack spacing={5}><br/>
    <Link to={'http://localhost:5173/upload-Products'}>
    <Typography textAlign={'center'}>
        <Button variant='contained'>Upload Products</Button></Typography>
        
    </Link>
    <Link to={'http://localhost:5173/upload-articles'}>
        <Typography textAlign={'center'}>
    <Button variant='contained' color='error'>Upload Articles</Button></Typography>
        
    </Link>
    <Link to={'http://localhost:5173/ImageUploader'}>
        <Typography textAlign={'center'}>
    <Button variant='contained' color='success'>Upload Images in Gallery</Button></Typography>
        
    </Link><br/>
    </Stack>

    </Box>



    </Modal>

    
  )
}
