
function Footer() {
  return (

    <footer className="h-0" id="footer">
            
        <div className="flex py-16 sm:py-0 sm:fixed sm:origin-bottom-left sm:bottom-6 sm:left-10 justify-center items-center text-emerald-600 dark:text-emerald-300 sm:-rotate-90 bg-slate-100 dark:bg-slate-950">
            <div className="hidden sm:flex bg-emerald-600 w-20 mr-4 h-[1px]">
            </div>
                <p className="text-xs sm:text-sm w-52 sm:w-full md:text-left text-center font-extralight"> © Perú, Lima - Jose Sanchez. Derechos reservados.</p>
        </div>
        <a href="#" className="fixed z-10 origin-bottom-right bottom-5 right-5 justify-center items-center text-emerald-100 dark:text-emerald-300 bg-emerald-400 dark:bg-emerald-600 rounded p-2 hover:scale-110 transition-transform">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6"><path fillRule="evenodd" clipRule="evenodd" d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor"></path></svg>
        </a>
        
    </footer>

  )
}

export default Footer