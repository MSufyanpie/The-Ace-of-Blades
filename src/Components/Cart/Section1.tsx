
import './Section1.css'
import { Box, Typography } from '@mui/material'
export default function Section1() {
  return (
    <div className='section1'>
        <div>
        <Box m={'auto'}>
           
            <Typography paddingTop={{xs:'35%',md:'5%'}} textAlign={'center'} variant='h4' color={'white'} fontFamily={'Oswald'} fontWeight={'bold'}>
                CART
            </Typography>
        </Box>
        </div>
    </div>
  )
}
