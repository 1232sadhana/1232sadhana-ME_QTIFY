import hero from "../../assets/Hero.png";
import "./hero.css";
const HeroJsx = () => {
  return (
    <div>
      <div className="content">
        <img className="Hero" src={hero} alt="heroImage" />
      </div>
    </div>
  );
};

export default HeroJsx;