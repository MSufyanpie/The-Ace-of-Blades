import { ShoppingCart } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'

import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div>
        <Box boxShadow={1} borderTop={3}  width={{xs:'100%',md:700}} m={'auto'} sx={{backgroundColor:'#f2f5f7'}} marginTop={'3%'}>
            <Stack direction={'row'} spacing={2} paddingTop={'3%'} px={10}>

        <ShoppingCart sx={{marginTop:'5%'}}></ShoppingCart><Typography textAlign={'center'}  variant='h6'>Your Cart is currently empty</Typography></Stack><br/>
        </Box>
        <Typography gutterBottom marginTop={'3%'}  textAlign={'center'} color={'black'}>
            <Link style={{textDecoration:'none'}} to={'/AOBCollection'}>
            <Button
            size='large'
            variant='contained' sx={{backgroundColor:'black',fontWeight:'bold',":hover":{backgroundColor:'#484848'}}}>Return to Shop</Button>
            </Link>
        </Typography><br/><br/>
        
    </div>
  )
}
