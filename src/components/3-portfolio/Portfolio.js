import Titel from "../home/titel";
import Projects from "./projects";
import "./portfolio.css";
import { useState } from "react";
import { AnimatePresence , motion } from "motion/react";


const Portfolio = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [myFilter, setmyFilter] = useState(Projects);
  const handleclick = (el) => {
    setcurrentActive(el);
    let newArr = Projects.filter((item) => {
      return item.category === el;
    });
    setmyFilter(newArr);
  };
  return (
    <div className="portfolio">
      <Titel name="recntale worck" />
      <p>check out some of my worck right here</p>
      <div className="box">
        <div>
          <ul>
            <li
              onClick={() => {
                setcurrentActive("all");
                setmyFilter(Projects);
              }}
              className={currentActive === "all" ? "active" : null}
            >
              All Projects
            </li>
            <li
              onClick={() => {
                handleclick("HTML & CSS");
              }}
              className={currentActive === "HTML & CSS" ? "active" : null}
            >
              HTML & CSS
            </li>
            <li
              onClick={() => {
                handleclick("JavaScript");
              }}
              className={currentActive === "JavaScript" ? "active" : null}
            >
              JavaScript
            </li>
            <li
              onClick={() => {
                handleclick("bootstrap");
              }}
              className={currentActive === "bootstrap" ? "active" : null}
            >
              Bootsrap
            </li>
            <li
              onClick={() => {
                handleclick("React");
              }}
              className={currentActive === "React" ? "active" : null}
            >
              React
            </li>
          </ul>
        </div>
        <div className="projects">
          <AnimatePresence>
            {myFilter.map((item) => {
              return (
                <motion.div
                  layout
                  initial={{ transform: "scale(.5)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{ type: "spring", damping :10, stiffness :100}}
                    exit={{ transform: "scale(0)" }}
                  className="project"
                  key={item.image}
                >
                  <div className="pr_imeg">
                    <img src={item.path} alt={item.image} />
                  </div>
                  <h4>{item.titel}</h4>
                  <p>{item.description}</p>
                  <div className="pr_links">
                    <div className="demo">
                      <a href={item.demo}>demo</a>
                    </div>
                    <div className="github">
                      <a href={item.github}>github</a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
