import React from 'react'
import sale1 from '../../assets/home images/onSale1.jpeg'
import sale2 from '../../assets/home images/onSale2.jpeg'
import sale3 from '../../assets/home images/onSale3.jpeg'
import sale4 from '../../assets/home images/onSale4.jpeg'
import Section6Design from './Section6Design'
import { Stack, Typography } from '@mui/material'
interface knife{
  img:any,
  title:string,
  actualP:string,
  saleP:string,

}
export default function Section6() {
    const saleProducts:knife[]=[
      {
        img:sale1,
        title:"AOB-243 Handmade Damascus Chef's Knife",
        actualP:'990.00',
        saleP:'R690.00',

      },
      {
        img:sale2,
        title:"Handmade Damascus Chef's Knife Set AOB-2407",
        actualP:'1999.00',
        saleP:'R1299.00',

      },
      {
        img:sale3,
        title:"AOB-2238 Handmade Forged Hunting Knife",
        actualP:'990.00',
        saleP:'R690.00',

      },
      {
        img:sale4,
        title:"AOB-2234 Handmade Damascus Hunting Knife",
        actualP:'1290.00',
        saleP:'R990.00',

      },
    ]
  return (
    <div style={{backgroundColor:'#ede8e8',marginTop:'5%'}}>
      <br/>
      <Typography
      fontFamily={'Oswald'}
     marginLeft={'3%'}
      fontWeight={'bold'}
       gutterBottom variant='h3'>
        ITEMS ON SALE
      </Typography>
      <Stack spacing={2} direction={'row'} px={10} >
    {saleProducts.map((data:knife,index:number)=>{
      return(
        <Section6Design
        id={index}
        image={data.img}
        title={data.title}
        actualPrice={data.actualP}
        discountPrice={data.saleP}
        />
      )
    })}
    </Stack><br/><br/>

    </div>
  )
}
