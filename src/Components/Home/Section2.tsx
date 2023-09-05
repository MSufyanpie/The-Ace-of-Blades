import React from 'react'
import {  Typography,Box} from "@mui/material";
export default function Section2() {
  return (
    <Box sx={{backgroundColor:'#ede8e8'}}><br/><br/>

        <Box width={'1000px' } px={20} marginTop={'3%'} >
        <Typography  gutterBottom variant='h4' textAlign={'center'} fontWeight={'bold'} >
            DAMASCUS KNIVES
        </Typography>
        <Typography gutterBottom fontFamily={'sans-serif'} variant='h6' textAlign={'center'} fontStyle={'italic'}>
        Ace of Blades, Artisan Made Damascus Knives, Damascus Blades. Superior Quality Damascus Knives made of Damascus Steel. Available in Fixed Blade, Folding Knives & Pocket Knives, Hunting Knives, Straight Razors. High Quality Damascus Steel Chef Knives. View Our Damascus Steel Blades
        </Typography>
        </Box><br/><br/><br/>
    </Box >
  )
}
