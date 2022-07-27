import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifProvider } from "./context/GifProvider";
import { App } from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GifProvider>
    <App />
  </GifProvider>
)
