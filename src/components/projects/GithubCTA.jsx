import { motion } from "framer-motion";
import { GitBranch, ArrowRight } from "lucide-react";

const GithubCTA = () => {
  return (
    <section className="py-24 border-t border-slate-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-slate-50 rounded-[100%] blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-800">
            <GitBranch size={32} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Open Source & Continuous Learning
          </h2>
          
          <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
            My GitHub is where I experiment with new architectures, contribute to open-source tools, and continuously refine my engineering practices. It's a reflection of my commitment to writing clean, maintainable code.
          </p>

          <div className="pt-4">
            <a
              href="https://github.com/Pawan-19012006"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:scale-95"
            >
              Explore More on GitHub
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubCTA;
