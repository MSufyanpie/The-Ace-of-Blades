import { Facebook,Instagram,WhatsApp } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function TopBar() {
  return (


<Stack direction={'row'}
sx={{backgroundColor:'black'}}
>
    <Typography flexGrow={1}></Typography>
   <Typography flexGrow={1}  
   variant='body2'
   color={'white'}
   >
    FREE DELIVERY FOR ALL ORDERS OVER RS 1000</Typography>
    <Box >
    <Typography variant='body2' color={'white'}>
       
            <Facebook></Facebook>
            <Instagram></Instagram>
            <WhatsApp></WhatsApp>
        
    </Typography>
    </Box>
    </Stack>
   
  )
}
