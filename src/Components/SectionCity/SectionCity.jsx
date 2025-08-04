import React from "react";
import "./SectionCity.css";
import TourCard from "../SectionTour/tourCard";
import img11 from "./img/img11.jfif";
import img12 from "./img/img12.avif";
import img13 from "./img/img13.avif";
import img14 from "./img/img14.avif";

const SectionCity = ({ t }) => {
  const hotel = [
    {
      img: img11,
      ttitle: t("Dubai"),
      p: t("Zamonaviy arxitektura va hashamatli savdo markazlari"),
      btn: t("Batafsilm"),
    },
    {
      img: img12,
      ttitle: t("Saudiya Arabistoni"),
      p: t("Umra ziyorati uchun maxsus paketlar"),
      btn: t("Batafsilm"),
    },
    {
      img: img13,
      ttitle: t("Istanbul"),
      p: t("Tarixiy obidalar va zamonaviy madaniyat"),
      btn: t("Batafsilm"),
    },
    {
      img: img14,
      ttitle: t("Antalya"),
      p: t("Dam olish va sohil bo'yi kurortlari"),
      btn: t("Batafsilm"),
    },
  ];
  return (
    <>
      <section id="hotel">
        <div className="container">
          <div className="tour-title">
            <h2>{t("Mashhur shaharlar")}</h2>
          </div>
          <div className="tour-cards">
            {hotel.map((todo, index) => (
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

export default SectionCity;
