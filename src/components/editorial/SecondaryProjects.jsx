import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA } from "../../data/projects";

const SecondaryProjects = () => {
  const secondaryProjects = PROJECTS_DATA.filter(p => !p.isFeatured);

  return (
    <section className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Selected Experiments
          </h2>
          <p className="mt-4 text-slate-500 font-light">
            Additional projects, exploratory tools, and academic implementations.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-slate-100 hover:bg-slate-50 transition-colors px-4 -mx-4 cursor-pointer"
            >
              <div className="flex flex-col md:w-1/3 pr-8">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-600 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-medium uppercase tracking-widest text-slate-400 mt-2">
                  {project.category}
                </span>
              </div>
              
              <div className="md:w-1/2 mt-4 md:mt-0">
                <p className="text-slate-500 font-light text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-6 mt-6 md:mt-0 md:justify-end md:w-1/6">
                {project.githubUrl !== "#" && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-400 hover:text-slate-900 transition-colors"
                    aria-label={`View ${project.title} Source`}
                  >
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SecondaryProjects;
