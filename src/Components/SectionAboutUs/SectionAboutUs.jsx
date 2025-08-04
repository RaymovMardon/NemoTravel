import React from "react";
import Card from "./Card";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import "./SectionAboutUs.css";
import { useTranslation } from "react-i18next";
const SectionAboutUs = ({ selectLng }) => {
  const { t, i18n } = useTranslation();
  const info = [
    {
      title: t("Bizning vazifamiz"),
      p: t(
        "Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish"
      ),
    },
    {
      title: t("Bizning maqsadimiz"),
      p: t(
        "O'zbekistonda yetakchi sayohat kompaniyasiga aylanish va xalqaro miqyosida tan olingan brend bo'lish"
      ),
    },
  ];
  return (
    <>
      <section id="aboutus">
        <div className="container">
          <h1 data-aos="fade-up">{t("Biz haqimizda")}</h1>
          <p className="a-title">
            {t("Sizning ishonchli sayohat hamkoringiz")}
          </p>
          <div className="cards">
            {info.map((todo, index) => (
              <Card key={index} title={todo.title} p={todo.p} />
            ))}
          </div>
          <div className="a-info-wrp">
            <div className="info-left" data-aos="fade-left">
              <p>
                {t("Bizning turizm")}
                <br></br>
                <br></br>
                {t("Bizning tajribali")}S
              </p>
            </div>
            <div className="info-right" data-aos="fade-right">
              <div className="a-img-one">
                <img src={img1} alt="" />
              </div>
              <div className="a-img-two">
                <img src={img2} alt="" />
              </div>
              <div className="a-img-two">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionAboutUs;
