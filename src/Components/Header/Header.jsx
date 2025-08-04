import React, { useState } from "react";
import img from "../../assets/logo-h.png";
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

const Header = ({ selectLng, i18Language }) => {
  const { t, i18n } = useTranslation();

  const [togle, setTogl] = useState(0);
  let o = "head-nav";
  if (togle % 2 == 0) {
    o = "head-nav";
  } else {
    o = "head-view";
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="header-wrp">
            <a href="/">
              <img src={img} alt="" />
            </a>
            <nav className={o}>
              <ul>
                <li>
                  <a href="#intro">{t("Asosiy")}</a>
                </li>
                <li>
                  <a href="#aboutus">{t("Biz haqimizda")}</a>
                </li>
                <li>
                  <a href="#tour">{t("Turlar")}</a>
                </li>
                <li>
                  <a href="#hotel">{t("Mehmonxonalar")}</a>
                </li>
                <li>
                  <a href="#form-one">{t("Aviachiptalar")}</a>
                </li>
                <li>
                  <a href="#form-one">{t("Aloqa")}</a>
                </li>
              </ul>
            </nav>
            <div>
              <i className="si-globe"></i>
              <select defaultValue={i18Language} onChange={selectLng}>
                <option value="uz">O`zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="bars" onClick={(e) => setTogl(togle + 1)}>
              <i className="si-bars"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
