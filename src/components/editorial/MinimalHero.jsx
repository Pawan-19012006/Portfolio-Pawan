import { motion } from "framer-motion";

const MinimalHero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-white">
      {/* Very subtle background texture / grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-4xl"
        >
          {/* Subtitle / Role */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center space-x-4"
          >
            <div className="h-px w-8 bg-slate-900" />
            <span className="text-sm tracking-[0.2em] uppercase font-medium text-slate-500">
              Software Developer
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter text-slate-900 leading-[0.9] -ml-1">
            Pawan
            <br />
            <span className="text-slate-400">Eswaran.</span>
          </h1>

          {/* Supporting Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pt-8 max-w-xl"
          >
            <p className="text-lg md:text-xl font-light text-slate-600 leading-relaxed">
              Building software with a deep understanding of systems, scalability, and engineering fundamentals. Focused on backend architectures and developer tools.
            </p>
          </motion.div>

          {/* Quick Links / Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-12"
          >
            {["Backend Systems", "Data Engineering", "Developer Tools"].map((tag) => (
              <span key={tag} className="text-xs font-medium uppercase tracking-widest text-slate-400 border border-slate-200 px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MinimalHero;
