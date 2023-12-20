import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ParentContext from './Components/useContext/ParentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ParentContext>
        <App />
    </ParentContext>
)
