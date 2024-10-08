import Movie from "./pages/Movie/Movie"
import Seats from "./pages/Seats/Seats"
import Ticket from "./pages/Ticket/Ticket"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.sass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>



          <Route path="/movie" element={<Movie />} />



          <Route path="/seats" element={< Seats />} />


          <Route path="/ticket" element={< Ticket />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App




