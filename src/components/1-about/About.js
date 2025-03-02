import Titel from "../home/titel";
import Lottie from "lottie-react";
import Html from "../../assets/myskills/html.png";
import Css from "../../assets/myskills/css.png";
import Js from "../../assets/myskills/js.png";
import BootstrapImg from "../../assets/myskills/bootstrap.png";
import Git from "../../assets/myskills/git.png";
import ReactImg from "../../assets/myskills/react.png";
import Developer from "../../assets/animation/developer.json";
import { IoIosDesktop } from "react-icons/io";
import "./about.css";
const About = () => {
  const myskills = [
    {
      id: 1,
      src: Html,
      name: "html",
    },
    {
      id: 2,
      src: Css,
      name: "css",
    },
    {
      id: 3,
      src: Js,
      name: "javaScript",
    },
    {
      id: 4,
      src: BootstrapImg,
      name: "bootstrab",
    },
    {
      id: 5,
      src: ReactImg,
      name: "react js",
    },
    {
      id: 6,
      src: Git,
      name: "git",
    },
  ];
  return (
    <div className="about">
      <div className="about_left">
        <div className="text">
          <Titel name="about me" />
          <p>
            I'm a Front End Developer specializing in web development and
            copywriting. My role is to build websites that are not only
            functional and user-friendly but also visually appealing. I add a
            personal touch to your product, ensuring it’s eye-catching and easy
            to navigate. My goal is to convey your message and identity in the
            most creative and innovative way.
          </p>
        </div>
        <>
          <h6>
          <IoIosDesktop className="desktop_icon" />the technologies I've worked with :-</h6>
          <div className="skills">
            {myskills.map((item) => {
              return (
                <div className="skill" key={item.id}>
                  <div className="img_skill">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </>
      </div>

      <div className="about_right">
        <Lottie animationData={Developer} />
      </div>
    </div>
  );
};

export default About;
