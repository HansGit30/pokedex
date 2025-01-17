import { Route, Routes } from "react-router-dom"
import Cover from "./pages/Cover"
import Home from "./pages/Home"


function App() {

  return (
      <Routes>
        <Route path="/pokedex" element={<Cover />} />
        <Route path="/pokedex/inicio" element={<Home />} />
      </Routes>
  )
}

export default App
