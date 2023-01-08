import React, {useState, useEffect} from 'react';

function CursosYCategorias () {

    const [cursosYCategorias, setCursosYCategorias] = useState([]);

    useEffect(() => {
        fetch('https://grupo12.onrender.com/cursosAPI')
        .then(respuestaAPI => {return respuestaAPI.json()
        })
        .then(categoriasAPI => {

            let cursosPorCategoria = categoriasAPI.cursosPorCategoria
            setCursosYCategorias(cursosPorCategoria)

            console.log(cursosPorCategoria) 
        })
    }, [])
    

    



    return (
        <div>
            <h1> Cursos según categoría </h1>
            <ul>
            {
                cursosYCategorias.map(e => (
                    <li key={e.idTipoCurso}> <h2> {e.nombre}: {e.count} </h2> </li>
                    
                ))
            }       
            
            </ul>
        </div>
    );

}

export default CursosYCategorias;