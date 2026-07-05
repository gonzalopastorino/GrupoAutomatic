import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold">
          GrupoAutomatic
        </div>

        <ul className="hidden md:flex gap-10 text-sm">
          <li className="text-[#1C3680] cursor-pointer">Inicio</li>
          <li className="cursor-pointer hover:text-[#1C3680]">Quiénes Somos</li>
          <li className="cursor-pointer hover:text-[#1C3680]">Servicios</li>
          <li className="cursor-pointer hover:text-[#1C3680]">Contacto</li>
          <li className="cursor-pointer hover:text-[#1C3680]">Blog</li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden md:block btn-primary !py-2 !px-5 !text-sm">
            Contáctanos!
          </button>

          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-100 border-t border-black/10 px-6 py-6 space-y-4">
          <p className="text-[#1C3680] cursor-pointer">Inicio</p>
          <p className="cursor-pointer hover:text-[#1C3680]">Quiénes Somos</p>
          <p className="cursor-pointer hover:text-[#1C3680]">Servicios</p>
          <p className="cursor-pointer hover:text-[#1C3680]">Contacto</p>
          <button className="w-full btn-primary !py-2 !px-5 !text-sm">
            Contáctanos!
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;