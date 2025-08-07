import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import Routes from './routes/Routes';
import { AuthContext } from './Context/AuthContext';



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthContext>
      <RouterProvider router={Routes} />
    </AuthContext>
  </StrictMode>,
)
