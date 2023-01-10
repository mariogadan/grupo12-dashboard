import './App.css';
import TotalCursos from './components/TotalCursos';
import TotalUsuarios from './components/TotalUsuarios';
import TotalCategorias from './components/TotalCategorias';
import UltimoUsuarioCreado from './components/UltimoUsuarioCreado';
import UltimoCursoCreado from './components/UltimoCursoCreado';
import CursosYCategorias from './components/CursosYCategorias';
import DetalleCursos from './components/DetalleCursos';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link, Routes as Switch } from 'react-router-dom';

function App() {

  return (
    
    <BrowserRouter>
      <div>
        <Navbar/>
       </div>
       <div className="flex"> 
          <TotalUsuarios />
          <TotalCursos />
          <TotalCategorias />
        </div>
        <div className="div-title">
             <ion-icon name="timer-outline"></ion-icon>
             <div className="div-title2"> LATEST METRICS </div>
        </div>
        <div className="flex">  
          <UltimoCursoCreado />
          <UltimoUsuarioCreado />
       </div>
      <DetalleCursos />
      <CursosYCategorias />

    </BrowserRouter>
);

}

export default App;
