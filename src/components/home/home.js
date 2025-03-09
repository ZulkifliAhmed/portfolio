import { Routes, Route, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoMoon } from "react-icons/go";
import { LuSunMedium } from "react-icons/lu";
import About from "../1-about/About";
import Portfolio from "../3-portfolio/Portfolio";
import Contact from "../4-contact/Contact";
import MyImg from "../../assets/me.jpg";
import "./home.css";
import { useState } from "react";


function Home() {
  const [AddClass , SetAddClass] = useState(true);
   
  return (
    <div className="home">
      <div className="container">
       {AddClass &&(
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
            <a href="/">
              <FaGithub />
            </a>

            <a href="/">
              <FaLinkedin />
            </a>

            <a href="/">
              <FaFacebook />
            </a>
            <a href="/">
              <MdEmail />
            </a>
          </div>
        </div>
       )}

        <div className="right">
          <nav>
            <ul>
              <li>
                <Link  onClick={()=>{
                  SetAddClass(true)
                }}  to={"/about"}>about</Link>
              </li>
              <li>
                <Link onClick={()=>{
                  SetAddClass(false)
                }} to={"/portfolio"}>portfolio</Link>
              </li>
              <li>
                <Link  onClick={()=>{
                  SetAddClass(true)
                }}  to={"/contact"}>contact</Link>
              </li>
              <li>
                <a href="/" target="_blank">
                  cv
                </a>
              </li>
            </ul>
            <div className="my-mode">
               <LuSunMedium />
               <GoMoon />
            </div>
          </nav>
          <div>
            <Routes>
              <Route path="*" element={<About />} />
              <Route path="/about" element={<About />} />
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
