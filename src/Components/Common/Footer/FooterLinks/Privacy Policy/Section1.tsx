import { Box, Typography } from '@mui/material'
import './Sec1.css'

export const Section1 = () => {
  return (
    <div className='sec1'>
         <div>
        <Box m={'auto'}>
           
            <Typography paddingTop={{xs:'35%',md:'5%'}} textAlign={'center'} variant='h4' color={'white'} fontFamily={'Oswald'} fontWeight={'bold'}>
                PRIVACY POLICY
            </Typography>
        </Box>
        </div>
    </div>
  )
}
