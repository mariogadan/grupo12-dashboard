import React, {useState, useEffect} from 'react';

function TotalCategorias () {

    const [categorias, setCategorias] = useState([]);

    const categoriasAPI = async () => {
        const dataIn = await  fetch('https://grupo12.onrender.com/categoriasAPI')
        const data = await dataIn.json()
        setCategorias(data)
        
    }
    useEffect(() => {
        console.log('%c Se montó el componente', 'color:yellow')
        categoriasAPI()
    }, [])

    return (
        <div className="kpi">
        <div className="kpi-title"> CATEGORÍAS</div>
        <div className= "kpi-background"> 
                <div className="kpi-icon"> 
                <ion-icon name="rocket-outline"></ion-icon>
                     </div>
                <div className="kpi-text">
        <h2>{categorias.length}</h2>
        </div>
        </div>
        </div>
        );
   



}



export default TotalCategorias;