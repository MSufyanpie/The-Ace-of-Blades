import { createSlice } from "@reduxjs/toolkit";

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

export const {addToCart,removeFromCart,removeAllfromCart,updateQuantity}=CartSlice.actions
export default CartSlice.reducer