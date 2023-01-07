import React, {useState, useEffect} from 'react';

function TotalUsuarios() {

    const [usuarios, setUsuarios] = useState([]);

    const usuariosAPI = async () => {
        const datain = await  fetch('https://grupo12.onrender.com/usuario/usuariosAPI')
        const data = await datain.json()
        console.log(data)
        setUsuarios(data)
    }

    useEffect(() => {
        console.log('%c se monto el componente', 'color:green')
        usuariosAPI()
    }, [])


    useEffect(() => {
        console.log('%c se actualizo el componente', 'color: blue');
    }, [usuarios])
    

    useEffect(() => {
        return () => console.log('%c se desmontó el componente', 'color: red');
    }, [])

    return (
        <div>
            <h1>Total usuarios</h1>
            <h2>{usuarios.total}</h2>

        </div>
    );

}

export default TotalUsuarios;