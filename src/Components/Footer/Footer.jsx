import React from "react";
import logof from "../../assets/logo-f.png";
import "./Footer.css";
const Footer = ({ t }) => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-wrp" data-aos="fade-up">
            <div>
              <a href="#">
                <img src={logof} alt="logo-footer" />
              </a>
              <p>{t("Toshkent shahri, Muqimiy ko'chasi 44-A uy")}</p>
            </div>
            <div>
              <h3>{t("Bog'lanish")}</h3>
              <p>
                {t("Tel: +998 95 150 00 00")}
                <br></br>
                info@nemoavia.uz
              </p>
            </div>
            <div>
              <h3>{t("Ijtimoiy tarmoqlar")}</h3>
              <div className="social-wrp">
                <div className="social">
                  <i className="bi bi-telegram"></i>
                </div>
                <div className="social"></div>
              </div>
            </div>
            <div>
              <h3>{t("Manzil")}</h3>
              <p>{t("Toshkent shahri, Muqimiy ko'chasi 44-A uy")}</p>
            </div>
          </div>
          <hr />
          <div className="footer-info">
            <p>{t("copy")}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
