import React, { Fragment } from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <Fragment>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className='displaySeven fw-medium' style={{fontSize:"20px"}}>© Copyright 2022 Mobirise - All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    </Fragment>
  )
}

export default Footer