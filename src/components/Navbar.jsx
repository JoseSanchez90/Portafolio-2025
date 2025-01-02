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
      useEffect(()=> {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    
  return (

    <header className="w-full bg-slate-100 dark:bg-gray-950">
        <nav className="w-full flex flex-row justify-between items-center px-40 py-5">
            <img src={Logo} alt={Logo} className="w-10" />
            <div className="flex items-center gap-12 text-base font-semibold">
                <li className="list-none hover:scale-110 duration-150 dark:text-white text-gray-950"><a className="hover:text-green-500 " href="#">Inicio</a></li>
                <li className="list-none hover:scale-110 duration-150 dark:text-white text-gray-950"><a className="hover:text-green-500 " href="#">Habilidades</a></li>
                <li className="list-none hover:scale-110 duration-150 dark:text-white text-gray-950"><a className="hover:text-green-500 " href="#">Proyectos</a></li>
                <li className="list-none hover:scale-110 duration-150 dark:text-white text-gray-950"><a className="hover:text-green-500 " href="#">Contacto</a></li>

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