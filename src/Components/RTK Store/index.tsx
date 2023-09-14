import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './Slices/ProductsSlice'

const store=configureStore({
    reducer:{
        cart:CartSlice
    },
})
export default store;