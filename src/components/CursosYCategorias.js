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
        <div className="margin">

              <div className="div-title">
              <ion-icon name="rocket-outline"></ion-icon>
             <div className="div-title2"> DETALLE DE LAS CATEGORIAS </div>
        </div>
            <ul>
            {
                cursosYCategorias.map(e => (
                    <li key={e.idTipoCurso}> <div className="categorias">{e.nombre}: {e.count} </div> </li>
                    
                ))
            }       
            
            </ul>
        </div>
    );

}

export default CursosYCategorias;