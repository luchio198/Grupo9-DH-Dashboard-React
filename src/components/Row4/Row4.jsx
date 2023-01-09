import React from 'react'
import { useState, useEffect } from 'react';


const Row4 = () => {

    // Lista de Categorias
    const [listaCategorias, setlistaCategorias] = useState([])

    useEffect(() => {

        fetch("http://localhost:3002/products/traerCategorias")
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((CategoriasApi) => {

                let categorias = CategoriasApi.data

                setlistaCategorias(categorias)
            })
            .catch(error => console.error(error))
    }, [])


    // Cantidad de Productos por Categorias
    const [cantCateg, setCantCateg] = useState([])
    const [prodXCat, setprodXCat] = useState([]) 

    useEffect(() => {

        fetch("http://localhost:3002/products/traerProductosPorCategoria")
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((CategoriasApi) => {
                console.log(CategoriasApi)
                // Cantidad de Categorias
                let categoryQuantity = CategoriasApi.cantidadCategorias;
                console.log(categoryQuantity)
                setCantCateg(categoryQuantity)

                // Productos por Categoria
                let prodXCategoria = CategoriasApi.data;
                setprodXCat(prodXCategoria)
            })
            .catch(error => console.error(error))
    }, [])
    
    
    return (
        <div className="row pt-4">
            {/* <!-- Usuarios por Paises en DB */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary"> {cantCateg} Cantidad de Categorías en DB</h6> 
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {listaCategorias.map((cat) => (

                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-primary text-white shadow">
                                        <div className="card-body">
                                            {cat.nombre} 
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>    
                </div>
            </div>

            {/* <!-- Cantidad de Productos por Categorias en DB */}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Cantidad de Productos por Categorías en DB</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {prodXCat.map((cat) => (

                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            {cat.count} - {cat.name}
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Row4