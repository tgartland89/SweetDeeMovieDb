import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Favorites from './pages/Favorites'
import AddMovie from './pages/AddMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path= "/" element={<Home/>}/>
            <Route path ="favorites" element={<Favorites/>}/>
            <Route path ="AddMovie" element={<AddMovie/>}/>
        </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
