import React from 'react'
import './Contact.css'
import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'
import Form from './Form'
import Footer from '../Footer/Footer'

export default function ContactDesign() {
  const theme=useTheme()
  const isMobile=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div className='Image'>
    <Box width={isMobile?'100%':500} m={'auto'} marginTop={isMobile?'26%':'0%'} >
      <Typography  gutterBottom textAlign={'center'} fontFamily={'Oswald'} variant='h2' fontWeight={'bold'} color={'white'}>
        CONTACT US
      </Typography>
      <Typography gutterBottom textAlign={'center'} fontFamily={'Oswald'} variant='h6' fontWeight={'bold'} color={'white'}>
        CLICK ON AN ICON BELOW
      </Typography>
      <Grid
       marginTop={'7%'}
      direction={'row'} spacing={2}>
        <Typography textAlign={'center'}>


        <IconButton >

         <Typography textAlign={'center'} color={'#0165E1'} variant='h2' fontWeight={'bold'}><AiOutlineFacebook/></Typography> 
         </IconButton>
        
        <IconButton  >
        <Typography color={'#f2a60c'} variant='h2' fontWeight={'bold'}> <AiOutlineMail/></Typography> 
        </IconButton>
        <IconButton >
        <Typography color={'#25D366'} variant='h2' fontWeight={'bold'}> <AiOutlineWhatsApp/></Typography> 
        </IconButton>
        <IconButton >
        <Typography color={'#F56040'} variant='h2' fontWeight={'bold'}> <AiOutlineInstagram/></Typography> 
        </IconButton>
        </Typography>
      </Grid>
    </Box>
    <Box marginTop={'5%'}>
    <Form/>
    </Box><br/>
    <Footer/>
    </div>
  )
}
