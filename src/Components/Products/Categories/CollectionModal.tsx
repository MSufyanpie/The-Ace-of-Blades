// import { Box, Modal, Typography } from '@mui/material'
// import React, { useEffect, useState } from "react";
// import folding from "../../../assets/Categories/Folding Knife.jpeg";
// import ring from "../../../assets/Categories/Key Ring.jpeg";
// import kitchenKnife from "../../../assets/Categories/Kitchen Knife.jpeg";
// import KnifeCare from "../../../assets/Categories/Knife Care.png";
// import { Grid, Stack } from "@mui/material";
// import { Link } from "react-router-dom";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../../Config/Firebase";

// export default function CollectionModal({open,close}:any) {
//     const[products,setProducts]=useState([{}])
//     let ProductsRef=collection(db,"AOB Collection")
    
//     useEffect(()=>{
//         const getProductsList= async()=>{
//           try {
//             let data=await getDocs(ProductsRef)
//             const actualData=data.docs.map((doc)=>({
//             ...doc.data(),
//             id:doc.id,
      
//             }))
//             console.log(actualData)
//             setProducts(actualData)
            
//           } catch (error) {
//             console.error(error)
//           }
            
//           }
//         getProductsList()
//        console.log(products)
        
//       },[])
//       const filtered=products.filter(data=>data.category===1)
//       const filtered2=products.filter(data=>data.category===2)
//       const filtered3=products.filter(data=>data.category===3)
//       const filtered4=products.filter(data=>data.category===4)
//       var len1=filtered.length
//       var len2=filtered2.length
//       var len3=filtered3.length
//       var len4=filtered4.length
//   return (
//     <Modal
//     open={open}
//     aria-labelledby="modal-modal-title"
//     aria-describedby="modal-modal-description"
//     onClose={close}
//     >
//         <Box width={500} m={'auto'} sx={{backgroundColor:'white'}} marginTop={'10%'}>
//           <Typography>HELLO</Typography>
           



//         </Box>


//     </Modal>
//   )
// }
