import Navbar from "../components/Navbar"
import Profile from "../assets/perfil.jpg"
import "../css/Home.css"

function Home() {

  return (
    
    <section className="w-full h-screen bg-slate-100 dark:bg-gray-950">

      <Navbar />
      
      <div className="grid grid-cols-2 justify-items-center px-40 py-14 items-center">
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-emerald-600">JOSE SANCHEZ TRUJILLO</h1>
          <div className="animation">
            <h2 className="first text-xl font-bold text-white"><h2>DEVELOPER WEB</h2></h2>
            <h2 className="second text-xl font-bold text-white"><h2>FRONTEND JUNIOR</h2></h2>
            <h2 className="third text-xl font-bold text-white"><h2>SOFTWARE SUPPORT</h2></h2>
          </div>
            <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">Mi experiencia se basa en la práctica constante y la realización de proyectos web utilizando tecnologías como HTML5, CSS3, JavaScript y ReactJS, así como librerías de diseño como Bootstrap y Tailwind CSS. Soy apasionado por crear experiencias digitales de alta calidad y me caracterizo por mi proactividad en la búsqueda de nuevos desafíos que me permitan seguir aprendiendo y creciendo profesionalmente.</p>
        </div>
        <div>
          <img className=" rounded-3xl size-40 sm:size-64 lg:size-60 xl:size-72 2xl:size-96 flex-shrink-0 object-cover shadow-[10px_10px_rgba(0,_98,_90,_0.8),_15px_15px_rgba(0,_98,_90,_0.6),_20px_20px_rgba(0,_98,_90,_0.4),_25px_25px_rgba(0,_98,_90,_0.2),_30px_30px_rgba(0,_98,_90,_0.1)]" src={Profile} alt="Foto de perfil" />
        </div>
        <div className="w-full flex flex-row pt-8 gap-12">
          <button type="submit" className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-900 dark:bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-600 text-gray-50 dark:text-gray-950 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">Conversemos
            <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-slate-100 dark:border-gray-950 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg"><path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-slate-100 dark:fill-gray-950 group-hover:fill-gray-800"></path>
            </svg>
          </button>

          <button type="submit" className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-900 dark:bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-600 text-gray-50 dark:text-gray-950 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">Descargar CV
            <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-slate-100 dark:border-gray-950 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg"><path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-slate-100 dark:fill-gray-950 group-hover:fill-gray-800"></path>
            </svg>
          </button>
        </div>
      </div>

    </section>

  )
}

export default Home