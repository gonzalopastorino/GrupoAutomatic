import { useEffect, useState } from "react";
import logo from "../../assets/images/LogoGrupoAutomatic.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  // Detecta scroll para achicar navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-50
        bg-white/60 backdrop-blur-md
        border-b border-white/20 shadow-md
        transition-all duration-300
        ${scrolled ? "py-1" : "py-3"}
      `}
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div
          className={`
            flex items-center justify-between
            transition-all duration-300
            ${scrolled ? "h-16 md:h-20" : "h-24 md:h-28"}
          `}
        >

          {/* LOGO */}
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img
              src={logo}
              alt="Grupo Automatic"
              className={`
                w-auto transition-all duration-300
                ${scrolled ? "h-10 md:h-14 lg:h-16" : "h-14 md:h-20 lg:h-24"}
              `}
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8">

            <li>
              <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/quienes-somos" className="text-gray-700 font-medium hover:text-blue-600 transition">
                Quiénes Somos
              </Link>
            </li>

            {/* DROPDOWN DESKTOP */}
            <li className="group relative">
              <Link to="/servicios" className="text-gray-700 font-medium hover:text-blue-600 transition">
                Nuestros Servicios
              </Link>

              <ul className="
                invisible absolute left-0 top-full mt-2 w-72
                bg-white rounded-lg p-2 shadow-lg
                opacity-0 transition-all duration-200
                group-hover:visible group-hover:opacity-100
              ">
                <li><a className="block px-4 py-2 hover:bg-gray-100 rounded" href="/servicios#outsourcing">Outsourcing IT</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-100 rounded" href="/servicios#mesa-ayuda">Mesa de Ayuda</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-100 rounded" href="/servicios#servicios-administrados">Servicios Administrados</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-100 rounded" href="/servicios#desarrollo-software">Desarrollo de Software</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-100 rounded" href="/servicios#inteligencia-artificial">Inteligencia Artificial</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-100 rounded" href="/servicios#automatizacion-de-procesos">Automatización de Procesos</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-100 rounded" href="/servicios#consultoria-tecnologica">Consultoría Tecnológica</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-100 rounded" href="/servicios#seguridad-informatica">Seguridad Informática</a></li>
              </ul>
            </li>

            <li>
              <Link to="/blog" className="text-gray-700 font-medium hover:text-blue-600 transition">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contacto" className="text-gray-700 font-medium hover:text-blue-600 transition">
                Contáctenos
              </Link>
            </li>

            <li>
              <Link to="/contacto" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Solicitar Cotización
              </Link>
            </li>

          </ul>

          {/* HAMBURGER */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden overflow-hidden
            transition-all duration-300 ease-in-out
            ${menuOpen
              ? "max-h-screen opacity-100 py-4 border-t border-white/20"
              : "max-h-0 opacity-0"
            }
          `}
        >
          <ul className="space-y-2 px-2">

            <li>
              <Link onClick={closeMenu} to="/" className="block px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">
                Inicio
              </Link>
            </li>

            <li>
              <Link onClick={closeMenu} to="/quienes-somos" className="block px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">
                Quiénes Somos
              </Link>
            </li>

            {/* SERVICES MOBILE */}
            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition font-medium"
              >
                Nuestros Servicios
              </button>

              {servicesOpen && (
                <ul className="mt-2 ml-4 space-y-2">

                  <li><a onClick={closeMenu} href="/servicios#outsourcing" className="block px-2 py-2 hover:bg-gray-100 rounded">Outsourcing IT</a></li>
                  <li><a onClick={closeMenu} href="/servicios#mesa-ayuda" className="block px-2 py-2 hover:bg-gray-100 rounded">Mesa de Ayuda</a></li>
                  <li><a onClick={closeMenu} href="/servicios#servicios-administrados" className="block px-2 py-2 hover:bg-gray-100 rounded">Servicios Administrados</a></li>
                  <li><a onClick={closeMenu} href="/servicios#desarrollo-software" className="block px-2 py-2 hover:bg-gray-100 rounded">Desarrollo de Software</a></li>
                  <li><a onClick={closeMenu} href="/servicios#inteligencia-artificial" className="block px-2 py-2 hover:bg-gray-100 rounded">Inteligencia Artificial</a></li>
                  <li><a onClick={closeMenu} href="/servicios#automatizacion-de-procesos" className="block px-2 py-2 hover:bg-gray-100 rounded">Automatización de Procesos</a></li>
                  <li><a onClick={closeMenu} href="/servicios#consultoria-tecnologica" className="block px-2 py-2 hover:bg-gray-100 rounded">Consultoría Tecnológica</a></li>
                  <li><a onClick={closeMenu} href="/servicios#seguridad-informatica" className="block px-2 py-2 hover:bg-gray-100 rounded">Seguridad Informática</a></li>

                </ul>
              )}
            </li>

            <li>
              <a onClick={closeMenu} href="/blog" className="block px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">
                Blog
              </a>
            </li>

            <li>
              <a onClick={closeMenu} href="/contacto" className="block px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">
                Contáctenos
              </a>
            </li>

            <li>
              <a onClick={closeMenu} href="/contacto" className="block text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition">
                Solicitar Cotización
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;