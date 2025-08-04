import { React, useEffect } from "react";
import "./SectonIntro.css";
import { useTranslation } from "react-i18next";
const SectonIntro = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="intro">
        <div className="container">
          <div className="intro-wrp">
            <div data-aos="fade-up" data-aos-duration="2000">
              <h1>{t("Sayohatingizni biz bilan boshlang")}</h1>
              <h5>{t("Nemo Travel - huzur uchun yo'l")}</h5>
            </div>
            <div className="intro-info-wrp">
              <div className="intro-info">
                <div className="intro-img">
                  <i className="si-user"></i>
                </div>
                <div className="intro-text">
                  <p>{t("Mamnun mijozlar")}</p>
                  <p>45000+</p>
                </div>
              </div>
              <div className="intro-info">
                <div className="intro-img">
                  <i className="si-location"></i>
                </div>
                <div className="intro-text">
                  <p>{t("Mamlakatlar")}</p>
                  <p>30+</p>
                </div>
              </div>
              <div className="intro-info">
                <div className="intro-img">
                  <i className="si-clock"></i>
                </div>
                <div className="intro-text">
                  <p>{t("Tajriba")}</p>
                  <p>5+ {t("yil")}</p>
                </div>
              </div>
              <a className="btnn" href="#form-one">
                {t("Batafsilm")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectonIntro;
