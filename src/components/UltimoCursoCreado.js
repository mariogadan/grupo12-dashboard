import React, {useState, useEffect} from 'react';

function UltimoCursoCreado () {

    const [cursos, setCursos] = useState([]);

    const cursosAPI = async () => {
        const dataIn = await  fetch('https://grupo12.onrender.com/cursosAPI')
        const data = await dataIn.json()
        console.log(data)
        setCursos(data)
        
    }

    useEffect(() => {
        console.log('%c Se montó el componente', 'color:green')
        cursosAPI()
    }, [])

    return (
        <div>
            <h1> Último curso creado </h1>
            <h2> Nombre: { cursos.cursos[cursos.cursos.length-1].nombre } </h2>
            <h2> Precio: { cursos.cursos[cursos.cursos.length-1].precio } </h2>
            <h2> Fecha de inicio: { cursos.cursos[cursos.cursos.length-1].fechaInicioCurso} </h2>
        </div>
    );

}


export default UltimoCursoCreado;