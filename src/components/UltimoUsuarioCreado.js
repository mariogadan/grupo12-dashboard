import React, {useState, useEffect} from 'react';

function UltimoUsuarioCreado () {

    const [ultimoUsuario, setUltimoUsuario] = useState([]);

    useEffect(() => {
        fetch("https://grupo12.onrender.com/usuario/usuariosAPI")
        .then(respuestaAPI => {return respuestaAPI.json()
        })
        .then(usuariosAPI => {
            let totalidadUsuarios = usuariosAPI.usuarios
            let indiceUltimoUsuario = totalidadUsuarios.length-1
            let ultimo = totalidadUsuarios[indiceUltimoUsuario]
            setUltimoUsuario(ultimo)
        })
    }, [])

    return (
        <div>
            <h1> Último usuario creado </h1>
            <h2> Nombre: {ultimoUsuario.nombre} </h2>
            <h2> Apellido: {ultimoUsuario.apellido} </h2>
            <h2> E-mail: {ultimoUsuario.email} </h2>
        </div>
    );

}

export default UltimoUsuarioCreado;