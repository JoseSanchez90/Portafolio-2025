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

      const [theme, setTheme] = useState(() => {
        if(window.matchMedia("(prefers-color-scheme: light)").matches){
            return "light";
        }
        return "dark";
      })
      
        // Modo dia y noche
    
      const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
      }
    
          useEffect(()=> {
            if (theme === "dark") {
                document.querySelector('html').classList.add('dark')
            } else {
                document.querySelector('html').classList.remove('dark')
            }
        }, [theme])

  return (

    <section className={`w-full flex flex-row justify-between items-center md:hidden bg-slate-100 dark:bg-gray-950 fixed top-0 z-10 ${isScrolled ? "flex-row shadow-lg bg-white px-8 py-4" : "flex flex-row py-4 px-8"}`}>
        <button onClick={() => setIsOpen(!isOpen)} className={`flex flex-col items-center animate-flip-down animate-duration-300 ${isScrolled ? "animate-fade-right" : "animate-fade-left"}`}>
          <svg width="42px" height="42px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z" fill="#1C274C" className="dark:fill-slate-200"></path> </g></svg>
        </button>
        <img src={Logo} alt={Logo} className="w-12" />
        <label className="ui-switch">
          <input type="checkbox" />
          <div className="slider" onClick={handleChangeTheme}>
            <div className="circle"></div>
          </div>
        </label>
        {isOpen && (
        <div ref={menuRef} className={`absolute z-50 top-5 grid grid-cols-1 items-start text-white font-bold mt-10 py-2 px-2 gap-4 bg-indigo-800 shadow-lg shadow-slate-800 animate-flip-down animate-duration-300 ${isScrolled ? 'grid grid-cols-1 py-2 px-2 justify-start gap-1' : 'text-start'}`}>
          <div className="flex flex-col gap-1">
            <a href="#inicio" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full" onClick={() => setIsOpen(false)}>Inicio</a>
            <a href="#habilidades" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full" onClick={() => setIsOpen(false)}>Habilidades</a>
            <a href="#proyectos" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full" onClick={() => setIsOpen(false)}>Proyectos</a>
            <a href="#contacto" className="dropdown-item text-sm hover:bg-green-800 py-1 p-2 w-full" onClick={() => setIsOpen(false)}>Contacto</a>
          </div>
          </div>
        )}
    </section>

  )
}

export default NavbarMobile