import Titel from "../home/titel";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <Titel name="recntale worck" />
      <p>check out some of my worck right here</p>
      <div className="box">
        <div>
          <ul>
            <li>All Projects</li>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Bootsrap</li>
            <li>React</li>
          </ul>
        </div>
        <div className="projects">
          <div className="project">
            <div className="pr_imeg"></div>
            <h4>titel</h4>
            <p>
              user-friendly but also visually appealing. I add a personal touch
              to your product, ensuring it’s eye-catching and
            </p>
            <div className="pr_links">
              <div className="demo">demo</div>
              <div className="github">github</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
