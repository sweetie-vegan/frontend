import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPeopleFill, BsPersonFill } from "react-icons/bs";
import "./PlanStep1.css";

const PlanStep1 = () => {
  const [kitNum, setKitNum] = useState(0);
  const [peopleNum, setPeopleNum] = useState(0);
  const shipping = 9.99;
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(kitNum * peopleNum);
  }, [kitNum, peopleNum]);

  // // 1 recipe per week = $20 / $30
  const onPressKitButton = (num) => {
    setKitNum(num);
  };

  const onPressPeopleButton = (num) => {
    setPeopleNum(num);
  };

  return (
    <div className="planPage flex">
      <div className="planContainer flex">
        <div className="planSelectDiv">
          <p>STEP 1/4</p>
          <h2>Choose your plan size</h2>
          <p>Number of people</p>
          <div className="planSize">
            <button onClick={() => onPressPeopleButton(20)}>
              <BsPersonFill className="planSizeIcon" />
              <p>1-2</p>
            </button>
            <button onClick={() => onPressPeopleButton(30)}>
              <BsPeopleFill className="planSizeIcon" />
              <p>3-4</p>
            </button>
          </div>
          <p>Recipes per week</p>
          <div className="planFrequency">
            <button onClick={() => onPressKitButton(1)}>1</button>
            <button onClick={() => onPressKitButton(2)}>2</button>
            <button onClick={() => onPressKitButton(3)}>3</button>
            <button onClick={() => onPressKitButton(4)}>4</button>
          </div>
          <Link to={"/choose-plan/step2"}>
            <button type="submit" className="nextButton">
              NEXT
            </button>
          </Link>
        </div>
        <div className="priceSummaryContainer">
          <div className="priceSummary">
            <div className="priceSummaryText">
              <h4>Price Summary</h4>
              <p>
                {kitNum} kit for {peopleNum === 20 ? "1-2" : "3-4"} people per
                week
                <hr />
              </p>
            </div>
            <div className="priceSummaryInfo">
              <p>
                Box price <span>$ {price}</span>
              </p>
              <p>
                Shipping <span>$ {shipping}</span>
              </p>
            </div>
            <hr />
            <div className="priceTotal">
              <p>
                Total (est.) <span>$ {`${price + shipping}`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanStep1;
