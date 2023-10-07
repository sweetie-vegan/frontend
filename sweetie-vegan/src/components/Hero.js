import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Hero Imgs" src={props.heroImg} style={{ width: "100%" }} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
