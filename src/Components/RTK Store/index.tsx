import {combineReducers, configureStore} from '@reduxjs/toolkit'
import CartSlice from './Slices/ProductsSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'



const persistConfig={
    key:'root',
    version:1,
    storage
}
const reducers=combineReducers({
    cart:CartSlice
});
const persistedReducer=persistReducer(persistConfig,reducers)
const store=configureStore({
    reducer:persistedReducer,
})
export default store;