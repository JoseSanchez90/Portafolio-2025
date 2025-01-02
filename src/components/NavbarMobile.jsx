import { useState, useEffect } from "react";
import Logo from '../assets/logo.png'

function NavbarMobile() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

  return (

    <section className={`w-full flex flex-row justify-between md:hidden bg-slate-100 dark:bg-gray-950 fixed top-0 z-10 ${isScrolled ? "flex-row shadow-lg bg-white px-8 py-5" : "flex flex-row py-5 px-8"}`}>
        <button onClick={() => setIsOpen(!isOpen)} className={`flex items-center animate-flip-down animate-duration-300 ${isScrolled ? "animate-fade-right" : "animate-fade-left"}`}>
          <svg width="32px" height="32px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#2dd100"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#2dd100" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
        </button>
        <img src={Logo} alt={Logo} className="w-10" />
    </section>

  )
}

export default NavbarMobile