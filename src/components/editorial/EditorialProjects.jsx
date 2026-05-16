import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA } from "../../data/projects";

const FeaturedProject = ({ project, index }) => {
  return (
    <div className="relative py-32 md:py-48 min-h-screen flex items-center border-t border-slate-100 overflow-hidden group">
      
      {/* Huge Faded Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[12vw] font-black tracking-tighter text-slate-900 whitespace-nowrap"
        >
          {project.title.split(" ")[0]}
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Typography & Details */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block mb-4 text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
                0{index + 1} — {project.category}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                {project.title}
              </h3>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Highlights List */}
            {project.highlights && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <ul className="space-y-4">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 font-light">
                      <span className="mr-4 mt-2 w-1 h-1 rounded-full bg-slate-900 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Tech Stack & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 border-t border-slate-200 flex flex-col space-y-8"
            >
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-sm font-medium text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                {project.githubUrl !== "#" && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-900 uppercase hover:text-slate-500 transition-colors">
                    View Source <ArrowUpRight size={16} />
                  </a>
                )}
                {project.liveUrl !== "#" && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-900 uppercase hover:text-slate-500 transition-colors">
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] w-full bg-slate-100 rounded-sm overflow-hidden group-hover:shadow-2xl transition-all duration-700">
              {/* Abstract Visual Placeholder */}
              <div className="absolute inset-4 md:inset-8 bg-white shadow-sm border border-slate-200/60 rounded flex flex-col">
                <div className="h-8 border-b border-slate-100 flex items-center px-4 space-x-2">
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-1/3 h-4 bg-slate-100 rounded" />
                  <div className="w-full h-32 bg-slate-50 border border-slate-100 rounded" />
                  <div className="flex gap-4">
                    <div className="w-1/2 h-full bg-slate-50 border border-slate-100 rounded" />
                    <div className="w-1/2 h-full bg-slate-50 border border-slate-100 rounded" />
                  </div>
                </div>
                
                {/* Overlay subtle transition */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-700 pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const EditorialProjects = () => {
  const featuredProjects = PROJECTS_DATA.filter(p => p.isFeatured);

  return (
    <section className="bg-white">
      {featuredProjects.map((project, idx) => (
        <FeaturedProject key={project.id} project={project} index={idx} />
      ))}
    </section>
  );
};

export default EditorialProjects;
