import React, { Fragment } from 'react'
import '../../styles/pages/image.css'
import image from '../../assets/images/pexels-mark-mccammon-2724748-1920x1280.jpg'

const Image = () => {
  return (
    <Fragment>
  <section className='image'>
    <div className="space">
        <div className="row">
            <div className="col-12 bigimg">
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  </section>
    </Fragment>
  )
}

export default Image