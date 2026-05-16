import { motion } from "framer-motion";
import { Terminal, Command, GitMerge, Cpu } from "lucide-react";
import { WORKFLOW_DATA } from "../../data/about";

const getIconForCategory = (category) => {
  switch (category) {
    case "Environment": return <Cpu size={20} className="text-slate-400" />;
    case "Containerization": return <Command size={20} className="text-slate-400" />;
    case "Version Control": return <GitMerge size={20} className="text-slate-400" />;
    case "Mindset": return <Terminal size={20} className="text-slate-400" />;
    default: return <Terminal size={20} className="text-slate-400" />;
  }
};

const WorkflowEnvironment = () => {
  return (
    <section className="py-24 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Development Environment
          </h2>
          <p className="mt-4 text-slate-500 font-light max-w-2xl leading-relaxed">
            I prioritize a terminal-first, highly efficient workflow. My environment is optimized for speed, reproducibility, and deep system integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WORKFLOW_DATA.map((block, idx) => (
            <motion.div
              key={block.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0D1117] rounded-xl overflow-hidden border border-[#30363D] shadow-xl flex flex-col font-mono"
            >
              {/* Terminal Window Header */}
              <div className="bg-[#161B22] border-b border-[#30363D] px-4 py-3 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[#8B949E] text-xs font-medium flex items-center gap-2">
                  {getIconForCategory(block.category)}
                  {block.category.toLowerCase()}.sh
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 text-sm text-[#C9D1D9] leading-relaxed flex-grow">
                <div className="flex text-[#7EE787] mb-4">
                  <span className="mr-2">~</span>
                  <span className="text-[#58A6FF]">❯</span>
                  <span className="ml-2 text-[#C9D1D9]">cat {block.category.toLowerCase()}.txt</span>
                </div>
                <ul className="space-y-3 pl-2 border-l border-[#30363D] ml-2">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <span className="text-[#8B949E] mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex text-[#7EE787] mt-6 opacity-70 animate-pulse">
                  <span className="mr-2">~</span>
                  <span className="text-[#58A6FF]">❯</span>
                  <span className="ml-2 w-2 h-4 bg-[#C9D1D9]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowEnvironment;
