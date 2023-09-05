import React from 'react'
import {  Typography,Box,Stack,} from "@mui/material";
import {Image} from 'react-bootstrap'
export default function Section5() {
  return (
    <Stack direction={'row'} marginTop={'5%'} px={5} spacing={5} >
        <Box width={'700px'} marginTop={'10%'}>
            <Typography fontFamily={'Oswald'} fontWeight={'bold'}  variant='h3'  gutterBottom>
                THE HISTORY
            </Typography>
            <Typography fontFamily={'Oswald'} fontWeight={'bold'}  variant='h6'  gutterBottom>
                OF DAMASCUS
            </Typography><br/>
            <Typography fontFamily={'Oswald'} fontWeight={'bold'}  variant='h6'  gutterBottom>
            DAMASCUS IS A WELL-KNOWN STYLE OF STEEL THAT IS DISTINGUISHABLE BY ITS CONTRASTING MARBLE LIGHT AND DARK DESIGN.  THERE ARE TWO TYPES OF DAMASCUS STEEL (CAST DAMASCUS STEEL AND PATTERN-WELDED DAMASCUS STEEL).  ALTHOUGH SIMILAR LOOKING, THEY ARE FORGED THROUGH VERY SPECIFIC AND DIFFERENT PROCESSES. HISTORICALLY, DAMASCUS STEEL WAS ALWAYS PRIZED FOR ITS BEAUTY, AS WELL AS ABILITY TO KEEP A SHARP EDGE WHILE REMAINING STRONG AND FLEXIBLE. SEEN AS THE “STEEL OF ANCIENTS”, ARMS MADE OF DAMASCUS STEEL ARE SUPERIOR TO THOSE MADE OF IRON. DAMASCUS CRAFTSMANSHIP GAINED A REPUTATION OF NEAR MAGICAL PROPERTIES AND WITH ONLY A PRECIOUS FEW THAT KNEW HOW TO ACHIEVE THIS, IT WOULD BECOME A PRECIOUS PIECE OF HISTORY FOR ANY ARMS ENTHUSIAST.
            </Typography>
        </Box>
        <Box>
        <Image
        height={'500px'}
        width={'530px'}
        src='src\assets\home images\section5-img.jpeg'></Image>
        </Box>

    </Stack>
  )
}
