import React, {useState, useEffect} from 'react';

function DetalleCursos () {
    
    const [detalleCursos, setdetalleCursos] = useState([]);

    const cursosAPI = async () => {
        const dataIn = await  fetch('https://grupo12.onrender.com/cursosAPI')
        const data = await dataIn.json()
        let totalCursos = data.cursos
        setdetalleCursos(totalCursos)        
    }

    useEffect(() => {
        console.log('%c Se montó el componente', 'color:green')
        cursosAPI()
    }, [])



    return (
        <div >
             <h1> Detalle Cursos </h1>
             <ul>

             {
                detalleCursos.map( e => (
                    <li key={e.idCurso}> <h2> {e.nombre}</h2>
                    <p> Descripción: {e.descripcion}</p>
                    <p> Precio: ${e.precio}</p>
                    
                    </li>
                ))
             }
             </ul>
        </div>
    );

}

export default DetalleCursos;

