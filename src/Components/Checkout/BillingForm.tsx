import { Star } from '@mui/icons-material'
import { Box, Checkbox, FormControl,  FormLabel, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { useForm, useFormState } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema=yup.
object()
.shape({
  UsernameorEmailAddress: yup.string().min(6).max(30).required()
})
.required()
export default function BillingForm() {
  const{register,formState}=useForm({
  resolver:yupResolver(schema)
  })
  const {errors}=formState
  return (
    <div>
      <form>
        <Box marginTop={'7%'} width={{xs:'100%',md:700}} px={{xs:0,md:4}}>
            <Stack direction={'column'} spacing={2}>
        
        <FormLabel sx={{fontSize:'27px',fontWeight:'bold',color:'black'}} >
         Customer Information
        </FormLabel>
        <TextField 
        id='UsernameorEmailAddress'
        {...register("UsernameorEmailAddress")}
        
        required placeholder='Username or Email Address'/>
        {errors.UsernameorEmailAddress?.message}
        </Stack><br/>

        <Stack spacing={2}>
        <FormLabel sx={{fontSize:'27px',fontWeight:'bold',color:'black'}} >
         Billing Details
        </FormLabel>

        <Stack direction={'row'} spacing={2} >
        <TextField fullWidth required placeholder='First name'/>
        <TextField fullWidth required placeholder='Last name'/>
        </Stack>

        <TextField required placeholder='Company name'/>

        <Stack>
        <Typography variant='body2'>Country/Region<Star sx={{fontSize:'13px'}}/></Typography>
        <Typography variant='body1' fontWeight={'bold'}>Pakistan</Typography></Stack>
        </Stack><br/>
        <Stack direction={'row'} spacing={2} >
        <TextField multiline fullWidth required placeholder='House number and street name'/>
        <TextField multiline fullWidth required placeholder='Apartment, suite,unit,etc. (Optional)'/>
        </Stack><br/>

        <Stack direction={'row'} spacing={2}>
        <TextField fullWidth required placeholder='Town/City'/>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Province</InputLabel>
        <Select
        id="demo-simple-select"
        labelId="demo-simple-select-label"
        label="Province">
    <MenuItem value={10}>Punjab</MenuItem>
    <MenuItem value={20}>Sindh</MenuItem>
    <MenuItem value={30}>Balochistan</MenuItem>
    <MenuItem value={30}>KPK</MenuItem>
  </Select>
  </FormControl>
  <TextField fullWidth required placeholder='Postcode/ZIP'/>
        </Stack><br/>
        <TextField  fullWidth  required placeholder='Phone'/><br/>
        <Stack direction={'row'} marginTop={'2%'}
        >
         <Checkbox></Checkbox><FormLabel sx={{fontSize:'20px',fontWeight:'bold',color:'black',marginTop:'1%'}} >
         Ship to a Different Address?
        </FormLabel>
        </Stack><br/>
        <TextField  multiline size='medium' fullWidth placeholder='notes about your order,e.g,special notes for delivery'/>
        <Typography marginTop={'1%'}>Have a Coupon?</Typography>
        
        </Box>
        </form>
    </div>
  )
}
