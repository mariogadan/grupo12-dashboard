import React, {useState, useEffect} from 'react';

function TotalCategorias () {

    const [categorias, setCategorias] = useState([]);

    const categoriasAPI = async () => {
        const datain = await  fetch('https://grupo12.onrender.com/categoriasAPI')
        const data = await datain.json()
        console.log(data)
        setCategorias(data)
        
    }
    useEffect(() => {
        console.log('%c se monto el componente de categorias', 'color:yellow')
        categoriasAPI()
    }, [])

    return (
        <div >
            <h1>Total de categorias</h1>
            <h2>{categorias.length}</h2>
        </div>
    );

}



export default TotalCategorias;