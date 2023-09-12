import React from 'react'
import {
      Stack,  Button,  Typography,Card,Box, useMediaQuery, useTheme
  } from "@mui/material";
import './section1.css'
export default function Section1() {
  const theme=useTheme()
  const isMobile=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div className='img'>
       
    <Box px={1} width={ isMobile?'100%':'850x'} sx={{float:isMobile ? 'none':'right'}} marginTop={'8%'} >
    
    <Typography flexGrow={0} sx={{marginTop:isMobile?'25%':'20%',fontWeight:'bold'}} variant={isMobile?'h2':'h1'} color={'white'}>The Crafters Of Life</Typography>
   <Box width={isMobile?'100%':'700px'}  sx={{float:'right'}}>
    <Typography fontFamily={'Oswald'} gutterBottom variant='h6' color={'white'} fontWeight={'bold'} >
    THESE LINES HAVE SHAPED YOUR LIFE. FROM THE CONTOUR LINES OF THE FIELDS WORKED, THE ROADS BENDING AROUND MOUNTAINS AND THE RIPPLE FROM THE FIRST DROP OF LONG AWAITED RAIN. THE GLOWING RINGS OF OAK DISAPPEARING INTO THE FIRE PIT AND THE FOLDS OF FRESH DOUGH IN THE KITCHEN. EACH UNIQUE AND ETCHED INTO YOUR LIFE STORY, JUST AS THE SOFT LINES O​​F AGE THAT HAVE SHAPED YOUR FATHER’S FACE AND HARD WORKING HANDS. THESE LINES GUIDE US, DEFINE US, AND REMIND US. THEY COME TO LIFE IN OUR BLADES.
    </Typography>
    <Box marginTop={'2%'} width={'350px'} px={1} sx={{float:'right'}}>
    <Typography gutterBottom sx={{fontWeight:'bold'}} color={'white'}>-THE ACE OF BLADES</Typography>
    
    <Stack marginRight={'10%'} direction={{xs:'column',md:'row'}} spacing={isMobile?4:2} >
        <Button size='large' variant='contained' sx={{backgroundColor:'white',color:'black'}} >
            Shop Now
        </Button>
        <Button size='large' variant='contained' sx={{backgroundColor:'white',color:'black'}}>
            Knife Care
        </Button>
    </Stack>
    </Box>
   
    </Box>
    </Box>
    </div>
   
  )
}
