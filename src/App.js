import './App.css';
import TotalCursos from './components/TotalCursos';
import TotalUsuarios from './components/TotalUsuarios';
import TotalCategorias from './components/TotalCategorias';
import UltimoUsuarioCreado from './components/UltimoUsuarioCreado';
import UltimoCursoCreado from './components/UltimoCursoCreado';
import CursosYCategorias from './components/CursosYCategorias';
import DetalleCursos from './components/DetalleCursos';
import { BrowserRouter, Route, Link, Routes as Switch } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

      <TotalUsuarios />
      <TotalCursos />
      <TotalCategorias />
      <UltimoCursoCreado />
      <UltimoUsuarioCreado />
      <DetalleCursos />
      <CursosYCategorias />

    </BrowserRouter>
);

}

export default App;
