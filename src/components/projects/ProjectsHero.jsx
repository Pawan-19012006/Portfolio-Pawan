import { motion } from "framer-motion";

const ProjectsHero = ({ totalProjects }) => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-3xl opacity-50 -translate-y-1/2" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-800"
        >
          Engineering Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900"
        >
          Projects & <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-800">
            Engineering Work
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed"
        >
          Systems, platforms, and tools built with a focus on scalability, architecture, and user experience.
        </motion.p>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 pt-8"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">{totalProjects}</span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Projects</span>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">15+</span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Technologies</span>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">6</span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Categories</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;
