import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./SectionFormOne.css";
import { t } from "i18next";
const SectionFormOne = ({ t }) => {
  const [info1, SetInfo1] = useState();
  const [info2, SetInfo2] = useState();
  const [info3, SetInfo3] = useState();
  const [info4, SetInfo4] = useState(1);
  const [info5, SetInfo5] = useState("null");
  if (info4 < 1) {
    return SetInfo4(1);
  }
  async function renderOne() {
    let user = await fetch(
      "https://api.telegram.org/bot7910001783:AAF_NjiPTZOeS2oniyVmLDvSMMS05IZuhOU/sendMessage",
      {
        method: "POST",
        body: JSON.stringify({
          text: `
    #AviachiptalarBorish
    Qayerdan:${info1}
    Qayerga:${info2}
    Jo'nash sanasi:${info3}
    Yo'lovchilar:${info4}
    Qaytish sanasi:${info5}`,

          chat_id: "-1002628074810",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());
    return user;
  }
  async function mainB(user) {
    let k = await renderOne(user);
  }
  async function renderTwo() {
    let user = await fetch(
      "https://api.telegram.org/bot7910001783:AAF_NjiPTZOeS2oniyVmLDvSMMS05IZuhOU/sendMessage",
      {
        method: "POST",
        body: JSON.stringify({
          text: `
      #AviachiptalarQaytish
      Qayerdan:${info1}
      Qayerga:${info2}
      Jo'nash sanasi:${info3}
      Yo'lovchilar:${info4}
      Qaytish sanasi:${info5}`,

          chat_id: "-1002628074810",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());
    return user;
  }
  async function mainQ(user) {
    let k = await renderTwo(user);
  }
  return (
    <>
      <section id="form-one">
        <div className="container">
          <h3>{t("Aviachiptalar")}</h3>
          <TabView data-aos="fade-up">
            <TabPanel header={t("Borish")}>
              <div className="form-input">
                <div>
                  <label htmlFor="qayerdan">{t("Qayerdan")}</label>
                  <br></br>
                  <input
                    id="qayerdan"
                    value={info1}
                    type="text"
                    onChange={(e) => SetInfo1(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="qayerga">{t("Qayerga")}</label>
                  <br />
                  <input
                    id="qayerga"
                    value={info2}
                    type="text"
                    onChange={(e) => SetInfo2(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="idata">{t("Jo'nash sanasi")}</label>
                  <br />
                  <input
                    id="idata"
                    type="date"
                    value={info3}
                    onChange={(e) => SetInfo3(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="yolovchi">{t("Yo'lovchilar")}</label>
                  <br />
                  <input
                    id="yolovchi"
                    type="number"
                    value={info4}
                    onChange={(e) => SetInfo4(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={mainB}>{t("Qidirish")}</button>
            </TabPanel>
            <TabPanel header={t("Qaytish")}>
              <div className="form-input">
                <div>
                  <label htmlFor="qayerdan">{t("Qayerdan")}</label>
                  <br></br>
                  <input
                    id="qayerdan"
                    value={info1}
                    type="text"
                    onChange={(e) => SetInfo1(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="qayerga">{t("Qayerga")}</label>
                  <br />
                  <input
                    id="qayerga"
                    value={info2}
                    type="text"
                    onChange={(e) => SetInfo2(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="idata">{t("Jo'nash sanasi")}</label>
                  <br />
                  <input
                    id="idata"
                    type="date"
                    value={info3}
                    onChange={(e) => SetInfo3(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">{t("Qaytish sanasi")}</label>
                  <br />
                  <input
                    id="bdata"
                    type="date"
                    value={info5}
                    onChange={(e) => SetInfo5(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">{t("Yo'lovchilar")}</label>
                  <br />
                  <input
                    id="yolovchi"
                    type="number"
                    value={info4}
                    onChange={(e) => SetInfo4(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={mainQ}>{t("Qidirish")}</button>
            </TabPanel>
          </TabView>
        </div>
      </section>
    </>
  );
};

export default SectionFormOne;
