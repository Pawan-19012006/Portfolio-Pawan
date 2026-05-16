import { motion } from "framer-motion";
import { ExternalLink, GitBranch, FolderGit2 } from "lucide-react";

const OtherProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl border border-slate-200 p-6 flex flex-col h-full hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300"
    >
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-slate-700 transition-colors">
          <FolderGit2 size={20} />
        </div>
        
        <div className="flex space-x-1">
          {project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50">
              <GitBranch size={16} />
            </a>
          )}
          {project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <span className="inline-block px-2 py-1 mb-3 rounded text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-500">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 font-light text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Bottom */}
      <div className="mt-auto pt-6 flex flex-wrap gap-2">
        {project.techStack.map(tech => (
          <span key={tech} className="text-xs font-medium text-slate-500">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default OtherProjectCard;
