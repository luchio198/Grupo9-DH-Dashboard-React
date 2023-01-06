import React from 'react'
import './row2.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { faUserCheck } from	"@fortawesome/free-solid-svg-icons"
import { faEarthAmericas } from	"@fortawesome/free-solid-svg-icons"

    
const Row2 = () => {

    // Captura la cantidad de productos
    var productsQuantity = "http://localhost:3002/products/productsQuantity";

    fetch(productsQuantity)
    .then(function(respuesta){    // primer callback (d)
        return respuesta.json();
    })
    .then(function(dataProd){  // segundo callback (d)

        localStorage.setItem('productsQuantity', JSON.stringify(dataProd));
        
    })

    var prodQ = localStorage.getItem('productsQuantity');



    // Captura la cantidad de usuarios
    var usersQuantity = "http://localhost:3002/users/usersQuantity";

    fetch(usersQuantity)
    .then(function(respuesta){    // primer callback (d)
        return respuesta.json();
    })
    .then(function(dataUser){  // segundo callback (d)

        localStorage.setItem('usersQuantity', JSON.stringify(dataUser));
        
    })

    var userQ = localStorage.getItem('usersQuantity');



    return (
    
        <div className="row">
            {/* <!-- Amount of Products in DB */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total $ en Productos</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">$546.365</div>
                            </div>
                            <div className="col-auto icons-row3">
                                <FontAwesomeIcon icon={faDollarSign} />
							</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- $$$ of all products in DB */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Última Categoria en DB</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">Electrodomésticos</div>
                            </div>
                            <div className="col-auto icons-row3">
                                <FontAwesomeIcon icon={faClipboardList} />
							</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Amount of users in DB */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">País con más Usuarios
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">Argentineeeee (5)</div>
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