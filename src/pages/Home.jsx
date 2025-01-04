import Navbar from '../components/Navbar'
import Profile from '../assets/perfil.jpg'
import '../css/Home.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrapp.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import firebase from '../assets/firebase.png'
import whatsapp from '../assets/whatsapp.png'
import pdf from '../assets/pdf.png'
import telegram from '../assets/telegram.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import Footer from '../components/Footer'
import NavbarMobile from '../components/NavbarMobile'
import ProjectsCard from '../components/ProjectsCard'

function Home() {

  return (
    
    <section className="w-full h-screen bg-white dark:bg-gray-950" id="inicio">

      <Navbar />
      <NavbarMobile />

      {/* PERFIL  */}
      
      <div className="flex flex-col md:grid md:grid-cols-2 justify-items-center md:justify-items-end pt-20 md:pt-16 2xl:pt-24 md:px-60 px-8 py-14 gap-5 md:gap-0 items-center">
        <div className="flex flex-col gap-2 md:gap-4 text-center md:text-start animate-flip-up animate-duration-[2000ms] animate-delay-500">
            <h1 className="text-xl md:text-2xl font-extrabold text-emerald-600">JOSE SANCHEZ TRUJILLO</h1>
          <div className="animation">
            <h2 className="first text-lg md:text-xl font-bold text-white"><h2>Help Desk Analyst</h2></h2>
            <h2 className="second text-lg md:text-xl font-bold text-white"><h2>FrontEnd Developer</h2></h2>
            <h2 className="third text-lg md:text-xl font-bold text-white"><h2>Software Support</h2></h2>
          </div>
            <p className="text-sm md:text-base font-normal md:font-medium text-zinc-600 dark:text-zinc-400">Mi experiencia se basa en la práctica constante y la realización de proyectos utilizando tecnologías como HTML5, CSS3, JavaScript y ReactJS, librerías asi como Bootstrap y Tailwind. Creo experiencias de calidad y estoy siempre en la búsqueda de nuevos desafíos para aprender y crecer profesionalmente.</p>
        </div>
        <div className="animate-flip-down animate-duration-[2000ms] animate-delay-500">
          <img className=" rounded-3xl size-40 sm:size-64 lg:size-60 2xl:size-72 flex-shrink-0 object-cover shadow-[10px_10px_rgba(0,_98,_90,_0.8),_15px_15px_rgba(0,_98,_90,_0.6),_20px_20px_rgba(0,_98,_90,_0.4),_25px_25px_rgba(0,_98,_90,_0.2),_30px_30px_rgba(0,_98,_90,_0.1)]" src={Profile} alt="Foto de perfil" />
        </div>
        <div className="w-full flex flex-row justify-center md:justify-start pt-8 md:pt-6 2xl:pt-0 gap-4 md:gap-12 animate-fade animate-duration-[2000ms] animate-delay-500">
          <a href="https://api.whatsapp.com/send?phone=51960041583" target="_blank">
            <button type="submit" className="flex justify-center gap-2 items-center shadow-xl text-xs bg-gray-800 dark:bg-slate-200 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-600 text-gray-50 dark:text-gray-950 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative px-3 py-2 md:px-6 md:py-2 overflow-hidden rounded-full group">Conversemos
            <img src={whatsapp} alt="whatsapp" className="w-6" />
          </button>
          </a>

          <a href="https://drive.google.com/file/d/1Iq0jq22Cc68lSqAfrp5g7vvHXzpgbJ3N/view?usp=drive_link" target="_blank">
            <button type="submit" className="flex justify-center gap-2 items-center shadow-xl text-xs bg-gray-800 dark:bg-slate-200 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-600 text-gray-50 dark:text-gray-950 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative px-3 py-2 md:px-6 md:py-2 overflow-hidden rounded-full group">Descargar CV
            <img src={pdf} alt="pdf" className="w-6" />
          </button>
          </a>
        </div>
      </div>

      <div className="h-[5rem] flex flex-col items-center bg-white dark:bg-slate-950 2xl:pt-5" >
        <a href="#habilidades" className="animate-bounce bg-gray-700 dark:bg-white p-2 w-10 h-10 ring-1 shadow-lg rounded-full flex items-center justify-center" >
          <svg className="w-6 h-6 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>

      {/* LENGUAJES, LIBRERIAS Y FRAMEWORKS */}

      <div className="w-full h-full bg-white dark:bg-slate-950" id="habilidades">
        <div className="flex flex-col items-center gap-16 md:gap-20 md:py-44 2xl:py-60 py-64 px-10">
          <div className="flex justify-center">
            <h2 className="text-xl md:text-2xl font-semibold text-center md:font-bold text-gray-800 dark:text-white">Lenguajes, Librerias y Frameworks</h2>
          </div>
          <div className="images-shadow grid grid-cols-4 md:flex md:flex-row md:gap-14 gap-6 px-5">
            <div className="flex flex-col items-center gap-2">
              <a href="https://developer.mozilla.org/es/docs/Glossary/HTML5" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={html} alt={html} className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-xs md:text-sm font-medium text-black dark:text-white">Html</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={css} alt={css} className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-xs md:text-sm font-medium text-black dark:text-white">Css</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={js} alt={js} className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-xs md:text-sm font-medium text-black dark:text-white">JavaScript</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://tailwindcss.com/" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={tailwind} alt={tailwind} className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-xs md:text-sm font-medium text-black dark:text-white">Tailwind</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://getbootstrap.com/" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={bootstrap} alt={bootstrap} className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-xs md:text-sm font-medium text-black dark:text-white">BootStrap</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://react.dev/" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={react} alt={react} className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-xs md:text-sm font-medium text-black dark:text-white">ReactJS</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://github.com/" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={github} alt={github} className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-xs md:text-sm font-medium text-black dark:text-white">GitHub</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://firebase.google.com/" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={firebase} alt={firebase} className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-xs md:text-sm font-medium text-black dark:text-white">Firebase</p>
              </a>
            </div>        
          </div>
        </div>

      </div>

      {/* PROYECTOS  */}

      <div className="w-full h-screen bg-white dark:bg-slate-950" >
        <div className="flex flex-col justify-center gap-4 md:gap-10 md:py-10 py-20 md:px-20 px-1" id="proyectos">
          <div className="w-full flex justify-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white" >Proyectos Web</h2>
          </div>
          <ProjectsCard />
        </div>
      </div>

      {/* CONTACTO  */}

      <div className="w-full h-screen bg-white dark:bg-slate-950 py-20" id="contacto">
        <div className="flex flex-col items-center md:gap-20 gap-10 md:py-24 py-60 2xl:py-40">
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Contacto</h2>
          </div>
          <div className="images-shadow grid grid-cols-2 md:flex md:flex-row md:gap-14 gap-10">
            <div className="flex flex-col items-center gap-2">
              <a href="https://api.whatsapp.com/send?phone=51960041583" target="_blank" className="text-center flex flex-col items-center gap-2">
                <img src={whatsapp} alt="" className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-sm font-medium text-black dark:text-white">Whatsapp</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://t.me/josesanchezt" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={telegram} alt="" className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-sm font-medium text-black dark:text-white">Telegram</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="mailto:josesancheztrujillo7@gmail.com" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={gmail} alt="" className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-sm font-medium text-black dark:text-white">Gmail</p>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://www.linkedin.com/in/josesanchez90/" target="_autoblank" className="text-center flex flex-col items-center gap-2">
                <img src={linkedin} alt="" className="w-9 md:w-16 hover:scale-125 duration-100" />
                <p className="text-sm font-medium text-black dark:text-white">LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </section>

  )
}

export default Home