import React from "react";
import Marquee from "react-fast-marquee";
import img14 from "./img/img14.jfif";
import img15 from "./img/img15.jpg";
import img16 from "./img/img16.jpg";
import img17 from "./img/img17.jpg";
import img18 from "./img/img18.jfif";
import "./SectionMarque.css";
const SectionMarque = () => {
  return (
    <>
    <section id="marquee">
      <h2>Hamkorlarimiz</h2>
      <Marquee>
        
          <div className="marquee-wrp">
            <div className="marq-div">
              <div className="mar-img">
                <img src={img14} alt="" />
              </div>
              <div>
                <p>Centrum Air</p>
              </div>
            </div>
            <div className="marq-div">
              <div className="mar-img">
                <img src={img15} alt="" />
              </div>
              <div>
                <p>Turkish Airlines</p>
              </div>
            </div>
            <div className="marq-div">
              <div className="mar-img">
                <img src={img16} alt="" />
              </div>
              <div>
                <p>Emirates</p>
              </div>
            </div>
            <div className="marq-div">
              <div className="mar-img">
                <img src={img17} alt="" />
              </div>
              <div>
                <p>Qatar Airways</p>
              </div>
            </div>
            <div className="marq-div">
              <div className="mar-img">
                <img src={img18} alt="" />
              </div>
              <div>
                <p>Uzairways</p>
              </div>
            </div>
          </div>
        
      </Marquee>
      </section>
    </>
  );
};

export default SectionMarque;
