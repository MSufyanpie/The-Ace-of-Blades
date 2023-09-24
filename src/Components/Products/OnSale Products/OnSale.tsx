import { collection, getDocs } from 'firebase/firestore'
import  { useEffect, useState } from 'react'
import {  db } from '../../../Firebase/Firebase'
import {  Grid,   } from '@mui/material'

import Section1 from './Section1'

import OnSaleDesign from './OnSaleDesign'


export default function OnSale() {

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
       
        
      },[])
      //@ts-ignore
      const filtered=products.filter(data=>data.salePrice!==0)
      
      
  return (
    <div>
        
        <Section1/>
        <Grid 
        
        container
        direction={'row'} spacing={2} marginTop={'2%'} px={8}>
        {filtered.map((data:any,index:number)=>{
            return(
                <OnSaleDesign
                title={data.title}
                imageUrl={data.imageUrl}
                price={data.price}
                salePrice={data.salePrice}
                id={index}
                data={data}
                />
            )
        })}
        </Grid><br/>
        
    </div>
  )
}

