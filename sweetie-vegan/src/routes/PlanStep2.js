import React from "react";
import { Link } from "react-router-dom";
import './PlanStep2.css'

const PlanStep2 = () => {
  return (
    <div className="planPage flex">
      <div className="planContainer flex">
        <div className="planSelectDivCenter">
          <p>STEP 2/4</p>
          <h2>Select your preference</h2>
          <div className="buttonContainer">
            <div className="buttonContainerRow">
              <button>Bread</button>
              <button>Cake</button>
            </div>
            <div className="buttonContainerRow">
              <button>Cookie</button>
              <button>Donut</button>
            </div>
            <div className="buttonContainerRow">
              <button>Muffin</button>
              <button>Everything!</button>
            </div>
          </div>
          <p>Any allergies or dislikes?</p>
          <p>
            <textarea required maxLength="150" className="allergybox" />
          </p>
          <Link to={"/choose-plan/step1"}>
            <button className="prevButton">PREV</button>
          </Link>
          <Link to={"/choose-plan/step3"}>
            <button className="nextButtonBet">NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanStep2;
