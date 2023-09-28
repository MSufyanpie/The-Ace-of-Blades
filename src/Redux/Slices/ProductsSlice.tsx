import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc,  doc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const CartSlice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        
        addToCart(state:any,action:any){
            // state.push(action.payload)
            const ItemIndex=state.findIndex((item:any)=>item.id===action.payload.id)

            if(ItemIndex>=0){
                state[ItemIndex].quantity +=1
            }else{
                const temp={...action.payload,quantity:1}
                state.push(temp)
            }
            
        },
        removeFromCart(state:any,action:any){
           state.splice(action.payload,1)
        },
        //@ts-ignore
        removeAllfromCart(state:any,action:any){
            return []
        },
        updateQuantity(state,action){
            const { index, quantity }:any = action.payload;
        if (state[index]) {
            //@ts-ignore
         state[index].quantity = quantity;}
        },
        
    
            
    }
})
export const addToFirebase=createAsyncThunk(
   
    'cart/addToFirebase',
    async(item,{getState})=>{
        const collectionRef=collection(db,'Cart')
        const docref=addDoc(collectionRef,{
            cartProducts:item
        })
        //@ts-ignore
        return docref.id
    }
)

// export const deleteFromFirebase=createAsyncThunk(
   
//     'cart/deleteFromFirebase',
    
//     async(docId:any,{getState})=>{
        
//         const Cartdoc=doc(db,'Cart',docId)
//         await(deleteDoc(Cartdoc))
//         console.log(docId)
       
//     }
// )

export const {addToCart,removeFromCart,removeAllfromCart,updateQuantity}=CartSlice.actions
export default CartSlice.reducer