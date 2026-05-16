import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { Code2, Server, Database, BrainCircuit, Terminal } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: <Code2 size={24} className="mb-4 text-slate-800" />,
    description: "Core languages used for building scalable applications.",
    items: ["Java", "Python", "JavaScript"]
  },
  {
    title: "Backend",
    icon: <Server size={24} className="mb-4 text-slate-800" />,
    description: "Frameworks and architectures for robust server-side logic.",
    items: ["Spring Boot", "Node.js", "REST APIs"]
  },
  {
    title: "Data & AI",
    icon: <BrainCircuit size={24} className="mb-4 text-slate-800" />,
    description: "Tools for data manipulation, analysis, and machine learning.",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Machine Learning", "AI Algorithms"]
  },
  {
    title: "Databases",
    icon: <Database size={24} className="mb-4 text-slate-800" />,
    description: "Systems for efficient data storage and retrieval.",
    items: ["SQL", "MySQL"]
  },
  {
    title: "DevOps & Systems",
    icon: <Terminal size={24} className="mb-4 text-slate-800" />,
    description: "Infrastructure, containerization, and version control.",
    items: ["Docker", "Git", "Linux", "macOS"]
  }
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen relative bg-[#fdfdfd] text-black overflow-x-hidden flex flex-col justify-center py-24">
      <SEO title="Skills — Pawan Eswaran" />
      
      {/* Network Dots Background SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#000" />
              <circle cx="80" cy="60" r="1.5" fill="#000" />
              <circle cx="40" cy="90" r="1.5" fill="#000" />
              <path d="M20,20 L80,60 L40,90 Z" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-24 w-full relative z-10 flex-grow flex flex-col justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-8 rounded-2xl shadow-xl shadow-slate-200/20 hover:-translate-y-2 transition-transform duration-500"
            >
              {category.icon}
              <h3 className="text-xl font-bold tracking-tight mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">
                {category.description}
              </p>
              
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map(item => (
                    <span key={item} className="text-sm font-medium bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center pointer-events-none z-0 overflow-hidden opacity-5">
        <h1 className="text-[20vw] font-black tracking-tighter text-black translate-y-1/4">
          Skills
        </h1>
      </div>
    </div>
  );
};

export default Skills;
