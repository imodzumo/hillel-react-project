import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import LoginInfoContext from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LoginInfoContext>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </LoginInfoContext>
  </React.StrictMode>,
)
