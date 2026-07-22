import Header from "../components/header/Header";
import Galeria from "../components/sections/Galeria";
import Beneficios from "../components/sections/Beneficios";
import Testimonios from "../components/sections/Testimonios";
import CallToAction from "../components/sections/CallToAction";

function Home() {
  return (
    <>
      <Header />
      <Galeria />
      <Beneficios />
      <Testimonios />
      <CallToAction />
    </>
  );
}

export default Home;