import {  getDocs } from "firebase/firestore"
import { useEffect,  } from "react"

const CategoriesHook=(products:any,setProducts:any,ProductsRef:any)=>{
    useEffect(()=>{
        const getProductsList= async()=>{
          try {
            let data=await getDocs(ProductsRef)
            const actualData=data.docs.map((doc:any)=>({
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
    
}
export default CategoriesHook;
