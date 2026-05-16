import { motion } from "framer-motion";

const STACK_DATA = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript"]
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Node.js", "REST APIs"]
  },
  {
    category: "Data & AI",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Machine Learning", "AI Algorithms"]
  },
  {
    category: "Databases",
    items: ["SQL", "MySQL"]
  },
  {
    category: "DevOps & Systems",
    items: ["Git", "Docker", "Linux", "macOS"]
  }
];

const TechStack = () => {
  return (
    <section className="py-24 border-b border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="sticky top-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Technology Stack
              </h2>
              <p className="mt-4 text-slate-500 font-light leading-relaxed">
                A highly curated list of tools and technologies I use to build scalable, reliable systems.
              </p>
            </motion.div>
          </div>

          <div className="md:w-2/3 flex flex-col space-y-12">
            {STACK_DATA.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="flex flex-col space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-700 hover:border-indigo-200 hover:text-indigo-700 hover:bg-indigo-50/50 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
