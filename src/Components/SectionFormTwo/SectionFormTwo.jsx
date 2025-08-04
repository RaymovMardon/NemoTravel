import React from "react";
import { useState } from "react";
import "./SectionFormTwo.css";
const SectionFormTwo = ({ t }) => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("+998");
  const [subject, SetSubject] = useState("");
  const [massag, SetMsg] = useState("");

  async function render() {
    let user = await fetch(
      "https://api.telegram.org/bot7910001783:AAF_NjiPTZOeS2oniyVmLDvSMMS05IZuhOU/sendMessage",
      {
        method: "POST",
        body: JSON.stringify({
          text: `
    #BatafsilMalumot
    Ism:${name}
    Email manzili:${email}
    Telefon raqam:${phone}
    Mavzu:${subject}
    Xabar:${massag}`,

          chat_id: "-1002628074810",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());
    return user;
  }
  async function main(user) {
    let k = await render(user);
  }
  return (
    <>
      <section id="form-two">
        <div className="container">
          <h2 data-aos="fade-up">{t("Biz bilan bog'lanish")}</h2>
          <p className="ftitl">
            {t("Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz")}
          </p>
          <div className="form-two-wrp">
            <div data-aos="fade-left" className="form-two-left">
              <div className="form-input-two">
                <div>
                  <label htmlFor="name">Your Name</label>
                  <br></br>
                  <input
                    id="name"
                    value={name}
                    type="text"
                    onChange={(e) => SetName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email">Your Email</label>
                  <br />
                  <input
                    id="email"
                    value={email}
                    type="email"
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Your Phone Number</label>
                  <br />
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => SetPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="Subject">Subject</label>
                  <br />
                  <input
                    id="Subject"
                    type="text"
                    value={subject}
                    onChange={(e) => SetSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="Msg">Your Message</label>
                  <br />
                  <textarea
                    rows={3}
                    id="Msg"
                    type="text"
                    value={massag}
                    onChange={(e) => SetMsg(e.target.value)}
                  />
                </div>
                <div>
                  <button onClick={main}>Submit</button>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="form-two-right">
              <div>
                <h3>{t("Aloqa ma'lumotlari")}</h3>
                <p>{t("Manzil: Toshkent shahri, Muqimiy ko'chasi 44-A uy")}</p>
                <p>{t("Tel: +998 95 150 00 00")}</p>
                <p>Email: info@nemoavia.uz</p>
                <p>{t("Ish vaqti: Du-Sha 24 soat")}</p>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1499.1434642399147!2d69.24196832926229!3d41.28085940826037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af53670b503%3A0x55bd39ec32493f1d!2sArt%20Plaza!5e0!3m2!1sru!2s!4v1747593968343!5m2!1sru!2s"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFormTwo;
