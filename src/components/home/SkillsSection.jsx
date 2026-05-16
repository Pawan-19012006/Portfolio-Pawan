import { motion } from "framer-motion";
import { SKILLS_DATA } from "../../data/constants";
import { cn } from "../../lib/utils";

const SkillsSection = () => {
  return (
    <section className="py-24 relative border-t border-slate-100">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Section Header */}
        <div className="md:w-1/3 flex flex-col space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Technologies & Tools
            </h2>
            <p className="mt-4 text-slate-500 font-light leading-relaxed">
              I enjoy understanding systems deeply and building software on strong fundamentals. Here are the core technologies I work with.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {SKILLS_DATA.map((skillGroup, groupIdx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="flex flex-col space-y-4"
            >
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={cn(
                      "px-3 py-1.5 rounded-md text-sm font-medium border transition-colors cursor-default",
                      "bg-white border-slate-200 text-slate-700 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 shadow-sm"
                    )}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
