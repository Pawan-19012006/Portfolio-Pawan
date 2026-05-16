import SEO from "../components/common/SEO";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full max-w-5xl h-[60vh] min-h-[500px] flex">
      <SEO title="Pawan Eswaran — Software Developer" />
      
      {/* Left Box (Over Black Background) */}
      <div className="w-1/2 h-full border border-white flex flex-col justify-center px-12 lg:px-16 bg-black z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
            Hi,
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            I'm Pawan Eswaran
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl font-light leading-relaxed">
            A self-motivated, highly skilled software developer with a deep understanding of backend systems, data engineering, and modern web architectures. Focused on building scalable solutions and adapting to complex engineering challenges.
          </p>
        </motion.div>
      </div>

      {/* Right Box (Over White Background) */}
      <div className="w-1/2 h-full border border-black border-l-0 flex flex-col justify-center items-center bg-[#f4f4f4] z-10 overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          {/* Abstract Placeholder Avatar/Illustration */}
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-2 border-dashed border-black/20 flex flex-col items-center justify-center text-center p-8">
             <div className="w-16 h-16 bg-black rounded-full mb-4 opacity-10" />
             <p className="text-black/40 font-mono text-sm">Avatar / Illustration Placeholder</p>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Home;
