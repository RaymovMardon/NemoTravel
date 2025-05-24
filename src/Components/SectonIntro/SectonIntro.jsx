import { React, useEffect } from "react";
import "./SectonIntro.css";


const SectonIntro = () => {
 
  return (
    <>
      <section id="intro">
        <div className="container">
          <div className="intro-wrp">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              
            >
              <h1>Sayohatingizni biz bilan boshlang</h1>
              <h5>Nemo Travel - huzur uchun yo'l</h5>
            </div>
            <div className="intro-info-wrp">
              <div className="intro-info">
                <div className="intro-img">
                  <i class="si-user"></i>
                </div>
                <div className="intro-text">
                  <p>Mamnun mijozlar</p>
                  <p>45000+</p>
                </div>
              </div>
              <div className="intro-info">
                <div className="intro-img">
                  <i class="si-location"></i>
                </div>
                <div className="intro-text">
                  <p>Mamlakatlar</p>
                  <p>30+</p>
                </div>
              </div>
              <div className="intro-info">
                <div className="intro-img">
                  <i class="si-clock"></i>
                </div>
                <div className="intro-text">
                  <p>Tajriba</p>
                  <p>5+ yil</p>
                </div>
              </div>
              <a className="btnn" href="#form-one">
                Batafsil ma'lumot
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectonIntro;
