import Description from "../components/Description";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowTo from "../components/HowTo";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={require("../imgs/home.jpg")}
        title="You Choose We Deliver"
        text="Less Stress Choosing What to Bake"
        btnText="View Plans"
        url="/choose-plan"
        btnClass="show"
      />
      <Description />
      <HowTo />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
