import Movie from "./pages/Movie/Movie"
import Seats from "./pages/Seats/Seats"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>



          <Route path="/movie" element={<Movie />} />



          <Route path="/seats" element={< Seats />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App




