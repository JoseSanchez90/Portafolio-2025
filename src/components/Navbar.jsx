import { useEffect } from 'react'
import Logo from '../assets/logo.png'
import '../css/Navbar.css'
import { useState } from 'react';

function Navbar() {

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

    <header className="w-full bg-white dark:bg-gray-950">
        <nav className="w-full hidden md:flex md:flex-row justify-between items-center px-40 py-5">
            <img src={Logo} alt={Logo} className="w-16" />
            <div className="flex items-center gap-12 text-base font-semibold">
                <li className="flex flex-row items-center gap-2 list-none hover:scale-110 duration-150 dark:text-white text-gray-950">
                  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#000000" className="dark:fill-white"></path> </g></svg>
                  <a className="hover:text-green-500" href="#inicio">Inicio</a>
                </li>
                <li className="flex flex-row items-center gap-2 list-none hover:scale-110 duration-150 dark:text-white text-gray-950">
                  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0.792725 12.2929L5.08562 8.00002L0.792725 3.70712L2.20694 2.29291L7.91405 8.00002L2.20694 13.7071L0.792725 12.2929Z" fill="#000000" className="dark:fill-white"></path> <path d="M7.00006 15H15.0001V13H7.00006V15Z" fill="#000000" className="dark:fill-white"></path> </g></svg>
                  <a className="hover:text-green-500 " href="#habilidades">Habilidades</a>
                </li>
                <li className="flex flex-row items-center gap-2 list-none hover:scale-110 duration-150 dark:text-white text-gray-950">
                  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16 2H0V7H16V2ZM4 4.5C4 5.05228 3.55228 5.5 3 5.5C2.44772 5.5 2 5.05228 2 4.5C2 3.94772 2.44772 3.5 3 3.5C3.55228 3.5 4 3.94772 4 4.5Z" fill="#000000" className="dark:fill-white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M16 9H0V14H16V9ZM3 12.5C3.55228 12.5 4 12.0523 4 11.5C4 10.9477 3.55228 10.5 3 10.5C2.44772 10.5 2 10.9477 2 11.5C2 12.0523 2.44772 12.5 3 12.5Z" fill="#000000" className="dark:fill-white"></path> </g></svg>
                  <a className="hover:text-green-500 " href="#proyectos">Proyectos</a>
                </li>
                <li className="flex flex-row items-center gap-2 list-none hover:scale-110 duration-150 dark:text-white text-gray-950">
                  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 5.3585V14H16V5.35849L8 10.3585L0 5.3585Z" fill="#000000" className="dark:fill-white"></path> <path d="M16 3V2H0V3L8 8L16 3Z" fill="#000000" className="dark:fill-white"></path> </g></svg>
                  <a className="hover:text-green-500 " href="#contacto">Contacto</a>
                </li>

                <label className="ui-switch">
                  <input type="checkbox" />
                  <div className="slider" onClick={handleChangeTheme}>
                    <div className="circle"></div>
                  </div>
                </label>

            </div>
        </nav>
    </header>

  )
}

export default Navbar