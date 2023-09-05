import React from 'react'
import {
      Stack,  Button,  Typography,Card,Box
  } from "@mui/material";

export default function Section1() {
  return (
    <div>
       
    <Box px={1} width={'850x'} sx={{float:'right'}} marginTop={'8%'} >
    
    <Typography flexGrow={0} sx={{marginTop:'20%',fontWeight:'bold'}} variant='h1' color={'white'}>The Crafters Of Life</Typography>
   <Box width={'700px'}  sx={{float:'right'}}>
    <Typography gutterBottom variant='body1' color={'white'} >
    THESE LINES HAVE SHAPED YOUR LIFE. FROM THE CONTOUR LINES OF THE FIELDS WORKED, THE ROADS BENDING AROUND MOUNTAINS AND THE RIPPLE FROM THE FIRST DROP OF LONG AWAITED RAIN. THE GLOWING RINGS OF OAK DISAPPEARING INTO THE FIRE PIT AND THE FOLDS OF FRESH DOUGH IN THE KITCHEN. EACH UNIQUE AND ETCHED INTO YOUR LIFE STORY, JUST AS THE SOFT LINES O​​F AGE THAT HAVE SHAPED YOUR FATHER’S FACE AND HARD WORKING HANDS. THESE LINES GUIDE US, DEFINE US, AND REMIND US. THEY COME TO LIFE IN OUR BLADES.
    </Typography>
    <Box marginTop={'2%'} width={'350px'} px={1} sx={{float:'right'}}>
    <Typography gutterBottom sx={{fontWeight:'bold'}} color={'white'}>-THE ACE OF BLADES</Typography>
    
    <Stack marginRight={'10%'} direction={'row'} spacing={2} >
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
