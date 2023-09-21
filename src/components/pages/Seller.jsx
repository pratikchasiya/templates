import React, {Fragment} from "react";
import "../../styles/pages/seller.css";

const array = [
  {
    image: require("../../assets/images/screenshot-8-695x694.png"),
    title: "Wooden Spoon",
    price: "$15.00",
  },
  {
    image: require("../../assets/images/screenshot-9-693x694.png"),
    title: "Wooden Cutting Board",
    price: "$40.00",
  },
  {
    image: require("../../assets/images/screenshot-10-694x694.png"),
    title: "Pot Liners",
    price: "$20.00",
  },
  {
    image: require("../../assets/images/screenshot-5-609x610.png"),
    title: "Cutlery Set",
    price: "$45.00",
  },
  {
    image: require("../../assets/images/screenshot-4-609x609.png"),
    title: "Kitchen Tools",
    price: "$30.00",
  },
  {
    image: require("../../assets/images/screenshot-11-694x695.png"),
    title: "Grinder",
    price: "$85.00",
  },
];

const NewSeller = () => {
  return (
    <Fragment>
    <div className="container-fluid">
    <div className="row seller">
        <div className="col-12 text-center">
          <h3>
            <strong>BEST SELLER</strong>
          </h3>
        </div>
    
      <div className="space">
        <section>
          <div className="row ">
            {array.map((x, i) => {
              return (
                <div className="col-12 col-lg-4 ">
                  <div className="card mx-2 mt-3">
                    <div>
                      {" "}
                      <img src={x.image} className="card-img-top" alt="..." />
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
    </div>
    </Fragment>
  );
};

const Seller = () => {
  return (
    <div>
      <NewSeller />
    </div>
  );
};

export default Seller;
