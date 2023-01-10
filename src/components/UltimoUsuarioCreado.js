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
            <div className='latest-background'> 
            <div className='latest-icon'> 
            <ion-icon name="happy-outline"></ion-icon>
            </div>
            <div className='latest-text'> 
            <div className='latest-div-title'> ÚLTIMO USUARIO CREADO </div>
            <div className='latest-div-text'>
            <p> Nombre: {ultimoUsuario.nombre} </p>
            <p> Apellido: {ultimoUsuario.apellido} </p>
            <p> E-mail: {ultimoUsuario.email} </p>
            </div>
        </div>
        </div>
        </div>
    );

}

export default UltimoUsuarioCreado;