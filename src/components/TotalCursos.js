import React, {useState, useEffect} from 'react';

function TotalCursos() {
 

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

    
    useEffect(() => {
        console.log('%c Se actualizó el componente', 'color: blue');
    }, [cursos])

    useEffect(() => {
        return () => console.log('%c Se desmontó el componente', 'color: red');
    }, [])

   

    return (
        <div >
            <h1>Total de cursos</h1>
            <h2>{cursos.total}</h2>

        </div>
    );

}

export default TotalCursos;