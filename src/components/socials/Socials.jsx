import "./Socials.css";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Socials = () => {
  return (
    <div id="socials-title">
      <div className="dashes">
        <h5>signup with</h5>
      </div>
      <div className="socials-icons">
        <ul className="social-ul">
            <li><FiLinkedin/></li>
            <li><FiTwitter/></li>
            <li><FiFacebook/></li>
            <li><FiInstagram/></li>
        </ul>
      </div>
      <p>Already have an account? <span>Sign in</span> </p>
    </div>
  );
};

export default Socials;
