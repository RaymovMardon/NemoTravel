import React from "react";
import Card from "./Card";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import "./SectionAboutUs.css";
const SectionAboutUs = () => {
  const info = [
    {
      title: "Bizning vazifamiz",
      p: "Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish",
    },
    {
      title: "Bizning maqsadimiz",
      p: "O'zbekistonda yetakchi sayohat kompaniyasiga aylanish va xalqaro miqyosida tan olingan brend bo'lish",
    },
  ];
  return (
    <>
      <section id="aboutus">
        <div className="container">
          <h1>Biz haqimizda</h1>
          <p className="a-title">Sizning ishonchli sayohat hamkoringiz</p>
          <div className="cards">
            {info.map((todo, index) => (
              <Card key={index} title={todo.title} p={todo.p} />
            ))}
          </div>
          <div className="a-info-wrp">
            <div className="info-left" data-aos="fade-right">
              <p>
                Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va
                qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga
                yetkazib, unutilmas xotiralar yaratishga yordam beramiz.
                Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik
                aviakompaniyalar bilan hamkorlik qiladi.<br></br>
                <br></br>Bizning tajribali jamoamiz har bir detallni hisobga
                olib, rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan
                dunyoning istalgan joyiga qulay va ishonchli sayohat qiling!
                Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy
                sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda),
                Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni
                sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda,
                Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam
                olish BAAda, Turlar Bali oroliga va dam olish Bali orolida,
                Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga
                va dam olish Indoneziyada.
              </p>
            </div>
            <div className="info-right" data-aos="fade-left">
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
