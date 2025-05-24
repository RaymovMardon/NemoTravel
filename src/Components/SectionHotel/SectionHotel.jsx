import React from "react";
import "./SectionHotel.css";
import TourCard from "../SectionTour/tourCard";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jpg";
const SectionHotel = () => {
  const hotel = [
    {
      img: img8,
      ttitle: "Hyatt Regency Tashkent",
      p: "Navoi ko'chasi 1-uy, Toshkent Zamonaviy mehmonxona markaz markazida",
      btn: "Batafsil ma'lumot",
    },
    {
      img: img9,
      ttitle: "Hilton Tashkent City",
      p: "Islom Karimov ko'chasi 2-uy, Toshkent Biznes mehmonxona shahar markazida",
      btn: "Batafsil ma'lumot",
    },
    {
      img: img10,
      ttitle: "City Palace Hotel",
      p: "Amir Temur ko'chasi 15-uy, Toshkent Qulay mehmonxona diqqatga sazovor joylar yaqinida",
      btn: "Batafsil ma'lumot",
    },
  ];
  return (
    <>
      <section id="hotel">
        <div className="container">
          <div className="tour-title">
            <h2>Mehmonxonalar</h2>
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

export default SectionHotel;
