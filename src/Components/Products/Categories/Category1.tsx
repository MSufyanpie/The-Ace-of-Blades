
import { collection, getDocs } from 'firebase/firestore'
import  { useEffect, useState } from 'react'
import {  db } from '../../../Firebase/Firebase'
import {Grid,} from '@mui/material'

import { AllCategoriesDesign } from '../../Shared/AllCategoriesDesign'

export default function Category1() {
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
      //@ts-ignore
      const filtered:any=products.filter(data=>data.category===1)  
  return (
    <div>
        
        <Grid 
        container
        direction={'row'} spacing={2} marginTop={{xs:'25%',md:'10%'}} px={8}>
        {filtered.map((data:any,index:number)=>{
            return(
                <AllCategoriesDesign
                 title={data.title}
                 imageUrl={data.imageUrl}
                 id={index}
                 price={data.price}
                 salePrice={data.salePrice}
                 data={data}
                />
            )
        })}
        </Grid>
    </div>
  )
}
