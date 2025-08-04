import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header/Header";
import SectonIntro from "../Components/SectonIntro/SectonIntro";
import SectionAboutUs from "../Components/SectionAboutUs/SectionAboutUs";
import SectionTeam from "../Components/SectionTeam/SectionTeam";
import SectionTour from "../Components/SectionTour/SectionTour";
import SectionHotel from "../Components/SectionHotel/SectionHotel";
import SectionFormOne from "../Components/SectionFormOne/SectionFormOne";
import SectionCity from "../Components/SectionCity/SectionCity";
import SectionMarque from "../Components/SectionMarque/SectionMarque";
import SectionFormTwo from "../Components/SectionFormTwo/SectionFormTwo";
import Footer from "../Components/Footer/Footer";
import i18n from "../../i18n";
const Main = () => {
  const { t, i18n } = useTranslation();
  const lngI = localStorage.getItem("lngI18");
  useEffect(() => {
    if (lngI != null) {
      i18n.changeLanguage(lngI);
    }
  }, [lngI]);

  const heandleChange = (event) => {
    const selectdLang = event.target.value;
    i18n.changeLanguage(selectdLang);
    localStorage.setItem("lngI18", selectdLang);
  };
  return (
    <>
      <Header selectLng={heandleChange} i18Language={lngI} />
      <SectonIntro selectLng={heandleChange} />
      <SectionAboutUs selectLng={heandleChange} />
      <SectionTeam selectLng={heandleChange} t={t} />
      <SectionTour selectLng={heandleChange} t={t} />
      <SectionHotel selectLng={heandleChange} t={t} />
      <SectionFormOne selectLng={heandleChange} t={t} />
      <SectionCity selectLng={heandleChange} t={t} />
      <SectionMarque selectLng={heandleChange} t={t} />
      <SectionFormTwo selectLng={heandleChange} t={t} />
      <Footer selectLng={heandleChange} t={t} />
    </>
  );
};

export default Main;
