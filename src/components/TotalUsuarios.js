import React, {useState, useEffect} from 'react';

function TotalUsuarios() {

    const [usuarios, setUsuarios] = useState([]);

    const usuariosAPI = async () => {
        const dataIn = await  fetch('https://grupo12.onrender.com/usuario/usuariosAPI')
        const data = await dataIn.json()
        console.log(data)
        setUsuarios(data)
    }

    useEffect(() => {
        console.log('%c Se montó el componente', 'color:green')
        usuariosAPI()
    }, [])


    useEffect(() => {
        console.log('%c Se actualizó el componente', 'color: blue');
    }, [usuarios])
    

    useEffect(() => {
        return () => console.log('%c Se desmontó el componente', 'color: red');
    }, [])

    return (
        <div className="kpi">
            <div className="kpi-title"> USUARIOS</div>
            <div className= "kpi-background"> 
                    <div className="kpi-icon"> 
                        <ion-icon name="people-outline"></ion-icon>
                    </div>
                    <div className="kpi-text">
            <h2>{usuarios.total}</h2>
            </div>
        </div>
        </div>
    );

}

export default TotalUsuarios;