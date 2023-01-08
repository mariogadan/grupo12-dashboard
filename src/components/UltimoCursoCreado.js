import React, {useState, useEffect} from 'react';

function UltimoCursoCreado () {

    const [ultimoCurso, setUltimoCurso] = useState([]);

    useEffect(() => {
        fetch('https://grupo12.onrender.com/cursosAPI')
        .then(respuestaAPI => {return respuestaAPI.json()
        })
        .then(cursosAPI => {
            let totalidadCursos = cursosAPI.cursos
            let indiceUltimoCurso = totalidadCursos.length-1
            let ultimo = totalidadCursos[indiceUltimoCurso]
            setUltimoCurso(ultimo)
        })
    }, [])

    return (
        <div>
            <h1> Último curso creado </h1>
            <h2> Nombre: {ultimoCurso.nombre} </h2>
            <h2> Precio: {ultimoCurso.precio} </h2>
            <h2> Fecha de inicio: {ultimoCurso.fechaInicioCurso} </h2>
        </div>
    );

}

export default UltimoCursoCreado;