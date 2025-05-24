import React from "react";
import logof from "../../assets/logo-f.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-wrp" data-aos="fade-up">
            <div>
              <a href="#">
                <img src={logof} alt="logo-footer" />
              </a>
              <p>Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
            </div>
            <div>
              <h3>Bog'lanish</h3>
              <p>
                Tel: +998 95 150 00 00
                <br></br>
                info@nemoavia.uz
              </p>
            </div>
            <div>
              <h3>Ijtimoiy tarmoqlar</h3>
              <div className="social-wrp">
                <div className="social">
                <i class="bi bi-telegram"></i>
                </div>
                <div className="social"></div>
              </div>
            </div>
            <div>
              <h3>Manzil</h3>
              <p>Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
            </div>
          </div>
          <hr />
          <div className="footer-info">
            <p>2025 Nemo Avia Trip. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
