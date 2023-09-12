import React from 'react'
import prod1 from '../../assets/home images/recent1.jpeg'
import prod2 from '../../assets/home images/recent2.jpeg'
import prod3 from '../../assets/home images/recent3.jpeg'

import Section6Design from './Section6Design'
import { Stack, Typography,Box } from '@mui/material'
import Section8Design from './Section8Design'
interface knife{
  img:any,
  title:string,
  price:string,
  

}
export default function Section8() {
    const saleProducts:knife[]=[
      {
        img:prod1,
        title:" HANDMADE DAMASCUS BILTONG KNIFE AOB-2305",
        price:'R890.00',
       

      },
      {
        img:prod2,
        title:"HANDMADE DAMASCUS MEAT CLEAVER AOB-2406",
        price:'R1290.00',
       

      },
      {
        img:prod3,
        title:"AOB-2202 DAMASCUS FOLDING KNIFE",
        price:'R990.00',
        

      },
      
    ]
  return (
    <Box sx={{backgroundColor:'#ede8e8'}} px={7}>
      <br/><br/>
      <Typography
      fontFamily={'Oswald'}
     marginLeft={'3%'}
      fontWeight={'bold'}
       gutterBottom variant='h3'>
        RECENT PRODUCTS
      </Typography>
      <Box  sx={{backgroundColor:'white'}}>
      <Stack  spacing={4} direction={{xs:'column',md:'row'}} px={10} >
    {saleProducts.map((data:knife,index:number)=>{
      return(
        <Section8Design
        id={index}
        image={data.img}
        title={data.title}
        price={data.price}
        
        />
      )
    })}
    </Stack><br/>
    </Box><br/>

    </Box>
  )
}