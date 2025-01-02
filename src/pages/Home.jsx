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
import kazali from '../assets/kazali-store.png'
import furniro from '../assets/furniro.png'
import intellipos from '../assets/intellipos.png'
import coffe from '../assets/coffe.png'
import web from '../assets/web.png'
import nextjs from '../assets/nextjs.png'
import whatsapp from '../assets/whatsapp.png'
import pdf from '../assets/pdf.png'
import telegram from '../assets/telegram.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import Footer from '../components/Footer'

function Home() {

  return (
    
    <section className="w-full h-screen bg-slate-100 dark:bg-gray-950">

      <Navbar />

      {/* PERFIL  */}
      
      <div className="grid grid-cols-2 justify-items-center px-40 py-14 items-center" id="inicio">
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-emerald-600">JOSE SANCHEZ TRUJILLO</h1>
          <div className="animation">
            <h2 className="first text-xl font-bold text-white"><h2>Help Desk Analyst</h2></h2>
            <h2 className="second text-xl font-bold text-white"><h2>FrontEnd Developer</h2></h2>
            <h2 className="third text-xl font-bold text-white"><h2>Software Support</h2></h2>
          </div>
            <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">Mi experiencia se basa en la práctica constante y la realización de proyectos web utilizando tecnologías como HTML5, CSS3, JavaScript y ReactJS, así como librerías de diseño como Bootstrap y Tailwind CSS. Soy apasionado por crear experiencias digitales de alta calidad y me caracterizo por mi proactividad en la búsqueda de nuevos desafíos que me permitan seguir aprendiendo y creciendo profesionalmente.</p>
        </div>
        <div>
          <img className=" rounded-3xl size-40 sm:size-64 lg:size-60 xl:size-72 2xl:size-96 flex-shrink-0 object-cover shadow-[10px_10px_rgba(0,_98,_90,_0.8),_15px_15px_rgba(0,_98,_90,_0.6),_20px_20px_rgba(0,_98,_90,_0.4),_25px_25px_rgba(0,_98,_90,_0.2),_30px_30px_rgba(0,_98,_90,_0.1)]" src={Profile} alt="Foto de perfil" />
        </div>
        <div className="w-full flex flex-row pt-8 gap-12">
          <button type="submit" className="flex justify-center gap-2 items-center shadow-xl text-base bg-gray-800 dark:bg-slate-200 backdrop-blur-md isolation-auto border-gray-800 dark:border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-600 text-gray-50 dark:text-gray-950 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-2 overflow-hidden border-2 rounded-full group">Conversemos
            <img src={whatsapp} alt="whatsapp" className="w-6" />
          </button>

          <button type="submit" className="flex justify-center gap-2 items-center shadow-xl text-base bg-gray-800 dark:bg-slate-200 backdrop-blur-md isolation-auto border-gray-800 dark:border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-600 text-gray-50 dark:text-gray-950 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-2 overflow-hidden border-2 rounded-full group">Descargar CV
            <img src={pdf} alt="pdf" className="w-5" />
          </button>
        </div>
      </div>

      <div className="h-[5rem] flex flex-col items-center bg-slate-100 dark:bg-slate-950" >
        <a href="#habilidades" className="animate-bounce bg-gray-700 dark:bg-white p-2 w-10 h-10 ring-1 shadow-lg rounded-full flex items-center justify-center" >
          <svg className="w-6 h-6 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </div>

      {/* LENGUAJES, LIBRERIAS Y FRAMEWORKS */}

      <div className="w-full h-screen bg-slate-100 dark:bg-slate-950" id="habilidades">
        <div className="flex flex-col items-center gap-20 py-44">
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Lenguajes, Librerias y Frameworks</h2>
          </div>
          <div className="images-shadow flex flex-row gap-14">
            <div className="flex flex-col items-center gap-2">
              <img src={html} alt={html} className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">Html</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={css} alt={css} className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">Css</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={js} alt={js} className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">JavaScript</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={tailwind} alt={tailwind} className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">Tailwind</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={bootstrap} alt={bootstrap} className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">BootStrap</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={react} alt={react} className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">ReactJS</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={github} alt={github} className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">GitHub</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={firebase} alt={firebase} className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">Firebase</p>
            </div>        
          </div>
        </div>

      </div>

      {/* PROYECTOS  */}

      <div className="w-full h-screen bg-slate-100 dark:bg-slate-950" id="proyectos">
        <div className="flex flex-col justify-center gap-10 py-10 px-20">
          <div className="w-full flex justify-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Proyectos Web</h2>
          </div>
          <div className="grid grid-cols-2 px-60 gap-5">
            <div>
              <div className="group relative block w-92 h-52">
                <div className="relative flex h-full w-full transform items-center border-2 border-black bg-slate-200 transition-transform group-hover:scale-105 overflow-hidden rounded-xl">
                  <div className="inset-0 flex flex-col transition-opacity group-hover:absolute group-hover:opacity-0 gap-4">
                    <img src={kazali} alt="kazali-store" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute flex flex-col gap-3 opacity-0 transition-opacity group-hover:opacity-100 p-4">
                    <h2 className="text-lg font-bold">Web Hardware Gamer</h2>
                    <p className="text-sm">Comercio de hardware para PC y otros componentes, pensado en el publico Gamer.</p>
                    <div className="flex flex-row gap-2">
                      <img src={html} alt="html" className="w-8" />
                      <img src={css} alt="css" className="w-8" />
                      <img src={tailwind} alt="tailwind" className="w-8" />
                      <img src={js} alt="javascript" className="w-8" />
                      <img src={react} alt="react" className="w-8" />
                      <img src={firebase} alt="firebase" className="w-8" />
                    </div>
                    <div className="flex flex-row gap-5">
                      <div className="max-w-32 bg-white items-center justify-center flex border-2 border-green-600 shadow-lg hover:bg-green-600 text-green-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg">
                        <button className="flex flex-row justify-center items-center px-8 py-1 gap-2">
                          <a className="" href="https://github.com/JoseSanchez90/ProyectoFinal-Curso-Frontend" target="_autoblank">Codigo</a>
                          <img src={github} alt="GitHub" className="w-6" />
                        </button>
                      </div>
                      <div className="max-w-32 bg-white items-center justify-center flex border-2 border-green-600 shadow-lg hover:bg-green-600 text-green-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg">
                        <button className="flex flex-row justify-center items-center px-8 py-1 gap-2">
                          <a className="" href="https://kazali-store-blue.vercel.app/" target="_autoblank">Web</a>
                          <img src={web} alt="Web" className="w-5" />
                        </button>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="group relative block w-92 h-52">
                <div className="relative flex h-full w-full transform items-center border-2 border-black bg-slate-200 transition-transform group-hover:scale-105 overflow-hidden rounded-xl">
                  <div className="inset-0 flex flex-col transition-opacity group-hover:absolute group-hover:opacity-0 gap-4">
                    <img src={furniro} alt="furniro-web" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute flex flex-col gap-3 opacity-0 transition-opacity group-hover:opacity-100 p-4">
                    <h2 className="text-lg font-bold">Web Muebles</h2>
                    <p className="text-sm">Comercio para venta de muebles, decoracion interiores entre otros.</p>
                    <div className="flex flex-row gap-2">
                      <img src={html} alt="html" className="w-8" />
                      <img src={css} alt="css" className="w-8" />
                      <img src={tailwind} alt="tailwind" className="w-8" />
                      <img src={js} alt="javascript" className="w-8" />
                      <img src={react} alt="react" className="w-8" />
                    </div>
                    <div className="flex flex-row gap-5">
                      <div className="max-w-32 bg-white items-center justify-center flex border-2 border-green-600 shadow-lg hover:bg-green-600 text-green-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg">
                        <button className="flex flex-row justify-center items-center px-8 py-1 gap-2">
                          <a className="" href="https://github.com/JoseSanchez90/Ecommerce-Furniro" target="_autoblank">Codigo</a>
                          <img src={github} alt="GitHub" className="w-6" />
                        </button>
                      </div>
                      <div className="max-w-32 bg-white items-center justify-center flex border-2 border-green-600 shadow-lg hover:bg-green-600 text-green-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg">
                        <button className="flex flex-row justify-center items-center px-8 py-1 gap-2">
                          <a className="" href="https://furniro-ashy.vercel.app/" target="_autoblank">Web</a>
                          <img src={web} alt="Web" className="w-5" />
                        </button>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="group relative block w-92 h-52">
                <div className="relative flex h-full w-full transform items-center border-2 border-black bg-slate-200 transition-transform group-hover:scale-105 overflow-hidden rounded-xl">
                  <div className="inset-0 flex flex-col transition-opacity group-hover:absolute group-hover:opacity-0 gap-4">
                    <img src={intellipos} alt="intellipos-web" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute flex flex-col gap-3 opacity-0 transition-opacity group-hover:opacity-100 p-4">
                    <h2 className="text-lg font-bold">Web para Empresa</h2>
                    <p className="text-sm">Web realizada para la empresa IntelliPOS dedicado al Sistema de ventas.</p>
                    <div className="flex flex-row gap-2">
                      <img src={html} alt="html" className="w-8" />
                      <img src={css} alt="css" className="w-8" />
                      <img src={tailwind} alt="tailwind" className="w-8" />
                      <img src={js} alt="javascript" className="w-8" />
                      <img src={react} alt="react" className="w-8" />
                    </div>
                    <div className="flex flex-row gap-5">
                      <div className="max-w-32 bg-white items-center justify-center flex border-2 border-green-600 shadow-lg hover:bg-green-600 text-green-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg">
                        <button className="flex flex-row justify-center items-center px-8 py-1 gap-2">
                          <a className="" href="https://github.com/JoseSanchez90/Web-Intellipos" target="_autoblank">Codigo</a>
                          <img src={github} alt="GitHub" className="w-6" />
                        </button>
                      </div>
                      <div className="max-w-32 bg-white items-center justify-center flex border-2 border-green-600 shadow-lg hover:bg-green-600 text-green-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg">
                        <button className="flex flex-row justify-center items-center px-8 py-1 gap-2">
                          <a className="" href="https://intellipos.vercel.app/" target="_autoblank">Web</a>
                          <img src={web} alt="Web" className="w-5" />
                        </button>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="group relative block w-92 h-52">
                <div className="relative flex h-full w-full transform items-center border-2 border-black bg-slate-200 transition-transform group-hover:scale-105 overflow-hidden rounded-xl">
                  <div className="inset-0 flex flex-col transition-opacity group-hover:absolute group-hover:opacity-0 gap-4">
                    <img src={coffe} alt="coffe-web" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute flex flex-col gap-3 opacity-0 transition-opacity group-hover:opacity-100 p-4">
                    <h2 className="text-lg font-bold">Web Restaurante</h2>
                    <p className="text-sm">Web para restaurante de Café, venta de todo tipo de Café.</p>
                    <div className="flex flex-row gap-2">
                      <img src={html} alt="html" className="w-8" />
                      <img src={css} alt="css" className="w-8" />
                      <img src={tailwind} alt="tailwind" className="w-8" />
                      <img src={js} alt="javascript" className="w-8" />
                      <img src={nextjs} alt="nextjs" className="w-8" />
                    </div>
                    <div className="flex flex-row gap-5">
                      <div className="max-w-32 bg-white items-center justify-center flex border-2 border-green-600 shadow-lg hover:bg-green-600 text-green-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg">
                        <button className="flex flex-row justify-center items-center px-8 py-1 gap-2">
                          <a className="" href="https://github.com/JoseSanchez90/ecommerce-coffe-frontend" target="_autoblank">Codigo</a>
                          <img src={github} alt="GitHub" className="w-6" />
                        </button>
                      </div>
                      <div className="max-w-32 bg-white items-center justify-center flex border-2 border-green-600 shadow-lg hover:bg-green-600 text-green-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg">
                        <button className="flex flex-row justify-center items-center px-8 py-1 gap-2">
                          <a className="" href="https://huachocoffe.vercel.app/" target="_autoblank">Web</a>
                          <img src={web} alt="Web" className="w-5" />
                        </button>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACTO  */}

      <div className="w-full h-screen bg-slate-100 dark:bg-slate-950" id="contacto">
        <div className="flex flex-col items-center gap-20 py-40">
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Contacto</h2>
          </div>
          <div className="images-shadow flex flex-row gap-14">
            <div className="flex flex-col items-center gap-2">
              <img src={whatsapp} alt="" className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">Whatsapp</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={telegram} alt="" className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">Telegram</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={gmail} alt="" className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">Gmail</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={linkedin} alt="" className="w-16 hover:scale-110 duration-200" />
              <p className="text-sm font-medium text-black dark:text-white">LinkedIn</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </section>

  )
}

export default Home