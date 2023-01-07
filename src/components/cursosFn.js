import React, {useState, useEffect} from 'react';

function CursosFn() {
 /*   
    return (
        <div>
        <h1>HOLA, SOY EL COMPONENTE SALUDO</h1>
        </div>
    )*/
   
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        console.log('%c se monto el componente', 'color:green')
        datosAPI()
    }, [])

    const datosAPI = async () => {
        const datain = await  fetch('https://grupo12.onrender.com/cursosAPI')
        const data = await datain.json()
        console.log(data)
        setCursos(data)
    }

    useEffect(() => {
        console.log('%c se actualizo el componente', 'color: blue');
    }, [cursos])

    useEffect(() => {
        return () => console.log('%c se desmontó el componente', 'color: red');
    }, [])

   

    return (
        <div>
            <h1>HOLA, SOY EL COMPONENTE GRUPODOCE, y esto son los cursos:</h1>
            <h2>{cursos.total}</h2>

        </div>
    );

}

export default CursosFn;