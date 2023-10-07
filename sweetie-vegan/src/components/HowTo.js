import "./HowTo.css"
import HowToData from "./HowToData"
import s1 from "../imgs/s1.jpg"
import s2 from "../imgs/s2.jpg"
import s3 from "../imgs/s3.jpg"

function HowTo() {
    return (
        <div className="how-to">
            <h1>How It Works</h1>
            <div className="how-to-card">
                <HowToData
                img={s1}
                heading = "Step 1"
                text = "Select your plan"
                />
                <HowToData
                img={s2}
                heading = "Step 2"
                text = "Wait for it to arrive"
                />
                <HowToData
                img={s3}
                heading = "Step 3"
                text = "Enjoy baking!"
                />
            </div>
        </div>
    )
}

export default HowTo