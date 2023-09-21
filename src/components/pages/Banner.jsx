import React, {Fragment} from "react";
import "../../styles/pages/banner.css";

const Banner = () => {
  return (
    <Fragment>
      <section className="section1 m-0 p-0">
        <div className="banner">
          <div className="container ban">
            <div className="row justify-content-end">
              <div className="col-12 col-lg-6"></div>
              <div className="col-12 col-lg-6">
                <h1>
                  <strong className="displayOne display-2 ">
                    Kitchen Supplies & Wares
                  </strong>
                </h1>
                <p className="displayTwo">
                  Facilisis magna etiam tempor orci eu lobortis elementum nibh
                  tellus. Eget arcu dictum varius duis at consectetur.
                </p>
                <div className="col-lg-4 col-md-4 col-12">
                  <button className="btn1 w-100">SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Banner;
