import { collection, getDocs } from 'firebase/firestore'
import  { useEffect, useState } from 'react'
import {db} from '../../Config/Firebase'
import prod1 from '../../assets/home images/recent1.jpeg'
import prod2 from '../../assets/home images/recent2.jpeg'
import prod3 from '../../assets/home images/recent3.jpeg'


import { Stack, Typography,Box } from '@mui/material'
import Section8Design from './Section8Design'
interface knife{
  img:any,
  title:string,
  price:string,
  

}
export default function Section8() {
  const[products,setProducts]=useState([{}])
    const ProductsRef=collection(db,"AOB Collection")
    
    
    useEffect(()=>{
        const getProductsList= async()=>{
          try {
            let data=await getDocs(ProductsRef)
            const actualData=data.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id,
      
            }))
            console.log(actualData)
            setProducts(actualData)
            
            
          } catch (error) {
            console.error(error)
          }
          
          
          }

        getProductsList()
       console.log(products)
        
      },[])
      const FirstThreeProds=products.slice(0,3)
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
    {FirstThreeProds.map((data:any,index:number)=>{
      return(
        <Section8Design
        id={index}
        image={data.imageUrl}
        title={data.title}
        price={data.price}
        salePrice={data.salePrice}
        products={FirstThreeProds}
        data={data}
        />
      )
    })}
    </Stack><br/>
    </Box><br/>

    </Box>
  )
}