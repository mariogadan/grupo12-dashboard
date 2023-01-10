import React, {useState, useEffect} from 'react';

function TotalCursos() {
 

    const [cursos, setCursos] = useState([]);

    const cursosAPI = async () => {
        const dataIn = await  fetch('https://grupo12.onrender.com/cursosAPI')
        const data = await dataIn.json()
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


        <div className="kpi">
        <div className="kpi-title"> CURSOS</div>
        <div className= "kpi-background"> 
                <div className="kpi-icon"> 
                <ion-icon name="school-outline"></ion-icon>  </div>
                <div className="kpi-text">
        <h2>{cursos.total}</h2>
        </div>
        </div>
        </div>
);

    

}

export default TotalCursos;