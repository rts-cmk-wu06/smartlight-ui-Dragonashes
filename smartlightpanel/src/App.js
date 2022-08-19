import './App.css'

import Footer from './components/Footer'
import Home from './Pages/Home'
import Bedroom from './Pages/Bedroom'
import Converter from './components/Converter'

import { Routes, Route } from "react-router-dom"
import ButtonProvider from './Context/ButtonContext'
import TextFromContext from './components/TextFromContext'
import DemoContextButton from './components/DemoContextButton'

function App() {

  return (
    <div className="App">

      <ButtonProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Bedroom" element={<Bedroom />} />

          <Route path="*" element={<div>There's nothing here!</div>} />
        </Routes>

      </ButtonProvider>

      <Footer />

      {/* <Converter /> */}

    </div>
  )
}

export default App