import './App.css';
import CursosFn from './components/cursosFn';
import UsuariosFn from './components/usuariosFn';
import { BrowserRouter, Route, Link, Routes as Switch } from 'react-router-dom';

function App() {

  return (
    <div>
      <CursosFn />
      <UsuariosFn />
    </div>
);

}

export default App;
