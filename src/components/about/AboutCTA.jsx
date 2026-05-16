import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, GitBranch } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-50/50 rounded-[100%] blur-3xl opacity-70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Let's Build Something <br className="hidden md:block" /> Meaningful Together
          </h2>
          
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
            Whether you have a complex backend challenge, a full-stack project idea, or just want to chat about system architecture, my inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:scale-95"
            >
              <Mail size={18} />
              Get In Touch
            </Link>
            
            <Link
              to="/projects"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-medium hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-95"
            >
              View Projects
              <ArrowRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-all" />
            </Link>

            <a
              href="https://github.com/Pawan-19012006"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-transparent text-slate-600 px-6 py-4 rounded-xl font-medium hover:bg-slate-100 transition-all active:scale-95"
            >
              <GitBranch size={18} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
