import React, {Fragment} from "react";
import "../../styles/pages/supplierandwares.css";
import image1 from "../../assets/images/features15.jpg";
import image2 from "../../assets/images/logo.png";

const SupplierAndWares = () => {
  return (
    <Fragment>
      <section className="supplier">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-lg-block d-none">
              <div className="qr">
                <img src={image1} alt="" />
              </div>
            </div>
            <div className="col-lg-8 text-lg-start text-center">
              <div className="row">
                <div className="logos col-lg-2">
                  <img src={image2} alt="" />
                </div>
                <div className="col-lg-10">
                  <h4 className="mt-3">
                    <strong className="displayThree fw-bold">
                      Kitchen Supplies & Wares
                    </strong>
                  </h4>
                  <h5>
                    <strong
                      className="displayFive fw-bold"
                      style={{color: "#000000"}}
                    >
                      Leo vel fringilla est ullamcorper.
                    </strong>
                  </h5>
                </div>
                <div className="col-lg-12 mt-4">
                  <p className="displayThree" style={{color: "#353535"}}>
                    Sit amet luctus venenatis lectus magna. Odio euismod lacinia
                    at quis risus sed vulputate.
                  </p>
                </div>
              </div>
               <div className="d-lg-none d-block">
               <button className="btn1 mx-4">Download Now</button>
                <button className="btn1">Get It On Google Play</button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SupplierAndWares;
