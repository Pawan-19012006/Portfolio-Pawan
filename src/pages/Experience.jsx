import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { EXPERIENCE_DATA } from "../data/experience";

const TimelineItem = ({ item, index }) => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-stretch w-full my-16 md:my-32 group px-4 md:px-0">
      
      {/* Center Line Node */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 bg-white rounded-full z-20 border-[6px] border-black"
      />

      {/* Left Side (Info Card) */}
      <div className="w-full md:w-1/2 md:pr-16 flex justify-end mb-8 md:mb-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#111] border border-white/5 p-10 rounded-3xl w-full max-w-xl hover:border-white/10 transition-colors shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            {item.company}
          </h3>
          <h4 className="text-xl md:text-2xl font-bold text-white/90 mb-5">
            {item.role}
          </h4>
          <p className="text-base font-semibold text-white/60 mb-2 tracking-wide uppercase">
            {item.date}
          </p>
          <p className="text-base font-medium text-white/50 italic mb-8">
            {item.location}
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="text-xs font-black uppercase tracking-widest bg-white text-black px-4 py-2 rounded-full shadow-sm">
              {item.type}
            </span>
            {item.tags.map(tag => (
              <span key={tag} className="text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Side (Details Card) */}
      <div className="w-full md:w-1/2 md:pl-16 flex justify-start">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#111] border border-white/5 p-10 rounded-3xl w-full max-w-2xl hover:border-white/10 transition-colors flex flex-col justify-center shadow-2xl"
        >
          <ul className="space-y-6">
            {item.points.map((point, i) => (
              <li key={i} className="text-base md:text-lg font-medium text-white/80 leading-relaxed flex items-start">
                <span className="mr-4 mt-2.5 w-2 h-2 bg-white/40 rounded-full flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

    </div>
  );
};

const Experience = () => {
  return (
    <div className="w-full min-h-screen relative bg-black text-white overflow-x-hidden flex flex-col pt-32 pb-32">
      <SEO title="Experience — Pawan Eswaran" />
      
      {/* Massive Background Text */}
      <div className="fixed top-24 inset-x-0 flex justify-center pointer-events-none z-0">
        <h1 className="text-[12vw] font-black tracking-tighter text-white/5 mix-blend-overlay">
          EXPERIENCE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 md:px-8">
        
        {/* Center Vertical Line (Hidden on Mobile) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-[0.5px] w-[1px] bg-white/20 z-0" />

        <div className="flex flex-col relative py-12">
          {EXPERIENCE_DATA.map((item, idx) => (
            <TimelineItem key={item.id} item={item} index={idx} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
