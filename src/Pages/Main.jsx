import React from "react";
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
const Main = () => {
  return (
    <>
      <Header />
      <SectonIntro />
      <SectionAboutUs />
      <SectionTeam />
      <SectionTour />
      <SectionHotel />
      <SectionFormOne />
      <SectionCity />
      <SectionMarque />
      <SectionFormTwo/>
      <Footer/>
    </>
  );
};

export default Main;
