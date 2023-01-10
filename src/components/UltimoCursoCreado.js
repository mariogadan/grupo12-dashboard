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
        <div className='latest-background'>
            <div className='latest-icon'> 
            <ion-icon name="ribbon-outline"></ion-icon>
            </div>
            <div className='latest-text'> 
            <div className='latest-div-title'> ÚLTIMO CURSO CREADO </div>
           
            <h3> {ultimoCurso.nombre} </h3>
            <p> Precio: $ {ultimoCurso.precio} </p>
            <p> Fecha de inicio: {ultimoCurso.fechaInicioCurso} </p>
        </div>
        </div>
       
    );

}

export default UltimoCursoCreado;