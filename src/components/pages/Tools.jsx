import React, {Fragment} from "react";
import "../../styles/pages/tools.css";
import image1 from "../../assets/images/screenshot-1-472x505.png";
import image2 from "../../assets/images/screenshot-2-471x502.png";
import image3 from "../../assets/images/screenshot-3-472x502.png";

const array = [
  {
    image: image1,
    title: "Kitchen Tools",
    subtitle: "SHOP NOW",
  },
  {
    image: image2,
    title: "Cooking Utensil",
    subtitle: "SHOP NOW",
  },
  {
    image: image3,
    title: "Cutlery Set",
    subtitle: "SHOP NOW",
  },
];

const Tools = () => {
  return (
    <Fragment>
      <div
       className="space"
        style={{display: "flex", justifyContent: "space-evenly"}}
      >
            <section className="tools">
              <div className="row ">
        {array.map((x, i) => {
          return (
                <div className="col-12 col-lg-4 col-md-6 my-2">
                  <div className="card mx-2" >
                    <div className="toolimg">
                      {" "}
                      <img src={x.image} className="card-img-top" alt="..." style={{height:"400px"}} />
                    </div>
                  <div className="card-box">
                  <div className="card-body card-overlay">
                      <h5 className="card-title">
                        <strong className="displayFour fw-medium hover-text">
                          {x.title}
                        </strong>
                      </h5>
                      <p className="card-text displayFive hover-text">{x.subtitle}</p>
                    </div>
                  </div>
                  </div>
                </div>
          );
        })}
        </div>
      </section>
      </div>
    </Fragment>
  );
};

const ImageTools = () => {
  return (
    <div>
      <Tools />
    </div>
  );
};

export default ImageTools;
