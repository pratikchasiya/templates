import React, {Fragment} from "react";
import "../../styles/pages/instagram.css";

const array = [
  {image: require("../../assets/images/gallery7 (1).jpg")},
  {image: require("../../assets/images/gallery8.jpg")},
  {image: require("../../assets/images/gallery9.jpg")},
  {image: require("../../assets/images/gallery10.jpg")},
  {image: require("../../assets/images/gallery11.jpg")},
  {image: require("../../assets/images/gallery12.jpg")},
];

const ImageInsta = () => {
  return (
    <section className="imageinsta">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h3>
              <strong>MENTAGE ON INSTAGRAM</strong>
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div className="row space">
          {array.map((x, i) => {
            return (
              <div className="col-12 col-lg-4 col-md-6">
                <div className="imgs">
                  <img src={x.image} alt="" />
              
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Instagram = () => {
  return (
    <Fragment>
      <ImageInsta />
    </Fragment>
  );
};

export default Instagram;
