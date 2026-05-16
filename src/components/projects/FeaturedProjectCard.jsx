import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, ChevronDown, CheckCircle2, Clock, FlaskConical } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

const StatusIcon = ({ status }) => {
  switch (status) {
    case "Completed":
      return <CheckCircle2 size={14} className="text-emerald-500" />;
    case "In Progress":
      return <Clock size={14} className="text-amber-500" />;
    case "Experimental":
      return <FlaskConical size={14} className="text-purple-500" />;
    default:
      return null;
  }
};

const FeaturedProjectCard = ({ project, index }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (title) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 border-b border-slate-100 last:border-0"
    >
      {/* Left Column: Details & Architecture */}
      <div className="lg:col-span-5 flex flex-col space-y-8 order-2 lg:order-1">
        
        {/* Header & Badges */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
              <StatusIcon status={project.status} />
              {project.status}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-slate-200 text-xs font-medium text-slate-600">
              {project.type}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-xs font-medium text-indigo-700">
              {project.category}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {project.title}
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        {project.highlights && (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Key Features</h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start text-slate-600 text-sm">
                  <span className="mr-2.5 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Engineering Thinking Blocks (Accordions) */}
        {project.architectureNotes && (
          <div className="space-y-2 pt-2">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Engineering Notes</h3>
            {project.architectureNotes.map((note) => (
              <div key={note.title} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion(note.title)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-medium text-sm text-slate-800">{note.title}</span>
                  <ChevronDown
                    size={16}
                    className={cn(
                      "text-slate-400 transition-transform duration-300",
                      openAccordion === note.title ? "rotate-180" : ""
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openAccordion === note.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {note.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons & Tech Stack */}
        <div className="pt-4 flex flex-col space-y-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.githubUrl !== "#" && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
              >
                <GitBranch size={16} />
                View Source
              </a>
            )}
            {project.liveUrl !== "#" && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Visual Mockup */}
      <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center">
        <motion.div 
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 shadow-xl overflow-hidden group flex items-center justify-center"
        >
          {/* Abstract floating UI representation */}
          <div className="absolute inset-x-8 top-8 bottom-0 bg-white rounded-t-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            {/* Mockup Header */}
            <div className="h-10 border-b border-slate-100 bg-slate-50 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            {/* Mockup Body Content */}
            <div className="flex-1 p-6 flex flex-col gap-4 relative overflow-hidden">
              <div className="w-1/3 h-6 bg-slate-100 rounded" />
              <div className="w-full h-24 bg-slate-50 rounded border border-slate-100" />
              <div className="flex gap-4">
                <div className="w-1/2 h-32 bg-slate-50 rounded border border-slate-100" />
                <div className="w-1/2 h-32 bg-slate-50 rounded border border-slate-100" />
              </div>
              
              {/* Animated overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
