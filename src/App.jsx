import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Tailwind } from './components/Tailwind'
import { Navbar } from './components/navbar/Navbar'
import { InicioPage } from './page/InicioPage'


function App() {


  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<InicioPage />}></Route>
          <Route path='/propiedades' element={<Tailwind />}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
    </Router>
  )
}

export default App
