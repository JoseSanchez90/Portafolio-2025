import { useState, useEffect, useRef } from "react";
import Logo from '../assets/logo.png'

function NavbarMobile() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, 
      []);

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        // Añadir el listener al montar el componente
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        
        // Limpiar el listener al desmontar el componente
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          document.removeEventListener("touchstart", handleClickOutside);
        };
      }, []);

  return (

    <section className={`w-full flex flex-row justify-between md:hidden bg-slate-100 dark:bg-gray-950 fixed top-0 z-10 ${isScrolled ? "flex-row shadow-lg bg-white px-8 py-4" : "flex flex-row py-4 px-8"}`}>
        <button onClick={() => setIsOpen(!isOpen)} className={`flex items-center animate-flip-down animate-duration-300 ${isScrolled ? "animate-fade-right" : "animate-fade-left"}`}>
          <svg width="32px" height="32px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#2dd100"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#2dd100" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
        </button>
        <img src={Logo} alt={Logo} className="w-10" />
        {isOpen && (
        <div ref={menuRef} className={`absolute z-50 grid grid-cols-1 items-start text-white font-bold mt-10 py-2 px-2 gap-4 bg-green-600 shadow-lg shadow-slate-800 animate-flip-down animate-duration-300 ${isScrolled ? 'grid grid-cols-1 py-2 px-2 justify-start gap-1' : 'text-start'}`}>
          <div className="flex flex-col gap-1">
            <a href="#inicio" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full">Inicio</a>
            <a href="#habilidades" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full">Habilidades</a>
            <a href="#proyectos" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full">Proyectos</a>
            <a href="#contacto" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full">Contacto</a>
          </div>
          </div>
        )}
    </section>

  )
}

export default NavbarMobile