import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={require("../imgs/contact.jpg")}
        title="Contact Us"
        // text="Less Stress Choosing What to Bake"
        // btnText="View Plans"
        // url="/"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
