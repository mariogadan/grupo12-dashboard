import React, {useState, useEffect} from 'react';

function DetalleCursos () {
    
    const [detalleCursos, setdetalleCursos] = useState([]);

    const cursosAPI = async () => {
        const dataIn = await  fetch('https://grupo12.onrender.com/cursosAPI')
        const data = await dataIn.json()
        console.log(data)
        setdetalleCursos(data)
        
    }

    useEffect(() => {
        console.log('%c Se montó el componente', 'color:green')
        cursosAPI()
    }, [])

    

    return (
        <div >
             <h1> Detalle Cursos </h1>
            <h2> Nombre: {detalleCursos.nombre} </h2>
            <h2>  Fecha de inicio: {detalleCursos.fechaInicioCurso} </h2>
            <h2> Precio: {detalleCursos.precio} </h2>

        </div>
    );

}

export default DetalleCursos;

