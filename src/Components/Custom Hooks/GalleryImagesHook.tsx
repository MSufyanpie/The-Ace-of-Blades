import { getDocs } from 'firebase/firestore'
import  { useEffect } from 'react'

export default function GalleryImagesHook(CollectionRef:any,setImages:any) {
    useEffect(()=>{
        const getImagesList= async()=>{
          try {
            let data=await getDocs(CollectionRef)
            const actualData=data.docs.map((doc:any)=>({
            ...doc.data(),
            id:doc.id,
      
            }))
            
            setImages(actualData)
            
          } catch (error) {
            console.error(error)
          }
            
          }
        getImagesList()
       
        
      },[])
  
}
