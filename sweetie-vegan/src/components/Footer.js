import './Footer.css'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Sweetie Vegan</h1>
                    <p>Less Stress Choosing What to Bake</p>
                </div>
                <div>
                    <a href="/">
                        <BsFacebook />
                    </a>
                    <a href="/">
                        <BsInstagram />
                    </a>
                    <a href="/">
                        <BsTwitter />
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Sweetie Vegan</h4>
                    <a href='/'>About Us</a>
                    <a href='/'>Recipes</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Frequently Asked Questions</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href='/'>Terms of Service</a>
                    <a href='/'>Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer