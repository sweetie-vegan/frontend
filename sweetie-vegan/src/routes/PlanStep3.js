import React from "react";
import { Link } from "react-router-dom";
import "./PlanStep3.css";

const PlanStep3 = () => {
  return (
    <div className="planPage flex">
      <div className="planContainer flex">
        <div className="planSelectDivCenter">
          <p>STEP 3/4</p>
          <h2>Address</h2>
          <div className="addressDiv">
            <div>
              <p>Street address</p>
              <textarea required className="addressboxfull" />
            </div>
            <div className="addressDivHalf">
              <div>
                <p>Apt/Unit</p>
                <textarea required className="addressbox" />
              </div>
              <div>
                <p>Postal Code</p>
                <textarea required className="addressbox" />
              </div>
            </div>
            <div className="addressDivHalf">
              <div>
                <p>City</p>
                <textarea required className="addressbox" />
              </div>
              <div>
                <p>State</p>
                <textarea required className="addressbox" />
              </div>
            </div>
            <div className="addressDivHalf">
              <div>
                <p>Country</p>
                <textarea required className="addressbox" />
              </div>
              <div>
                <p>Phone number</p>
                <textarea required className="addressbox" />
              </div>
            </div>
          </div>
          <Link to={"/choose-plan/step2"}>
            <button className="prevButton">PREV</button>
          </Link>
          <Link to={"/choose-plan/step4"}>
            <button className="nextButtonBet">NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanStep3;
