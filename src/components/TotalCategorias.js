import React, {useState, useEffect} from 'react';

function TotalCategorias () {

    const [categorias, setCategorias] = useState([]);

    const categoriasAPI = async () => {
        const dataIn = await  fetch('https://grupo12.onrender.com/categoriasAPI')
        const data = await dataIn.json()
        console.log(data)
        setCategorias(data)
        
    }
    useEffect(() => {
        console.log('%c Se montó el componente', 'color:yellow')
        categoriasAPI()
    }, [])

    return (
        <div >
            <h1>Total de categorías</h1>
            <h2>{categorias.length}</h2>
        </div>
    );

}



export default TotalCategorias;