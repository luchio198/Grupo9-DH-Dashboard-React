import React from 'react'
import './row1.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"
import { faUserCheck } from	"@fortawesome/free-solid-svg-icons"
import { faGift } from	"@fortawesome/free-solid-svg-icons"
    
const Row1 = () => {

    // Cantidad de Productos en DB
    const [cantidadProductos, setcantidadProductos] = useState([])

    useEffect(() => {

        fetch("http://localhost:3002/products/traerProductos")
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((cantidadProductosApi) => {

                let productos = cantidadProductosApi.data;

                let cantidadProductos = productos.length;
			    
                setcantidadProductos(cantidadProductos)
            })
            .catch(error => console.error(error))
    }, [])

    // Cantidad de Usuarios en DB
    const [cantidadUsuarios, setcantidadUsuarios] = useState([])

    useEffect(() => {

        fetch("http://localhost:3002/users/usersQuantity")
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((cantidadUsuariosApi) => {

                let usuarios = cantidadUsuariosApi;

                setcantidadUsuarios(usuarios)
            })
            .catch(error => console.error(error))
    }, [])
    
    // Cantidad de Categorias en DB
    const [cantidadCategorias, setcantidadCategorias] = useState([])

    useEffect(() => {

        fetch("http://localhost:3002/products/traerCategorias")
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((cantidadCategoriasApi) => {

                let categorias = cantidadCategoriasApi.data;

                let cantidadCategories = categorias.length;
                

                setcantidadCategorias(cantidadCategories)
            })
            .catch(error => console.error(error))
    }, [])


    return (
    
        <div className="row">
            {/* <!-- Total Users Quantity in DB */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Productos en DB</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidadProductos}</div>
                            </div>
                            <div className="col-auto icons-row3">
                                <FontAwesomeIcon icon={faGift} />
							</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Total Users Quantity in DB */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Usuarios en DB</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidadUsuarios}</div>
                            </div>
                            <div className="col-auto icons-row3">
                                <FontAwesomeIcon icon={faUserCheck} />
							</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Total Categories Quantity in DB */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Categorías en DB
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidadCategorias}</div>
                            </div>
                            <div className="col-auto icons-row3">
                                <FontAwesomeIcon icon={faClipboardList} />
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Row1