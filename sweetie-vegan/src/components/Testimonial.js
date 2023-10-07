import './Testimonial.css'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import defaultUserImage from '../imgs/default-user.jpg'


function Testimonial() {
    return (
        <div className="testimonial">
            <div className="testimonial-header">
                <p>Our Customer Reviews</p>
                <h1>Don't take our word for it. Trust our customers.</h1>
            </div>
            <div className="testimonial-grid">
                <div className="testimonial-card">
                    <span><ImQuotesLeft /></span>
                    <p>I have tried a lot of similar products and Sweetie Vegan is the best!</p>
                    <span><ImQuotesRight /></span>
                    <hr></hr>
                    <img src={defaultUserImage} alt='user' />
                    <p className='testimonial-name'>Floyd Miles</p>

                </div>
                <div className="testimonial-card">
                    <span><ImQuotesLeft /></span>
                    <p>I can't say enough about Sweetie Vegan. Sweetie Vegan has made a huge difference!</p>
                    <span><ImQuotesRight /></span>
                    <hr></hr>
                    <img src={defaultUserImage} alt='user' />
                    <p className='testimonial-name'>Campbell Aaron</p>

                </div>
                <div className="testimonial-card">
                    <span><ImQuotesLeft /></span>
                    <p>I highly recommend Sweetie Vegan. I don't need to spend as much time choosing what to bake now that I use Sweetie Vegan.</p>
                    <span><ImQuotesRight /></span>
                    <hr></hr>
                    <img src={defaultUserImage} alt='user' />
                    <p className='testimonial-name'>Sara Richards</p>
                </div>

            </div>
            <div className='testimonial-footer'>
                <h4>Save Your Time Now!</h4>
                {/* <p> */}

                {/* </p> */}
                {/* <button>View Plans</button> */}
                <a href='/choose-plan' className='show'>
            View Plans
          </a>
            </div>
        </div>
    )
}

export default Testimonial