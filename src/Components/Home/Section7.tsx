import React from 'react'
import {  Typography,Box,Stack,IconButton} from "@mui/material";
import {AiFillStar} from 'react-icons/ai'
export default function Section7() {
  return (
    <Box  sx={{backgroundColor:'black'}}>
    <Typography 
    
    gutterBottom textAlign={'center'} fontFamily={'Oswald'} fontWeight={'bold'} variant='h2' color={'white'}>
        HOW DOES IT WORK
    </Typography>
    <Typography textAlign={'center'} fontFamily={'Oswald'} fontWeight={'bold'} variant='h6' color={'white'}>
        OUR ONLINE EXPERIENCE MADE EASY
    </Typography>

    <Stack direction={'row'} spacing={4} marginTop={'5%'} >
        <Box>
            <IconButton sx={{backgroundColor:'white',color:'black',}}>
            <AiFillStar/>
            </IconButton>
            <Typography fontFamily={'Oswald'} fontWeight={'bold'} variant='h4' color={'white'}>OUR SELECT RANGE</Typography>
        </Box>
        <Box>
            <IconButton sx={{backgroundColor:'white',color:'black'}}>
            <AiFillStar/>
            </IconButton>
            <Typography fontFamily={'Oswald'} fontWeight={'bold'} variant='h4' color={'white'}>OUR SELECT RANGE</Typography>
        </Box>
        <Box>
            <IconButton sx={{backgroundColor:'white',color:'black'}}>
            <AiFillStar/>
            </IconButton>
            <Typography fontFamily={'Oswald'} fontWeight={'bold'} variant='h4' color={'white'}>OUR SELECT RANGE</Typography>
        </Box>
    </Stack>
    </Box>
  )
}
