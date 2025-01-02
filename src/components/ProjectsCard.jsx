import projects from "./Projects"

function ProjectsCard() {
  
  return (

    <div className="flex flex-col gap-8 px-12 md:grid md:grid-cols-2 md:px-40 2xl:grid-cols-4 2xl:px-32">
      {projects.map((project, index) => (
        <div key={index} className="group relative block h-36 w-full">
          <div className="relative flex h-full w-full transform items-center border-2 border-black bg-slate-200 transition-transform group-hover:scale-105 overflow-hidden rounded-xl">
            <div className="inset-0 flex flex-col transition-opacity group-hover:absolute group-hover:opacity-0 gap-4">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute flex flex-col gap-3 opacity-0 transition-opacity group-hover:opacity-100 p-6">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="text-sm">{project.description}</p>
              <div className="flex flex-row gap-2">
                {project.techStack.map((tech, i) => (
                  <img key={i} src={tech.icon} alt={tech.name} className="w-8 bg-cover object-cover" />
                ))}
              </div>
              <div className="flex flex-row gap-5">
                <div className="max-w-32 bg-white items-center justify-center flex border-2 border-green-600 shadow-lg hover:bg-green-600 text-green-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg">
                  <button className="flex flex-row justify-center items-center px-8 py-1 gap-2">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Código</a>
                    <img src={project.githubIcon} alt="GitHub" className="w-6" />
                  </button>
                </div>
                <div className="max-w-32 bg-white items-center justify-center flex border-2 border-green-600 shadow-lg hover:bg-green-600 text-green-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-lg">
                  <button className="flex flex-row justify-center items-center px-8 py-1 gap-2">
                    <a href={project.webLink} target="_blank" rel="noopener noreferrer">Web</a>
                    <img src={project.webIcon} alt="Web" className="w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>


  )
}

export default ProjectsCard