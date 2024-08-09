import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero container">
      {/* <img src="/hero.jpg" alt="hero" /> */}
      <div className="hero-text">
        <h1>we ensure better health for a better world</h1>
        <p>
          Our cutting0edge medical tehcnologies is designed to fascilitate
          doctors and staff with the knowledge and experience needed to excel in
          the dynamic field of medical sciences.
        </p>
        <button className="btn explore-btn">
          Explore more <img src="/right-arrow.svg" alt="arrow" width={25} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
