import { Routes, Route, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaLaptopCode } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { LuSunMedium } from "react-icons/lu";
import { MdEmail, MdContactPhone } from "react-icons/md";
import About from "../1-about/About";
import Portfolio from "../3-portfolio/Portfolio";
import Contact from "../4-contact/Contact";
import MyImg from "../../assets/me.jpg";
import Mycv from "../../assets/MyCv.pdf";
import "./home.css";
import { useEffect, useState } from "react";

function Home() {
  const [AddClass, SetAddClass] = useState(true);
  const [Mymode, SetMymode] = useState(
    localStorage.getItem("currentmode") ?? "dark"
  );
  useEffect(() => {
    if (Mymode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  });
  return (
    <div className="home">
      <div className="container">
        {AddClass && (
          <div className="left">
            <div className="avatar">
              <div className="my_img">
                <img src={MyImg} alt={MyImg} />
              </div>
              <div className="my_name">
                <h3>zulkifli ahmed</h3>
                <h5>front end developer</h5>
              </div>
            </div>
            <div className="my_gap"></div>
            <div className="my-links">
              <a href="https://github.com/ZulkifliAhmed" target="_blank">
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/zulkifliahmed/"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/ZulkifliAhmedIsmael"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a href="mailto:zulkifli.adoma@gmail.com" target="_blank">
                <MdEmail />
              </a>
            </div>
          </div>
        )}

        <div className="right">
          <nav>
            <ul>
              <li>
                <NavLink
                  onClick={() => {
                    SetAddClass(true);
                  }}
                  to={"/"}
                >
                  <IoHome className="icon_nav" /> <span>about</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    SetAddClass(false);
                  }}
                  to={"/portfolio"}
                >
                 
                  <FaLaptopCode className="icon_nav" /> <span>portfolio</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    SetAddClass(true);
                  }}
                  to={"/contact"}
                >
                  <MdContactPhone className="icon_nav" /> <span>contact</span>{" "}
                </NavLink>
              </li>
              <li>
                <a href={Mycv} target="_blank">
                  <PiReadCvLogoLight className="icon_nav" /> <span>my cv</span>
                </a>
              </li>
            </ul>
            <div
              className="my-mode"
              onClick={() => {
                localStorage.setItem(
                  "currentmode",
                  Mymode === "dark" ? "light" : "dark"
                );
                SetMymode(localStorage.getItem("currentmode"));
              }}
            >
              {Mymode === "dark" ? (
                <GoMoon className="moon" />
              ) : (
                <LuSunMedium className="sun" />
              )}
            </div>
          </nav>
          <div>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
