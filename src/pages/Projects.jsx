import { useRef } from "react";
import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { PROJECTS_DATA } from "../data/projects";
import { GitBranch, ArrowUpRight } from "lucide-react";

const WorkCard = ({ project }) => {
  return (
    <div className="w-[85vw] md:w-[400px] h-[500px] md:h-[600px] flex-shrink-0 snap-center mx-4 bg-[#f4f4f4] rounded-[2rem] p-8 flex flex-col relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
      
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
        <h3 className="text-2xl font-bold text-black mb-6 px-4">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-black/70 px-4 leading-relaxed line-clamp-6">
          {project.description}
        </p>
      </div>

      <div className="mt-auto pt-6 border-t border-black/10 flex justify-between items-center z-10">
        <a 
          href={project.liveUrl !== "#" ? project.liveUrl : project.githubUrl} 
          target="_blank" 
          rel="noreferrer"
          className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-2 group-hover:bg-black group-hover:text-white"
        >
          Visit {project.liveUrl !== "#" ? <ArrowUpRight size={16} /> : <GitBranch size={16} />}
        </a>
        
        {project.githubUrl !== "#" && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-black hover:text-black/60 transition-colors">
            <GitBranch size={24} />
          </a>
        )}
      </div>

    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const featuredProjects = PROJECTS_DATA; 

  return (
    <div className="w-full h-screen relative flex items-center bg-transparent z-10 overflow-hidden">
      <SEO title="Projects — Pawan Eswaran" />
      
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[25vw] font-black tracking-tighter text-white/10 mix-blend-overlay whitespace-nowrap">
          WORK
        </h1>
      </div>

      {/* Horizontal Carousel */}
      <div 
        ref={containerRef}
        className="w-full h-full flex items-center overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar relative z-10 px-[10vw] md:px-[20vw]"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex items-center gap-4 lg:gap-12 py-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
          
          <div className="w-[85vw] md:w-[400px] h-full flex-shrink-0 flex items-center justify-center mx-4">
             <div className="text-white/50 text-6xl md:text-8xl font-black italic opacity-20 whitespace-nowrap">
               Swipe 👉
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
