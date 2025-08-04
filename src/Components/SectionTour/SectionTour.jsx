import React from "react";
import TourCard from "./tourCard";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jfif";
import img6 from "./img/img6.jfif";
import img7 from "./img/img7.jfif";
import "./SectionTour.css";
const SectionTour = ({t}) => {
  const tour = [
    {
      img: img4,
      ttitle: t("O'zbekiston bo'ylab sayohat"),
      p: t("O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar"),
      btn: t("Batafsil"),
    },
    {
      img: img5,
      ttitle: t("Turkiya bo'ylab sayohat"),
      p: t("Istanbul, Antalya, Kappadokiya - eng mashhur joylar"),
      btn: t("Batafsil"),
    },
    {
      img: img6,
      ttitle: t("Dubai"),
      p: t("Zamonaviy arxitektura va hashamatli savdo markazlari"),
      btn: t("Batafsil"),
    },
    {
      img: img7,
      ttitle: t("Yevropa bo'ylab sayohat"),
      p: t("Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar"),
      btn: t("Batafsil"),
    },
  ];
  return (
    <>
      <section id="tour">
        <div className="container">
          <div className="tour-title">
            <h2 data-aos="fade-up">{t("Turlar")}</h2>
            <p>{t("Eng yaxshi sayohat turlari")}</p>
          </div>
          <div className="tour-cards">
            {tour.map((todo, index) => (
              <TourCard
                key={index}
                img={todo.img}
                ttitle={todo.ttitle}
                p={todo.p}
                btn={todo.btn}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTour;
