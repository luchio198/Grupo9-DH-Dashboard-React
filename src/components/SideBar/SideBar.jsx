import React from 'react'
import './sideBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartLine } from "@fortawesome/free-solid-svg-icons"
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons"
import { faFolder } from "@fortawesome/free-solid-svg-icons"
import { faChartArea } from "@fortawesome/free-solid-svg-icons"
import { faTable } from	"@fortawesome/free-solid-svg-icons"

const SideBar = () => {
  return (
    <div className='body'>
                {/* <!-- Sidebar --> */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style={{width: "200px"}}>

                    {/* <!-- Sidebar - Brand */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center " href="/" style={{textDecoration: 'none'}}>
                        <div className="sidebar-brand-icon">
                            <FontAwesomeIcon icon={faChartLine} />
                        </div>
                        <div className="sidebar-brand-text mx-3 my-4 text-uppercase">DICONS Admin</div>
                    </a>

                    {/* <!-- Divider */}
                    <hr className="sidebar-divider my-0"/>

                    {/* <!-- Nav Item - Dashboard */}
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            <FontAwesomeIcon icon={faTachometerAlt} />
                            <span className='mx-2'>Dashboard</span>
                        </a>
                    </li>

                    {/* <!-- Divider */}
                    <hr className="sidebar-divider"/>

                    {/* <!-- Heading */}
                    <div className="sidebar-heading">Actions</div>

                    {/* <!-- Nav Item - Pages */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/">
                            <FontAwesomeIcon icon={faFolder} />
                            <span className='mx-2'>Pages</span>
                        </a>
                    </li>

                    {/* <!-- Nav Item - Charts */}
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <FontAwesomeIcon icon={faChartArea} />
                            <span className='mx-2'>Charts</span></a>
                    </li>

                    {/* <!-- Nav Item - Tables */}
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <FontAwesomeIcon icon={faTable} />
                            <span className='mx-2'>Tables</span></a>
                    </li>

                    {/* <!-- Divider */}
                    <hr className="sidebar-divider d-none d-md-block"/>
                </ul>
                {/* <!-- End of Sidebar */}
            </div>
  )
}
export default SideBar