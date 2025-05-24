import React from "react";
import TourCard from "./tourCard";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jfif";
import img6 from "./img/img6.jfif";
import img7 from "./img/img7.jfif";
import "./SectionTour.css";
const SectionTour = () => {
  const tour = [
    {
      img: img4,
      ttitle: "O'zbekiston bo'ylab sayohat",
      p: "O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar",
      btn: "Batafsil",
    },
    {
      img: img5,
      ttitle: "Turkiya bo'ylab sayohat",
      p: "Istanbul, Antalya, Kappadokiya - eng mashhur joylar",
      btn: "Batafsil",
    },
    {
      img: img6,
      ttitle: "Dubai",
      p: "Zamonaviy arxitektura va hashamatli savdo markazlari",
      btn: "Batafsil",
    },
    {
      img: img7,
      ttitle: "Yevropa bo'ylab sayohat",
      p: "Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar",
      btn: "Batafsil",
    },
  ];
  return (
    <>
      <section id="tour">
        <div className="container">
          <div className="tour-title">
            <h2>Turlar</h2>
            <p>Eng yaxshi sayohat turlari</p>
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
