import React from 'react'
import Footer from '../Footer/Footer'
import Row1 from '../Row1/Row1'
import Row2 from '../Row2/Row2'
import Row3 from '../Row3/Row3'
import Row4 from '../Row4/Row4'
import SideBar from '../SideBar/SideBar'

const Dashboard = () => {
  return (
    
        <div id="wrapper" className="d-sm-flex align-items-start justify-content-between mx-4 pt-2" >

            <SideBar/>

            {/* <!-- Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content */}
                <div id="content">

                    {/* <!-- Begin Page Content */}
                    <div className="container-fluid px-4 pt-3">

                        {/* <!-- Page Heading */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dicons | Dashboard Statistics</h1>
                        </div>

                        <Row1/>
                        <Row2/>
                        <Row3/>
                        <Row4/>

                    </div>
                    {/* <!-- /.container-fluid */}

                </div>
                {/* <!-- End of Main Content */}

                {/* <!-- Footer */}
                <Footer/>
                {/* <!-- End of Footer */}

            </div>
            {/* <!-- End of Content Wrapper */}

        </div>
    
  )
}

export default Dashboard
