import { Box, Typography } from '@mui/material'
import './Section1.css'
export default function Section1() {
  return (
    <div className="sec1">
        <div>
        <Box m={'auto'}>
           
            <Typography paddingTop={{xs:'35%',md:'5%'}} textAlign={'center'} variant='h4' color={'white'} fontFamily={'Oswald'} fontWeight={'bold'}>
                ITEMS ON SALE
            </Typography>
        </Box>
        </div> 
    </div>
  )
}