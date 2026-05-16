import { motion } from "framer-motion";
import SEO from "../components/common/SEO";

const EXPERIENCE_DATA = [
  {
    year: "2020",
    title: "Exploring AI/ML",
    description: "Started learning Python, NumPy, Pandas, and foundational machine learning concepts."
  },
  {
    year: "2021",
    title: "Backend Systems",
    description: "Focused heavily on Java, Spring Boot, APIs, and SQL fundamentals."
  },
  {
    year: "2022",
    title: "Developer Tooling & Linux",
    description: "Worked on DevWatch and explored Linux workflows, Docker, and system-level engineering."
  },
  {
    year: "2023",
    title: "Full-Stack Platforms",
    description: "Built scalable applications including MedNexus, FinTwitch, and workflow management systems."
  },
  {
    year: "2024",
    title: "Architecture & Data Engineering",
    description: "Exploring scalable architectures, distributed systems, and deeper backend engineering concepts."
  }
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex justify-center items-center w-full my-12 md:my-24 group">
      
      {/* Center Line Node */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full z-20 border-4 border-black"
      />

      {/* Content Container */}
      <div className={`w-full flex ${isEven ? 'justify-start' : 'justify-end'} px-4 md:px-0 relative z-10`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full md:w-[45%] ${isEven ? 'md:pr-16 text-right' : 'md:pl-16 text-left'} flex flex-col`}
        >
          <div className="bg-[#111] border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors">
            <span className="text-sm font-bold tracking-widest uppercase text-white/50 block mb-2">
              {item.year}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              {item.title}
            </h3>
            <p className="text-white/70 font-light leading-relaxed">
              {item.description}
            </p>
          </div>
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
        <h1 className="text-[15vw] font-black tracking-tighter text-white/5 mix-blend-overlay">
          EXPERIENCE
        </h1>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Center Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-[0.5px] w-[1px] bg-white/20 z-0" />

        <div className="flex flex-col relative py-12">
          {EXPERIENCE_DATA.map((item, idx) => (
            <TimelineItem key={item.year} item={item} index={idx} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
