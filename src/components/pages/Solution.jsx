import React, {Fragment} from "react";
import "../../styles/pages/solution.css";

const Solution = () => {
  return (
    <Fragment>
      <section className="solutionsec">
        <div className="solution">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h1>
                  <strong className="displayOne display-2 me-5">Solutions For The Kitchen</strong>
                </h1>
                <p className="displayTwo">Lorem Ipsum is simply typesetting dummy text.</p>
                <div>
                    <button className="btn1">SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Solution;
