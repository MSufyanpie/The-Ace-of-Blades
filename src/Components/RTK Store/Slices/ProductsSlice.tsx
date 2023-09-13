import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        
        addToCart(state:any,action:any){
            state.push(action.payload)
        },

    }
})

export const {addToCart}=CartSlice.actions
export default CartSlice.reducer