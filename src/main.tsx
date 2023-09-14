import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Theme } from '@mui/material'
import {Provider} from "react-redux";
import store from './Components/RTK Store/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App  />
  </Provider>,
)
