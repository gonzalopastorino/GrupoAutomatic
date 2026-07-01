import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Quote from "../pages/Quote";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quienes-somos" element={<About />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/solicitar-cotizacion" element={<Quote />} />
    </Routes>
  );
}

export default AppRouter;