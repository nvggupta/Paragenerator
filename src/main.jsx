import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ParaProvider from "./components/Context/ParaContext.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ParaProvider>
    <App />
  </ParaProvider>
  </React.StrictMode>,
)
