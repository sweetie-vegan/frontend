import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowSteps from "../components/HowSteps";
import Navbar from "../components/Navbar";
import Carousel from 'react-bootstrap/Carousel';
import RegisterForm from "../components/RegisterForm";


function Register() {
  return (
    <>
      <Navbar />
      < RegisterForm />
      <Footer />
    </>
  );
}

export default Register;
