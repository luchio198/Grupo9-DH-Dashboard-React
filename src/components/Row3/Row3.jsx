import React from 'react'
import './row3.css'
import { useState, useEffect } from 'react';


const Row3 = () => {

    // Ultimo producto in DB
    const [ultimoProducto, setUltimoProducto] = useState([])

    useEffect(() => {

        fetch("http://localhost:3002/products/traerProductos")
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((productosApi) => {

                let productos = productosApi.data
                                
			    let lastProductCreatedObject = productos.slice(-1);
                let lastProductCreated = lastProductCreatedObject[0];

                setUltimoProducto(lastProductCreated)
            })
            .catch(error => console.error(error))
    }, [])

    // Ultimo producto in DB
    const [ultimoUsuario, setUltimoUsuario] = useState([])

    useEffect(() => {

        fetch("http://localhost:3002/users/traerUsuarios")
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((UsuariosApi) => {

                let usuarios = UsuariosApi.data
                                
			    let lastUserCreatedObject = usuarios.slice(-1);
                let lastUserCreated = lastUserCreatedObject[0];

                setUltimoUsuario(lastUserCreated)
            })
            .catch(error => console.error(error))
    }, [])


    

    return (
        <div className="row pt-4">
            {/* <!-- Last Product in DB */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Último Producto Creado en DB</h6>
                    </div>
                    <a target="_blank" rel="nofollow" href={'http://localhost:3002/products/detail/' + ultimoProducto.id} style={{textDecoration: "none",  color: "black"}}>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" height="300" width="300" align="left" src={ultimoProducto.imagen} alt="ImagenProducto" />
                        </div>
                        <p><b>Nombre</b>  {ultimoProducto.nombre}</p>
                        <p><b>Descripción</b>  {ultimoProducto.descripcion}</p>
                        <p><b>Precio</b>   $ {ultimoProducto.precio}</p>
                        <button type="button" class="btn btn-dark">Detalle</button>
                        {/* <Link to='/'>Go to Aboutpage</Link>
                        <a href={'/posts/' + post.id} */}
                        {/* View product detail */}
                    </div></a>
                </div>
            </div>

            {/* <!-- Last User in DB */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Último Usuario Creado en DB</h6>
                    </div>
                    <a target="_blank" rel="nofollow" href={'http://localhost:3002/products/detail/' + ultimoUsuario.id} style={{textDecoration: "none",  color: "black"}}>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" height="300" width="300" align="left" src={ultimoUsuario.avatar} alt="ImagenProducto" />
                        </div>
                        <p><b>Nombre</b>  {ultimoUsuario.nombre}</p>
                        <p><b>Apellido </b> {ultimoUsuario.apellido}</p>
                        <p><b>Email </b>  {ultimoUsuario.email}</p>
                        <p><b>País </b>  {ultimoUsuario.pais}</p>
                        
                    </div></a>
                </div>
            </div>

            
        </div>
    )
}

export default Row3