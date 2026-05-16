import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-slate-100">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
            >
              Engineering Systems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-800">
                With Purpose
              </span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl font-medium text-slate-700 tracking-tight"
            >
              Backend Developer • Data Engineering Enthusiast • Systems Thinker
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4 text-slate-500 font-light leading-relaxed max-w-lg pt-4"
            >
              <p>
                I am a software engineer driven by a deep appreciation for strong fundamentals. Rather than simply gluing APIs together, I focus on understanding the underlying architecture—from memory management to distributed systems.
              </p>
              <p>
                My expertise lies primarily in backend systems and scalable application development, complemented by a strong foundational understanding of AI and ML principles. I thrive in Linux/macOS environments, advocating for a clean, terminal-first workflow.
              </p>
              <p>
                Whether it's designing a robust database schema or architecting a highly available microservice, I aim to write code that is not just functional, but readable, maintainable, and engineered with clarity.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Abstract Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative hidden lg:flex justify-center items-center h-full min-h-[400px]"
        >
          {/* Main frame */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-80 h-[400px] rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 shadow-2xl flex items-center justify-center z-10 backdrop-blur-sm overflow-hidden"
          >
            {/* Grid overlay within frame */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            {/* Inner abstract elements */}
            <div className="relative w-40 h-40 rounded-full border border-indigo-100/50 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-indigo-900 shadow-xl z-20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-white/20" />
              </div>
              
              {/* Orbital rings */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-30px] rounded-full border border-slate-200 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-60px] rounded-full border border-slate-100"
              />
            </div>

            {/* Glowing accent at bottom */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-indigo-50/80 to-transparent blur-xl" />
          </motion.div>
          
          {/* Floating accent elements */}
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-16 -right-6 w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center z-20"
          >
            <div className="w-6 h-6 rounded border-2 border-indigo-100" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-16 -left-6 w-20 h-20 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center z-20"
          >
            <div className="w-8 h-8 rounded-full border-2 border-slate-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
