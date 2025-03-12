import Titel from "../home/titel";
import project1 from "../../assets/projects/app-1.jpg";
import "./portfolio.css";
import { useState } from "react";

const Portfolio = () => {
  const [currentActive , setcurrentActive] = useState("all")
  return (
    <div className="portfolio">
      <Titel name="recntale worck" />
      <p>check out some of my worck right here</p>
      <div className="box">
        <div>
          <ul>
            <li onClick={()=>{
              setcurrentActive("all")
            }} className={currentActive === "all" ? "active" : null}>All Projects</li>
            <li onClick={()=>{
              setcurrentActive("HTML & CSS")
            }} className={currentActive === "HTML & CSS" ? "active" : null}>HTML & CSS</li>
            <li onClick={()=>{
              setcurrentActive("JavaScript")
            }} className={currentActive === "JavaScript" ? "active" : null}>JavaScript</li>
            <li onClick={()=>{
              setcurrentActive("Bootsrap")
            }} className={currentActive === "Bootsrap" ? "active" : null}>Bootsrap</li>
            <li onClick={()=>{
              setcurrentActive("React")
            }} className={currentActive === "React" ? "active" : null}>React</li>
          </ul>
        </div>
        <div className="projects">
          <div className="project">
            <div className="pr_imeg">
              <img src={project1} alt={project1}/>
            </div>
            <h4>product also</h4>
            <p>
              user-friendly but also visually appealing. I add a personal touch
              to your product, ensuring it’s eye-catching and
            </p>
            <div className="pr_links">
              <div className="demo"><a href="/">demo</a></div>
              <div className="github"><a href="/">github</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
