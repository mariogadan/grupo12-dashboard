import './App.css';
import TotalCursos from './components/TotalCursos';
import TotalUsuarios from './components/TotalUsuarios';
import TotalCategorias from './components/TotalCategorias';
import UltimoUsuarioCreado from './components/UltimoUsuarioCreado';
import UltimoCursoCreado from './components/UltimoCursoCreado';
import { BrowserRouter, Route, Link, Routes as Switch } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

      <TotalUsuarios />
      <TotalCursos />
      <TotalCategorias />
      <UltimoUsuarioCreado />
      <UltimoCursoCreado />

    </BrowserRouter>
);

}

export default App;
