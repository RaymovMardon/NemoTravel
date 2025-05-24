import Main from "./Pages/Main";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "./aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации в миллисекундах
      once: true, // Анимация запускается один раз
    });
  }, []);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
