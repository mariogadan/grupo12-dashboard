import React, {useState, useEffect} from 'react';

function CursosPorCategoria () {

    const [cursosPorCategoria, setCursosPorCategoria] = useState([]);

    useEffect(() => {
        fetch('https://grupo12.onrender.com/cursosAPI')
        .then(respuestaAPI => {return respuestaAPI.json()
        })
        .then(categoriasAPI => {
            setCursosPorCategoria(categoriasAPI)
        })
    }, [])
    console.log(cursosPorCategoria)
    return (
        <div>
            <h1> Cursos según categoría </h1>
            <ul>
            {
                cursosPorCategoria.total //acá creo que hay que hacer un map del array de cursosPorCategoria así nos trae los cursos y su categoria correspondiente
            }
            </ul>
        </div>
    );

}

export default CursosPorCategoria;