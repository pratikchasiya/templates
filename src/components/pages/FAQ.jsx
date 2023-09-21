import React, { Fragment } from 'react'
import '../../styles/pages/faq.css'

const FAQ = () => {
  return (
  <Fragment>
<section className='faq'>
   <div className='faq-div'>
   <div className="space">
<div className="row">
    <div className="col-12 text-center mb-5">
        <h3><strong className='displayThree fw-bold'>Frequently Asked Questions.</strong></h3>
    </div>
</div>
<div className="row">
    <div className="col-12">
    <div className="accordion" id="accordionExample">
  <div className="accordion-item py-4">
    <h2 className="accordion-header displayOne" id="headingOne" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{fontSize:"24px"}}>
       Is the CookM5 app free?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body displayTen col-sm-w-50 w-100" style={{color:"#353535"}}>
      The number of items is limited in this block. Open Quisque id diam vel quam elementum pulvinar etiam non. Et ultrices neque ornare aenean. Venenatis urna cursus eget nunc scelerisque viverra. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam.
      </div>
    </div>
  </div>
  <div className="accordion-item py-4">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{fontSize:"24px"}}>
       Do you need to have a smart appliance to use CookM5?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body displayTen col-sm-w-50 w-100" style={{color:"#353535"}}>
      Sed euismod nisi porta lorem. Cras sed felis eget velit. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Aliquam ut porttitor leo a diam. Congue eu consequat ac felis donec et odio pellentesque diam.
      </div>
    </div>
  </div>
  <div className="accordion-item py-4">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{fontSize:"24px"}}>
       How do I connect my appliance in the app?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body displayTen col-sm-w-50 w-100" style={{color:"#353535"}}>
      Quisque id diam vel quam elementum pulvinar etiam non. Et ultrices neque ornare aenean. Venenatis urna cursus eget nunc scelerisque viverra. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam.
      </div>
    </div>
  </div>
  <div className="accordion-item py-4">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{fontSize:"24px"}}>
      Is the CookM5 app available on desktop?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body displayTen col-sm-w-50 w-100" style={{color:"#353535"}}>
      At auctor urna nunc id cursus metus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Sit amet luctus venenatis lectus magna.
      </div>
    </div>
  </div>
  <div className="accordion-item py-4">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{fontSize:"24px"}}>
    What is a smart recipe?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body displayTen col-sm-w-50 w-100" style={{color:"#353535"}}>
      Amet consectetur adipiscing elit pellentesque habitant. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Proin fermentum leo vel orci porta non pulvinar neque. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus.
      </div>
    </div>
  </div>
</div>
    </div>
</div>
</div>
   </div>
</section>
  </Fragment>
  )
}

export default FAQ