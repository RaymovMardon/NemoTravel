import React from 'react'
import './SectionCity.css'
import TourCard from '../SectionTour/tourCard';
import img11 from './img/img11.jfif'
import img12 from './img/img12.avif'
import img13 from './img/img13.avif'
import img14 from './img/img14.avif'

const SectionCity = () => {
     const hotel = [
        {
          img: img11,
          ttitle: "Dubai",
          p: "Zamonaviy arxitektura va hashamatli savdo markazlari",
          btn: "Batafsil ma'lumot",
        },
        {
          img: img12,
          ttitle: "Saudiya Arabistoni",
          p: "Umra ziyorati uchun maxsus paketlar",
          btn: "Batafsil ma'lumot",
        },
        {
          img: img13,
          ttitle: "Istanbul",
          p: "Tarixiy obidalar va zamonaviy madaniyat",
          btn: "Batafsil ma'lumot",
        },
        {
            img: img14,
            ttitle: "Antalya",
            p: "Dam olish va sohil bo'yi kurortlari",
            btn: "Batafsil ma'lumot",
          },
      ];
  return (
    <>
     <section id="hotel">
            <div className="container">
              <div className="tour-title">
                <h2>Mashhur shaharlar</h2>
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
  )
}

export default SectionCity