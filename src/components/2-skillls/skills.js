import Titel from "../home/titel";
import Html from "../../assets/myskills/html.png";
import Css from "../../assets/myskills/css.png";
import Js from "../../assets/myskills/js.png";
import BootstrapImg from "../../assets/myskills/bootstrap.png";
import Git from "../../assets/myskills/git.png";
import ReactImg from "../../assets/myskills/react.png";
 
import "./skills.css";

function Skills() {
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
    <div className="skills">
      <Titel name="my skills" />
      <p>These are the technologies I've worked with :-</p>
      <div className="my_skills">
        {myskills.map((item) => {
          return (
            <div className="skill" key={item.id}>
              <div className="skill_img">
                <img src={item.src} alt={item.name} />
              </div>
              <h4>{item.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
