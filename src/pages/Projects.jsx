import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/common/SEO";
import { PROJECTS_DATA } from "../data/projects";
import { GitBranch, ArrowUpRight } from "lucide-react";

const WorkCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-[85vw] md:w-[400px] h-[500px] md:h-[600px] flex-shrink-0 snap-center mx-4 perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front of the Card */}
        <div className="absolute inset-0 backface-hidden bg-[#f4f4f4] rounded-[2rem] p-8 flex flex-col hover:shadow-2xl transition-shadow duration-500 border border-black/5">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-black mb-4 px-2">
              {project.title}
            </h3>
            <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-6 block">
              {project.category}
            </span>
            <p className="text-sm font-medium text-black/70 px-4 leading-relaxed line-clamp-6">
              {project.description}
            </p>
          </div>
          
          <div className="mt-auto pt-6 flex justify-center items-center opacity-40">
            <span className="text-xs font-bold uppercase tracking-widest">Click to flip</span>
          </div>
        </div>

        {/* Back of the Card */}
        <div className="absolute inset-0 backface-hidden bg-black text-white rounded-[2rem] p-8 flex flex-col items-center justify-center border border-white/20" style={{ transform: "rotateY(180deg)" }}>
          <h3 className="text-3xl font-black mb-8 text-center leading-tight">
            Want to see<br/>my work?
          </h3>
          
          <div className="flex flex-col gap-4 w-full px-4">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white text-black px-6 py-4 rounded-full font-bold text-sm tracking-wide shadow-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 group"
            >
              <GitBranch size={18} /> View Source
            </a>
            
            {project.liveUrl !== "#" && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-transparent border border-white/30 text-white px-6 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                Live Demo <ArrowUpRight size={18} />
              </a>
            )}
          </div>
          
          <div className="absolute bottom-8 text-xs font-bold uppercase tracking-widest text-white/30">
            Click to flip back
          </div>
        </div>
        
      </motion.div>
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
