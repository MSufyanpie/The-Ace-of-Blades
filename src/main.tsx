
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import store from './Redux/Store/index.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import dotenv from 'dotenv';
// dotenv.config();




let persistor =persistStore(store)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App  />
    </PersistGate>
  </Provider>,
)
