import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/common/SEO";

const DYNAMIC_TEXTS = [
  "I engineer scalable backends.",
  "I craft clean architectures.",
  "I optimize data pipelines.",
  "I build developer tools."
];

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % DYNAMIC_TEXTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen min-h-dvh relative flex items-center justify-center z-10 px-4 sm:px-6 md:px-0 py-24 md:py-0">
      <SEO title="Pawan Eswaran — Software Developer" />
      
      {/* 50/50 Split Background for Home Page Only */}
      <div className="fixed inset-0 flex flex-col md:flex-row w-full h-full z-0 pointer-events-none">
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#0a0a0a]" />
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#f4f4f4]" />
      </div>

      {/* Centered Box */}
      <div className="w-full max-w-5xl h-auto md:h-[60vh] md:min-h-[500px] flex flex-col md:flex-row relative z-10 shadow-2xl my-auto">
        
        {/* Left Box (Over Black Background) */}
        <div className="w-full md:w-1/2 h-auto md:h-full border border-white flex flex-col justify-center p-8 sm:p-10 lg:px-16 bg-black z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-2 lg:mb-4">
              Hi,
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 lg:mb-8">
              I'm Pawan <br className="hidden lg:block"/> Eswaran
            </h1>
            <p className="text-white/80 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              A highly skilled software developer focused on backend systems, data engineering, and modern architectures.
            </p>
          </motion.div>
        </div>

        {/* Right Box (Over White Background) */}
        <div className="w-full md:w-1/2 h-auto md:h-full border border-black border-t-0 md:border-t md:border-l-0 flex flex-col justify-center p-8 sm:p-10 lg:px-16 bg-[#f4f4f4] z-10 md:overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col h-full justify-center"
          >
            <h3 className="text-black font-black tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 sm:mb-8 opacity-60">
              Focus & Expertise
            </h3>
            
            <div className="min-h-[120px] sm:min-h-[150px] md:min-h-[180px] lg:min-h-[200px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={textIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl sm:text-4xl lg:text-6xl font-black text-black tracking-tight leading-tight w-full"
                >
                  {DYNAMIC_TEXTS[textIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="text-black/80 text-base sm:text-lg lg:text-xl font-medium leading-relaxed mt-4 sm:mt-6">
              I architect systems, shape data flows, and ship products that matter.
            </p>

            <div className="mt-8 sm:mt-12 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-black/40">Available for opportunities</span>
            </div>
          </motion.div>
        </div>

      </div>

    </div>
  );
};

export default Home;
