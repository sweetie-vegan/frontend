import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Plan() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={require("../imgs/choose-plan.jpg")}
        title="Choose Your Plan"
        // text="Less Stress Choosing What to Bake"
        // btnText="View Plans"
        // url="/"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Plan;
