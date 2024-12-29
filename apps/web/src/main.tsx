import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Exercises from './pages/exercises/Exercises.js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Exercises />
  </StrictMode>,
)
