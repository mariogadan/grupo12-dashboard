import React, {useState, useEffect} from 'react';

function UsuariosFn() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        console.log('%c se monto el componente', 'color:green')
        datosAPI()
    }, [])

    const datosAPI = async () => {
        const datain = await  fetch('https://grupo12.onrender.com/usuario/usuariosAPI')
        const data = await datain.json()
        console.log(data)
        setUsuarios(data)
    }

    useEffect(() => {
        console.log('%c se actualizo el componente', 'color: blue');
    }, [usuarios])

    useEffect(() => {
        return () => console.log('%c se desmontó el componente', 'color: red');
    }, [])

    return (
        <div>
            <h1>HOLA,,, SOY EL COMPONENTE USUARIOS, y esto son los usuarios:</h1>
            <h2>{usuarios.total}</h2>

        </div>
    );

}

export default UsuariosFn;