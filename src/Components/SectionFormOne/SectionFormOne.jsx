import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./SectionFormOne.css";
const SectionFormOne = () => {
  const [info1, SetInfo1] = useState();
  const [info2, SetInfo2] = useState();
  const [info3, SetInfo3] = useState();
  const [info4, SetInfo4] = useState();
  const [info5, SetInfo5] = useState("null");
  async function renderOne(){
    let user= await fetch("https://api.telegram.org/bot7910001783:AAF_NjiPTZOeS2oniyVmLDvSMMS05IZuhOU/sendMessage",{method:"POST"
  ,body: JSON.stringify({
    text: `
    #AviachiptalarBorish
    Qayerdan:${info1}
    Qayerga:${info2}
    Jo'nash sanasi:${info3}
    Yo'lovchilar:${info4}
    Qaytish sanasi:${info5}`,
  
    chat_id:'-1002628074810',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  }).then(response=> response.json())
     return user;
  }
  async function mainB(user){
    let k = await renderOne(user);}
    async function renderTwo(){
      let user= await fetch("https://api.telegram.org/bot7910001783:AAF_NjiPTZOeS2oniyVmLDvSMMS05IZuhOU/sendMessage",{method:"POST"
    ,body: JSON.stringify({
      text: `
      #AviachiptalarQaytish
      Qayerdan:${info1}
      Qayerga:${info2}
      Jo'nash sanasi:${info3}
      Yo'lovchilar:${info4}
      Qaytish sanasi:${info5}`,
    
      chat_id:'-1002628074810',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    }).then(response=> response.json())
       return user;
    }
    async function mainQ(user){
      let k = await renderTwo(user);}   
  return (
    <>
      <section id="form-one">
        <div className="container">
          <h1>Aviachiptalar</h1>
          <TabView>
            <TabPanel header="Borish">
              <div className="form-input">
                <div>
                  <label htmlFor="qayerdan">Qayerdan</label>
                  <br></br>
                  <input
                    id="qayerdan"
                    value={info1}
                    type="text"
                    onChange={(e) => SetInfo1(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="qayerga">Qayerga</label>
                  <br />
                  <input
                    id="qayerga"
                    value={info2}
                    type="text"
                    onChange={(e) => SetInfo2(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="idata">Jo'nash sanasi</label>
                  <br />
                  <input
                    id="idata"
                    type="date"
                    value={info3}
                    onChange={(e) => SetInfo3(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="yolovchi">Yo'lovchilar</label>
                  <br />
                  <input
                    id="yolovchi"
                    type="number"
                    value={info4}
                    onChange={(e) => SetInfo4(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={mainB}>Qidirish</button>
            </TabPanel>
            <TabPanel header="Qaytish">
              <div className="form-input">
                <div>
                  <label htmlFor="qayerdan">Qayerdan</label>
                  <br></br>
                  <input
                    id="qayerdan"
                    value={info1}
                    type="text"
                    onChange={(e) => SetInfo1(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="qayerga">Qayerga</label>
                  <br />
                  <input
                    id="qayerga"
                    value={info2}
                    type="text"
                    onChange={(e) => SetInfo2(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="idata">Jo'nash sanasi</label>
                  <br />
                  <input
                    id="idata"
                    type="date"
                    value={info3}
                    onChange={(e) => SetInfo3(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">Qaytish sanasi</label>
                  <br />
                  <input
                    id="bdata"
                    type="date"
                    value={info5}
                    onChange={(e) => SetInfo5(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">Yo'lovchilar</label>
                  <br />
                  <input
                    id="yolovchi"
                    type="number"
                    value={info4}
                    onChange={(e) => SetInfo4(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={mainQ}>Qidirish</button>
            </TabPanel>
          </TabView>
        </div>
      </section>
    </>
  );
};

export default SectionFormOne;
