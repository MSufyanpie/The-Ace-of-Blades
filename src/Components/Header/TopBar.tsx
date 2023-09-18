import { Facebook,Instagram,WhatsApp } from '@mui/icons-material'
import { Box, Stack, Typography, useMediaQuery, useTheme,  } from '@mui/material'
import './TopBar.css'


export default function TopBar() {
  const theme=useTheme()
  const isMobile=useMediaQuery(theme.breakpoints.down('md'))
  return (


<Stack 

className='topBar'
direction={'row'}
sx={{backgroundColor:'black'}}
>
    <Box 
    width={isMobile?'100%':'100%'}
    >
   <Typography textAlign={'center'} flexGrow={1}  
   variant='body2'
   color={'white'}
   >
    FREE DELIVERY FOR ALL ORDERS OVER RS 1000</Typography>
    </Box>
    <Box >
    <Typography display={isMobile?'none':'flex'} variant='body2' color={'white'}>
       
            <Facebook></Facebook>
            <Instagram></Instagram>
            <WhatsApp></WhatsApp>
        
    </Typography>
    </Box>
    </Stack>
   
  )
}
