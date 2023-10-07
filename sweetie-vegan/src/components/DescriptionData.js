import { Component } from "react";
import "./Description.css";
import { SiFastly } from "react-icons/si";
import { GrMoney } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";

class DescriptionData extends Component {
  render() {
    return (
      <div className="description">
        <h1>{this.props.heading}</h1>
        {/* <p></p> */}

        <div className={this.props.className}>
          <div className="des-text">
            <p><SiFastly className={this.props.icons === "true" ? "icons" : "no-icons"} />{this.props.p1}</p>
            <p><GrMoney className={this.props.icons === "true" ? "icons" : "no-icons"} />{this.props.p2}</p>
            <p><RiDeleteBin5Line className={this.props.icons === "true" ? "icons" : "no-icons"} />{this.props.p3}</p>
          </div>

          <div className="image">
            <img alt="img" src={this.props.img1} />
            <img alt="img" src={this.props.img2} />
          </div>
        </div>
      </div>
    );
  }
}

export default DescriptionData;
