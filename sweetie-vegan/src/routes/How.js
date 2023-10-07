import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowSteps from "../components/HowSteps";
import Navbar from "../components/Navbar";
import Carousel from 'react-bootstrap/Carousel';


function How() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={require("../imgs/how-it-works.jpg")}
        title="How It Works"
        // text="Less Stress Choosing What to Bake"
        // btnText="View Plans"
        // url="/"
        btnClass="hide"
      />
      <HowSteps />
      
      <Footer />
    </>
  );
}

export default How;
