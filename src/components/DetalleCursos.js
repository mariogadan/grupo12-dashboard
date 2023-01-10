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

        <div className="div-title">
        <ion-icon name="list-outline"></ion-icon>
             <div className="div-title2"> DETALLE DE LOS CURSOS </div>
        </div>
            
             <ul>

             {
                detalleCursos.map( e => (
                     <li key={e.idCurso}>
                        <div className="detalle-block" > 
                         <div className="detalle-nombre"> <h2> {e.nombre}</h2> </div>
                         <div className="detalle-text" >  
                    <p><div className="detalle-subitutlos" >  Descripción: </div>{e.descripcion}</p>
                    <p> <div className="detalle-subitutlos" > Precio:  </div> ${e.precio}</p>
                    </div>
                    </div>
                    </li>
                ))
             }
             </ul>
        </div>
    );

}

export default DetalleCursos;

