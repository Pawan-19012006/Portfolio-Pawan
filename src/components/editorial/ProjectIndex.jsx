import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECTS_DATA } from "../../data/projects";

const ProjectIndex = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="inline-block mb-4 text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
            Selected Work Index
          </span>
        </motion.div>

        <div className="flex flex-col border-t border-slate-200">
          {PROJECTS_DATA.map((project, idx) => (
            <Link key={project.id} to="/work">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col md:flex-row md:items-baseline justify-between py-6 md:py-8 border-b border-slate-200 hover:px-6 -mx-6 transition-all duration-500 hover:bg-slate-50 cursor-pointer"
              >
                <div className="flex items-baseline space-x-6 md:space-x-12 px-6 group-hover:px-0 transition-all duration-500">
                  <span className="text-sm font-medium text-slate-400 w-8">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-light tracking-tight text-slate-900 group-hover:text-slate-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="mt-4 md:mt-0 pl-20 md:pl-0 flex items-center md:justify-end px-6 group-hover:px-0 transition-all duration-500">
                  <span className="text-sm tracking-widest uppercase text-slate-500 font-medium">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectIndex;
