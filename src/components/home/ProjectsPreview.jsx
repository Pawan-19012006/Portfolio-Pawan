import { motion } from "framer-motion";
import { ExternalLink, GitBranch, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FEATURED_PROJECTS } from "../../data/constants";

const ProjectsPreview = () => {
  return (
    <section className="py-24 relative border-t border-slate-100">
      <div className="flex flex-col space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Featured Projects
            </h2>
            <p className="mt-4 text-slate-500 font-light max-w-xl leading-relaxed">
              A selection of recent work. Each project focuses on robust architecture, clean code, and solving real problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/projects"
              className="group flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              View All Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl border border-slate-200 p-6 flex flex-col h-full hover:shadow-xl hover:shadow-indigo-900/5 hover:border-indigo-100 transition-all duration-300"
            >
              {/* Subtle top gradient glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                  {/* Abstract placeholder icon for project */}
                  <div className="w-5 h-5 bg-slate-400 rounded-sm group-hover:bg-indigo-500 transition-colors" />
                </div>
                
                <div className="flex space-x-2">
                  <a href={project.githubUrl} className="p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50">
                    <GitBranch size={18} />
                  </a>
                  <a href={project.liveUrl} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors rounded-lg hover:bg-slate-50">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-500 font-light text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsPreview;
