import good1 from "../imgs/good1.jpg";
import good2 from "../imgs/good2.jpg";
import "./Description.css";
import DescriptionData from "./DescriptionData";
import {SiFastly} from 'react-icons/si'
import {GrMoney} from 'react-icons/gr'
import {RiDeleteBin5Line} from 'react-icons/ri'

const Description = () => {
  return (
    <DescriptionData
    icons="true"
    className="first-des"
      heading="Good For You and Our Planet"
      p1="Time saver! No need to go to the grocery store anymore"
      p2="Great value for money! We send you the best quality ingredients"
      p3="No waste! We send you exact amount of ingredients needed for each
    recipe"
      img1={good1}
      img2={good2}
    />
  );
};

export default Description;
