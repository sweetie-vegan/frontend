import "./HowTo.css"

function HowToData(props) {
    return (
        <div className="how-card">
            <div className="how-image">
                <img alt="how to img" src={props.img} />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default HowToData