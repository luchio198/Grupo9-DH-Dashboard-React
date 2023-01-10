import React from 'react'
import './row2.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { faUserCheck } from	"@fortawesome/free-solid-svg-icons"
import { faEarthAmericas } from	"@fortawesome/free-solid-svg-icons"

    
const Row2 = () => {

    // Sumatoria de precios de productos en $$$$ en DB
    const [sumaTotalProductos, setsumaTotalProductos] = useState([])

    useEffect(() => {

        fetch("http://localhost:3002/products/traerProductos")
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((sumaTotalProductosApi) => {

                let productos = sumaTotalProductosApi.data;

                const initialValue = 0;
                let suma = [];
                   
                productos.forEach(value => {
                    
                    let precio = parseInt(value.precio);
                    suma.push(precio)
                });     

                const SumaTotal = suma.reduce((accumulator, currentValue) =>
                accumulator + currentValue, initialValue
                );

                let dollarString = new Intl.NumberFormat('de-DE').format(SumaTotal);

                setsumaTotalProductos(dollarString)
            })
            .catch(error => console.error(error))
    }, [])

// Ultima categoria creada en DB
const [ultimaCategoria, setUltimaCategoria] = useState([])

useEffect(() => {

    fetch("http://localhost:3002/products/traerCategorias")
        .then((respuestaApi) => {
            return respuestaApi.json()
        })
        .then((CategoriasApi) => {

            let categorias = CategoriasApi.data
                            
            let lastCategoryCreatedObject = categorias.slice(-1);
            let lastCategoryCreated = lastCategoryCreatedObject[0].nombre;
            setUltimaCategoria(lastCategoryCreated)
        })
        .catch(error => console.error(error))
}, [])

// Cantidad de Usuarios por Paises
const [usuariosPorPais, setUsuariosPorPais] = useState([])
const [Paises, setPaises] = useState([])

useEffect(() => {

    fetch("http://localhost:3002/users/usersByCountry")
        .then((respuestaApi) => {
            return respuestaApi.json()
        })
        .then((usuariosPorPaisApi) => {
            console.log(usuariosPorPaisApi);
            let cantidadUsuariosPorPaises = usuariosPorPaisApi.data.count;
            let cantidadUsuariosPorPaisesFinal = cantidadUsuariosPorPaises[0].count;
            
            let paises = usuariosPorPaisApi.data.rows;
            //console.log(paises);
            let listaPaises = paises[0].count;
           
            setUsuariosPorPais(cantidadUsuariosPorPaisesFinal)
            setPaises(listaPaises)
        })
        .catch(error => console.error(error))
}, [])


    return (
    
        <div className="row">
            {/* <!-- $$$ of all products in DB */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total $ en Productos</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">$ {sumaTotalProductos}</div>
                            </div>
                            <div className="col-auto icons-row3">
                                <FontAwesomeIcon icon={faDollarSign} />
							</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Last Category Created */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Última Categoria creada</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{ultimaCategoria}</div>
                            </div>
                            <div className="col-auto icons-row3">
                                <FontAwesomeIcon icon={faClipboardList} />
							</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Country with more Users */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">País con más Usuarios
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{Paises} - {usuariosPorPais} usuarios</div>
                            </div>
                            <div className="col-auto icons-row3">
                                <FontAwesomeIcon icon={faEarthAmericas} />
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Row2