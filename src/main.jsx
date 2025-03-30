import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Success from './Success.jsx'
import Fail from './Fail.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/Success' element={<Success/>} />
    <Route path='/Fail' element={<Fail/>} />
    </Routes>
    </BrowserRouter>
)
