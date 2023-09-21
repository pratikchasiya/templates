import React, {Fragment} from "react";
import "../../styles/pages/signup.css";

const SignUp = () => {
  return (
    <Fragment>
      <section className="signup">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h1>
                <strong className="displayNine fw-bold">SIGN UP</strong>
              </h1>
              <h1>
                <strong className="displayNine fw-bold">FOR NEWSLETTER</strong>
              </h1>
              <p className="displayTen">
                Subscribe to the weekly newsletter for all the latest updates
              </p>
            </div>
          </div>

          <div className="form-container col-12">
            <form action="" className="form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  name="email" className="form-control"
                />
              </div>
              <div>
                <button type="submit" className="subbtn btn1">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SignUp;
