import {  getDocs } from "firebase/firestore"
import { useEffect,  } from "react"

const ArticlesHook=(ArticlesRef:any,setArticlesList:any)=>{
    useEffect(()=>{
        const getProductsList= async()=>{
          try {
            let data=await getDocs(ArticlesRef)
            const actualData=data.docs.map((doc:any)=>({
            ...doc.data(),
            id:doc.id,
      
            }))
            console.log(actualData)
            setArticlesList(actualData)
            
            
          } catch (error) {
            console.error(error)
          }
          }
    
        getProductsList()
     
        
      },[])
    
}
export default ArticlesHook;
