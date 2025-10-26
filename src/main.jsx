import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

import { BrowserRouter, RouterProvider } from 'react-router-dom'
import
router
  from "./Routes/Route.jsx"

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
