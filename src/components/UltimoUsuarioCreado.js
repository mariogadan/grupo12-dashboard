import React, {useState, useEffect} from 'react';

function UltimoUsuarioCreado () {

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

    return (
        <div>
            <h1> Último usuario creado: </h1>
            <h2> Nombre: { usuarios.usuarios[usuarios.usuarios.length-1].nombre } </h2>
            <h2> Apellido: { usuarios.usuarios[usuarios.usuarios.length-1].apellido } </h2>
            <h2> Email: { usuarios.usuarios[usuarios.usuarios.length-1].email } </h2>
        </div>
    );

    

}


export default UltimoUsuarioCreado;