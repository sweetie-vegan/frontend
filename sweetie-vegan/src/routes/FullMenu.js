import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Popular from "../components/Popular";
import Recipes from "../components/Recipes";

function FullMenu() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={require("../imgs/our-menu.jpg")}
        title="Our Recipes"
        // text="Less Stress Choosing What to Bake"
        // btnText="View Plans"
        // url="/"
        btnClass="hide"
      />
      <Recipes />
      <Footer />
    </>
  )
}

export default FullMenu