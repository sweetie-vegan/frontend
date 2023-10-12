import React from "react";
import { Link } from "react-router-dom";
import "./PlanStep4.css";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaPaypal,
} from "react-icons/fa6";
import {GrAmex} from "react-icons/gr"
import {BiLogoMastercard, BiLogoVisa} from "react-icons/bi"
import visaImg from '../imgs/visa.svg'
import mcImg from '../imgs/mc.svg'
import amexImg from '../imgs/amex.svg'
import paypalImg from '../imgs/paypal.svg'

const PlanStep4 = () => {
  const price = 20
  const shipping = 9.99
  return (
    <div className="planPage flex">
      <div className="planContainer flex">
        <div className="planSelectDiv">
          <p>STEP 4/4</p>
          <h2>Payment Details</h2>
          <div className="paymentDiv">
            <div>
              <p>Name on card</p>
              <textarea required className="paymentboxfull" />
            </div>
            <div>
              <p>Card number</p>
              <textarea required className="paymentboxfull" />
            </div>
            <div className="paymentDivHalf">
              <div>
                <p>Expiration Date</p>
                <textarea required className="paymentbox" />
              </div>
              <div>
                <p>CVC</p>
                <textarea required className="paymentbox" />
              </div>
            </div>
            <Link to={"/choose-plan/step2"}>
              <button className="prevButtonFin">PREV</button>
            </Link>
            <Link to={"/choose-plan/step4"}>
              <button className="submitButton">SUBMIT</button>
            </Link>
          </div>
        </div>
        <div className="paymentSummaryContainer">
          <div className="cardImgs">
            <img src={visaImg} alt="visa" className="cardIcons" />
            <img src={mcImg} alt="master card" className="cardIcons" />
            <img src={amexImg} alt="amex" className="cardIcons" />
            <img src={paypalImg} alt="paypal" className="cardIcons" />
          </div>
          <div className="priceFinal">
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
                Total (est.) <span>$ {`${(price + shipping).toFixed(2)}`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanStep4;
