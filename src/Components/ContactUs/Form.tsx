import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, 
   Grid, Stack, TextField, Typography,useMediaQuery, useTheme }
 from '@mui/material'
import React from 'react'

export default function Form() {
   const theme=useTheme()
   const isMobile=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div>
        <Box  width={isMobile?'100%':700} m={'auto'} bgcolor={'white'} sx={{boxShadow:15}}>
            <Card>
                <br/>
                <Typography gutterBottom variant='h4' textAlign={'center'} fontFamily={'Oswald'} fontWeight={'bold'}>
                   OR SUBMIT A FORM
                </Typography>
                <Typography gutterBottom color={'grey'} variant='h6' textAlign={'center'} fontFamily={'Oswald'} >
                   -WE'LL  GET  BACK  TO  YOU
                </Typography><br/>
                <FormControl>
                    <Stack direction={'column'} spacing={2} px={3}>
                 <FormLabel required sx={{fontWeight:'bold',color:'black'}}>
                    Name and Surname
                 </FormLabel>
                 <TextField size='small' />
                 <FormLabel required sx={{fontWeight:'bold',color:'black'}}>
                    Email Address
                 </FormLabel>
                 <TextField size='small' />
                 <FormLabel required sx={{fontWeight:'bold',color:'black'}}>
                    Contact Number
                 </FormLabel>
                 <TextField size='small' /><br/>
                 </Stack>

                <Stack direction={{xs:'column',md:'row'}} spacing={isMobile?7:20} px={6}>
                 <Box>
                
                    
                    <FormLabel sx={{fontWeight:'bold',color:'black'}} >
                        Enquiry Type
                    </FormLabel>
                    <Stack direction={'column'}><br/>
                <FormControlLabel control={<Checkbox />} label="General Enquiry" /><br/>
                 <FormControlLabel  control={<Checkbox />} label="Product Enquiry" /><br/>
                 <FormControlLabel  control={<Checkbox />} label="Retail Enquiry" />
                 </Stack>
                 
                 </Box>

                 <Box>
                    <Typography gutterBottom variant='h5' fontWeight={'bold'} fontFamily={'Oswald'}>
                        BECOME A RETAILER
                    </Typography>
                    <Typography gutterBottom variant='body1'  fontFamily={'Oswald'} >
                    LOOKING FOR AN OPPORTUNITY TO INCREASE YOUR INCOME OR EXPAND YOUR BUSINESS AND OFFER YOUR CUSTOMERS A WIDER SELECTION OF PRODUCTS. WHY WAIT? ENQUIRE TODAY AND FIND OUT MORE ABOUT THIS UNIQUE OPPORTUNITY.
                    </Typography>
                 </Box>
                 </Stack><br />
                 <Stack px={3} spacing={2}>
                 <FormLabel required sx={{fontWeight:'bold',color:'black'}}>
                    Comment or Message
                 </FormLabel>
                 <TextField multiline/>
                 
                 </Stack><br />
                 
                 
                </FormControl>
                
                <Button variant='contained' sx={{backgroundColor:'black',color:'white',marginLeft:'4%'}}>Submit</Button><br/>
                <Typography color={'white'}>s</Typography>
            </Card>
        </Box>
    </div>
  )
}
