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
          I am Zulkifli Ahmed, a Frontend Developer specializing in React.js, with experience in building high-performance web applications. I also have backend knowledge, allowing me to integrate systems efficiently. I’m passionate about creating seamless and innovative user experiences using the latest technologies.          </p>
        </div>
        <>
          <h6>
          <IoIosDesktop className="desktop_icon" />the technologies I've worked with </h6>
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
