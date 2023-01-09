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

                let formatting_options = {
                    style: 'currency',
                    currency: '$',
                    minimumFractionDigits: 3,
                }
                 let dollarString = new Intl.NumberFormat('de-DE').format(SumaTotal);
                setsumaTotalProductos(dollarString)
            })
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
            console.log(categorias);
                            
            let lastCategoryCreatedObject = categorias.slice(-1);
            let lastCategoryCreated = lastCategoryCreatedObject[0].nombre;
            setUltimaCategoria(lastCategoryCreated)
        })
}, [])

// Ultima categoria creada en DB
const [usuariosPorPais, setUsuariosPorPais] = useState([])

useEffect(() => {

    fetch("http://localhost:3002/users/usersByCountry")
        .then((respuestaApi) => {
            return respuestaApi.json()
        })
        .then((usuariosPorPaisApi) => {

            let usuariosPorPais = usuariosPorPaisApi.data
            console.log(usuariosPorPais);
                            
            // No logré filtrar por pais que es una columna de la db
            let usuariosPorPaisFinal = usuariosPorPais[0].count;
            setUsuariosPorPais(usuariosPorPaisFinal)
        })
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
                                <div className="h5 mb-0 font-weight-bold text-gray-800">Argentina - {usuariosPorPais} usuarios</div>
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