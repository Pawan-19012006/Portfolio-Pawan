import { motion } from "framer-motion";
import { Server, Zap, Cpu, Code2 } from "lucide-react";

const principles = [
  {
    icon: <Server className="text-indigo-500" size={24} />,
    title: "Strong Fundamentals",
    description: "I believe in deeply understanding how systems work under the hood rather than just gluing APIs together. Knowledge of networking, OS concepts, and data structures is key."
  },
  {
    icon: <Zap className="text-amber-500" size={24} />,
    title: "Scalability First",
    description: "Designing for scale isn't just about handling traffic; it's about writing maintainable, predictable code that teams can confidently extend over time."
  },
  {
    icon: <Cpu className="text-emerald-500" size={24} />,
    title: "System Design",
    description: "I approach problems holistically. From the database schema to the API contract, every piece should be architected logically and efficiently."
  },
  {
    icon: <Code2 className="text-blue-500" size={24} />,
    title: "Clean Architecture",
    description: "Code is read far more often than it is written. I prioritize readability, modularity, and comprehensive testing in every commit."
  }
];

const PhilosophySection = () => {
  return (
    <section className="py-24 relative border-t border-slate-100">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left - Sticky Header Area */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              How I Approach <br className="hidden lg:block" /> Software Engineering
            </h2>
            <div className="mt-6 w-12 h-1 bg-indigo-600 rounded-full" />
            <p className="mt-6 text-slate-500 font-light leading-relaxed">
              My engineering philosophy revolves around a "learn deeply, build cleanly" mindset. I avoid treating frameworks as magic boxes and instead focus on the core concepts that power them.
            </p>
          </motion.div>
        </div>

        {/* Right - Principles List */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {principle.title}
              </h3>
              <p className="text-slate-500 font-light leading-relaxed text-sm">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;
