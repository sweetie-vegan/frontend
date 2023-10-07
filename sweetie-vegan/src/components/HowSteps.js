import cookieSmall from "../imgs/cookie-small.jpg";
import cookieLarge from "../imgs/cookie-large1.jpg";
import c1 from "../imgs/1.jpg";
import c2 from "../imgs/2.jpg";
import bread from "../imgs/bread.jpg";
import macaroon from "../imgs/macaroon.jpg";
import w1 from "../imgs/write.jpg";
import w2 from "../imgs/write2.jpg";
import "./Description.css";
import DescriptionData from "./DescriptionData";

const HowSteps = () => {
  return (
    <div>
      <DescriptionData
      icons="false"
        heading="Step 1"
        className="first-des"
        p1="Select a plan that fits best for you."
        p2="Choose between small which is a best fit for 1-2 person or large which is 
          suitable for 3-4 person"
        //   p3="No waste! We send you exact amount of ingredients needed for each
        // recipe"
        img1={c1}
        img2={c2}
      />
      <DescriptionData
      icons="false"
        heading="Step 2"
        className="first-des-reverse"
        p1="Tell us about your preference."
        p2="Do you prefer sweet or savory?"
        //   p3="No waste! We send you exact amount of ingredients needed for each
        // recipe"
        img1={macaroon}
        img2={bread}
      />
      <DescriptionData
      icons="false"
        heading="Step 3"
        className="first-des"
        p1="Write your address and payment infomation."
        p2="Once your order is processed, you just have to wait until you receive your meal prep!"
        //   p3="No waste! We send you exact amount of ingredients needed for each
        // recipe"
        img1={w2}
        img2={w1}
      />
    </div>
  );
};

export default HowSteps;
