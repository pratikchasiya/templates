import React, {Fragment} from "react";
import "../../styles/pages/arrivals.css";
import image1 from "../../assets/images/screenshot-4-609x609.png";
import image2 from "../../assets/images/screenshot-5-609x610.png";
import image3 from "../../assets/images/screenshot-6-609x612.png";
import image4 from "../../assets/images/screenshot-7-609x611.png";

const array = [
  {
    image: image1,
    title: "Kitchen Tools",
    price: "$30.00",
  },
  {
    image: image2,
    title: "Cutlery Set",
    price: "$45.00",
  },
  {
    image: image3,
    title: "Water Boiler",
    price: "$75.00",
  },
  {
    image: image4,
    title: "Electric Cooker",
    price: "$100.00",
  },
];

const Gallery = () => {
  return (
  // <section className="arrival">
  //   <div className="space">
  //   <div className="row">
  //     <div className="col-12 text-center">
  //       <h3><strong>NEW ARRIVALS</strong></h3>
  //     </div>
  //   </div>
  //   </div>

  //   <div style={{display:"flex"}}>
  //     <div className="row space ">
  //     {array.map((x,i)=>{
  //       return(
  //         <Fragment>
          
  //               <div className="col-lg-3">
  //                 <div className="card cardimg" style={{minHeight:"432px"}}>
  //                   <div className="card-wrapper">
  //                     <div className="card-img" >
  //                       <img src={x.image} alt="" style={{width:"300px"}} />
  //                     </div>
  //                     <div className="card-box">
  //                       <h5><strong>{x.title}</strong></h5>
  //                       <p>{x.price}</p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
           
  //         </Fragment>
  //       )
  //     })}
  //     </div>
  //   </div>
  // </section>

 <div className="container-fluid">
   <Fragment>
  <div className="row seller">
    <div className="col-12 text-center mb-5">
      <h3>
        <strong className="displayThree fw-bold">NEW ARRIVALS</strong>
      </h3>
    </div>

  <div className="">
    <section className="space">
      <div className="row">
        {array.map((x, i) => {
          return (
            <div className="col-12 col-lg-3 col-sm-6 mb-1">
              <div className="card cardimg">
                <div className="arrivalimg"> 
                  {" "}
                  <img src={x.image} className="card-img-top" alt="..." style={{height:"432px"}} />
                </div>
                <div className="card-box">
                  <div className="card-body card-overlay text-center">
                    <h5 className="card-title">
                      <strong className="displayFour fw-medium hover-text">
                        {x.title}
                      </strong>
                    </h5>
                    <p className="card-text displayFive hover-text">
                      {x.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </div>
  </div>
</Fragment>
  
 </div>
  )
 
};

const Arrivals = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};

export default Arrivals;
