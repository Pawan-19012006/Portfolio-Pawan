import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50/80 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/4" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-800"
            >
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse" />
              Available for new opportunities
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Pawan <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-800">
                Eswaran
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-slate-700 tracking-tight">
              Software Developer specializing in <br className="hidden md:block" />
              Backend Development & Data Engineering
            </h2>
            
            <p className="text-lg text-slate-500 font-light max-w-lg leading-relaxed">
              Building software with a deep understanding of systems, scalability, and fundamentals. Passionate about backend engineering, data systems, and applying AI/ML concepts to solve complex problems through system-level thinking.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
          >
            <Link
              to="/projects"
              className="group flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:scale-95 w-full sm:w-auto"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-3.5 rounded-xl font-medium hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-95 w-full sm:w-auto"
            >
              <Mail size={18} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
              Contact Me
            </Link>

            <a
              href="#"
              className="group flex items-center justify-center gap-2 bg-transparent text-slate-600 px-6 py-3.5 rounded-xl font-medium hover:bg-slate-100 transition-all active:scale-95 w-full sm:w-auto"
            >
              <FileText size={18} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Abstract Avatar/Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative hidden lg:flex justify-center items-center h-full min-h-[400px]"
        >
          {/* Main geometric shape */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-72 h-72 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 shadow-2xl flex items-center justify-center z-10 backdrop-blur-sm"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-50/50 to-transparent" />
            
            {/* Inner abstract elements */}
            <div className="relative w-32 h-32 rounded-full border border-indigo-100 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-slate-800 blur-[2px] shadow-inner" />
              
              {/* Orbital rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] rounded-full border border-slate-200 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] rounded-full border border-slate-100"
              />
            </div>
          </motion.div>
          
          {/* Floating accent elements */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 right-10 w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center z-20"
          >
            <div className="w-6 h-6 rounded-md bg-indigo-100" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center z-20"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
