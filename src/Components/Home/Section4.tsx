import React from 'react'
import {  Typography,Box,Stack,IconButton,Button} from "@mui/material";
import {Image} from 'react-bootstrap'
export default function Section4() {
  return (
    <Stack direction={'row'} spacing={15} sx={{backgroundColor:'black'}} px={10}  >
        <Box >
        <Image 
        style={{marginTop:'10%'}}
        height={'480px'}
        width={'500px'}
        src='src\assets\home images\section4-img.png'></Image>
        </Box>
        <Box width={'600px'}>
            <Stack direction={'column' }  marginTop={'8%'} >
            <Box width={'600px'} >
                <Typography fontWeight={'bold'} gutterBottom color={'white'} marginLeft={'40%'} variant='h2' fontFamily={'Oswald'}>OUR CRAFTER</Typography>
                <Typography fontWeight={'bold'} gutterBottom color={'white'} marginLeft={'70%'} variant='h6' fontFamily={'Oswald'}>-BARBAROS</Typography>
            </Box><br/>
            <Box width={'550px'}>
            <Typography fontFamily={'Oswald'} fontWeight={'bold'}  variant='body1' textAlign={'justify'}  color={'white'} gutterBottom >
            WE’D LIKE YOU TO VISIT OUR CRAFTER, BUT HE’S STILL BUSY IN THE STUDIO. BARBAROS IS A BIT OF AN ENIGMA, CONSTANTLY ON THE VERGE OF DOING SOMETHING WILD AND ADVENTUROUS. HE MOVED TO CYPRUS WITH HIS FAMILY WHEN HE WAS NINE YEARS OLD, AND CAPTIVATED BY THE MEDITERRANEAN</Typography>
            <br/>
            <Typography fontWeight={'bold'} fontFamily={'Oswald'}  variant='body1' textAlign={'justify'} color={'white'}>
            BARBAROS SPENT HIS TIME IN A SMALL STUDIO WORKSHOP WHERE YOU CAN ONLY MAKE OUT THE HORIZON, CHANNELING HIS ENTHUSIASM FOR PIRATE TALES INTO ENTHUSIASTIC CRAFTSMANSHIP OF THE TRADITIONALLY FAVOR
            </Typography>
            </Box>
            </Stack>
        </Box>
    </Stack>
  )
}
