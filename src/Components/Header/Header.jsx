import React, { useState } from "react";
import img from "../../assets/logo-h.png";
import "./Header.css";
const Header = () => {
  const [togle, setTogl] = useState(0);
  let t = "head-nav";
  if (togle % 2 == 0) {
    t = "head-nav";
  } else {
    t = "head-view";
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="header-wrp">
            <a href="/">
              <img src={img} alt="" />
            </a>
            <nav className={t}>
              <ul>
                <li>
                  <a href="#intro">Asosiy</a>
                </li>
                <li>
                  <a href="#aboutus">Biz haqimizda</a>
                </li>
                <li>
                  <a href="#tour">Turlar</a>
                </li>
                <li>
                  <a href="#hotel">Mehmonxonalar</a>
                </li>
                <li>
                  <a href="#form-one">Aviachiptalar</a>
                </li>
                <li>
                  <a href="#form-one">Aloqa</a>
                </li>
              </ul>
            </nav>
            <select>
              <option selected value="uz">
                O`zbek
              </option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
            <div className="bars" onClick={(e) => setTogl(togle + 1)}>
              <i class="si-bars"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
