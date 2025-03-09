import Titel from "../home/titel";
import ContactIcon from "../../assets/animation/contact.json";
import Lottie from "lottie-react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Titel name="let's talk" />
       <div className="box">
        <div className="contact_us">
          <p>contact me for more information</p>
          <form>
            <input type="email" placeholder="enter you email" />
            <textarea placeholder="enter you messig" ></textarea>
            <button>send</button>
          </form>
        </div>
        <div className="animation">
        <Lottie className="ContactIcon" animationData={ContactIcon} />
        </div>
       </div>
    </div>
  );
};

export default Contact;
