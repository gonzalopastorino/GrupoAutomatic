import ChatBot from "./components/chatbot/ChatBot";
import Header from "./components/header/Header";
import Galeria from "./section/Galeria";
import Beneficios from "./section/Beneficios";
import Testimonios from "./section/Testimonios";
import Blog from "./section/Blog";
import CallToAction from "./section/CallToAction";
import Navbar from "./section/Navbar";
import Footer from "./section/Footer";

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Header />
      <Galeria />
      <Beneficios />
      <Testimonios />
      <Blog />
      <CallToAction />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;