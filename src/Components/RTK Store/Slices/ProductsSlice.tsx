import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        
        addToCart(state:any,action:any){
            state.push(action.payload)
        },
        removeFromCart(state:any,action:any){
           state.splice(action.payload,1)
        },
        removeAllfromCart(state:any,action:any){
            return []
        }

    }
})

export const {addToCart,removeFromCart,removeAllfromCart}=CartSlice.actions
export default CartSlice.reducer