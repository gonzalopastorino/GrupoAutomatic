import "../css/prefooter.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Grupo */}
        <div className="footer-column">
          <h3>Grupo Automatic</h3>
          <p>Soluciones tecnológicas para impulsar tu empresa</p>
        </div>

        {/* Enlaces */}
        <div className="footer-column">
          <h3>Enlaces Rápidos</h3>

          <ul className="footer-links">
            <li className="cursor-pointer"><a href="#" className="!text-[#1C3680] hover:!text-[#13284D]">Inicio</a></li>
            <li className="cursor-pointer"><a href="#" className="!text-[#444] hover:!text-[#1C3680]">Quiénes Somos</a></li>
            <li className="cursor-pointer"><a href="#" className="!text-[#444] hover:!text-[#1C3680]">Servicios</a></li>
            <li className="cursor-pointer"><a href="#" className="!text-[#444] hover:!text-[#1C3680]">Blog</a></li>
            <li className="cursor-pointer"><a href="#" className="!text-[#444] hover:!text-[#1C3680]">Contáctanos</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-column">
          <h3>Contacto</h3>

          <div className="contact-item">
            <span>📍</span>
            <span>Medellín, Colombia</span>
          </div>

          <div className="contact-item">
            <span>✉️</span>
            <span>hola@grupoautomatic.com</span>
          </div>

          <div className="contact-item">
            <span>📱</span>
            <span>+57 311 629 88 67</span>
          </div>
        </div>

        {/* Redes */}
        <div className="footer-column">
          <h3>Redes Sociales</h3>

          <div className="social-buttons">
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 Grupo Automatic. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}