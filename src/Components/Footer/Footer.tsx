import { Box,  Stack, Typography } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    
<Box    sx={{backgroundColor:'#171515'}}  px={30}>
<br/><br/>
<Stack px={15} spacing={5} direction={'row'}>
<Typography variant='body1' textAlign={'center'} >
    <Link to={'./'} style={{textDecoration:'none',color:'grey'}}> Home
        </Link></Typography>
        
    <Typography variant='body1' textAlign={'center'} >
    <Link to={'./'} style={{textDecoration:'none',color:'grey'}}> Privacy Policy
        </Link></Typography>
        
    <Typography variant='body1' textAlign={'center'} >
    <Link to={'./'} style={{textDecoration:'none',color:'grey'}}> Shipping and Returns
        </Link></Typography>

    <Typography gutterBottom variant='body1' textAlign={'center'} >
    <Link to={'./'} style={{textDecoration:'none',color:'grey'}}> Terms and Conditions
        </Link></Typography></Stack><br/>

<Typography variant='body1' textAlign={'center'} color={'grey'}>Copyright © 2023 THE ACE OF BLADES</Typography>
<hr /><br/>


<Typography textAlign={'center'} variant='body1' color={'grey'}>Developed and Maintained by:<Link style={{textDecoration:'none',color:'white'}} to={'/'}>Biographic Web and Media</Link>
   
</Typography><br/><br/>

</Box>
    
  )
}
