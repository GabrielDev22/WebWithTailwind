import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { InicioPage } from './page/InicioPage'
import { Propiedades } from './page/propiedades'
import { NoticiasPage } from './page/NoticiasPage'
import {EquipoPage} from "./page/EquipoPage";

function App() {


  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<InicioPage />}></Route>
          <Route path='/propiedades' element={<Propiedades />}></Route>
          <Route path='/noticias' element={<NoticiasPage />}></Route>
          <Route path='/equipo' element={<EquipoPage />}></Route>
        </Routes>
    </Router>
  )
}

export default App
