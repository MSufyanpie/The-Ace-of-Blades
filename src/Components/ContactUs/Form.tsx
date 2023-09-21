import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Box, Button, Card, Checkbox, FormControl, FormControlLabel,  FormLabel, 
    Snackbar, 
    Stack, TextField, Typography,useMediaQuery, useTheme }
 from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
const schema:any=yup.object().shape({
Name:yup.string().min(3).max(15).required('Name is Required'),
Email:yup.string().email().required(),
number:yup.number().positive().integer('invalid number').required('Enter a valid Phone Number'),
Message:yup.string().min(5).max(100).required(),

}).required();

export default function Form() {
   const theme=useTheme()
   
   const [open,setOpen]=useState(true)

   const isMobile=useMediaQuery(theme.breakpoints.down('md'))
   const{register,handleSubmit,formState,}=useForm({
      mode:'all',
      resolver:yupResolver(schema)
   })
   const {isSubmitted,isSubmitSuccessful,errors}:any=formState;
   //@ts-ignore
   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return; }
        setOpen(false)
   }
   const onSubmit=(data:any)=>{
      console.log(data)
   }
   
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
                <form onSubmit={handleSubmit((data)=>
                  onSubmit(data)
                  )}>
                <FormControl>
                    <Stack direction={'column'} spacing={2} px={3}>
                 <FormLabel required sx={{fontWeight:'bold',color:'black'}}>
                    Name and Surname
                 </FormLabel>
                 <TextField id='Name'  {...register("Name")} size='small' />
                 
                 <Typography color={'red'}   >
               
                  {errors.Name?.message}</Typography>
                 <FormLabel required sx={{fontWeight:'bold',color:'black'}}>
                    Email Address
                 </FormLabel>
                 <TextField id='Email' {...register('Email')} size='small' />
                 <Typography color={'red'}>{errors.Email?.message}</Typography>
                 <FormLabel  required sx={{fontWeight:'bold',color:'black'}}>
                    Contact Number
                 </FormLabel>
                
                 <TextField type="number" id='number' {...register('number')} size='small' /><br/>
                 <Typography color={'red'}>{errors.number?.message}</Typography>
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
                 <TextField id='message' {...register('Message')} multiline/>
                 
                 <Typography color={'red'}>{errors.Message?.message}</Typography>
                 
                 </Stack><br  />
                 
                 
                </FormControl>
                
                <Button  type='submit' variant='contained' sx={{backgroundColor:'black',color:'white',marginLeft:'4%',":hover":{backgroundColor:'#003366'}}}>Submit</Button><br/>
                </form>
                <Typography color={'white'}>s</Typography>
            </Card>
            {isSubmitted && isSubmitSuccessful==false?(<>
            <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            >
            <Alert onClose={handleClose} severity="warning">Form is Invalid</Alert>

            </Snackbar>
            </>)
            :(<></>)}
        </Box>
    </div>
  )
}
