import { motion } from "framer-motion";
import { Server, Zap, Compass, Code2 } from "lucide-react";

const philosophies = [
  {
    icon: <Server className="text-indigo-500" size={24} />,
    title: "Fundamentals First",
    description: "Focus on understanding systems deeply instead of blindly building. I prioritize mastering core concepts over chasing the latest frameworks."
  },
  {
    icon: <Zap className="text-amber-500" size={24} />,
    title: "Scalability Matters",
    description: "Interest in architectures that remain maintainable and reliable as systems grow. Writing code that teams can confidently extend over time."
  },
  {
    icon: <Compass className="text-emerald-500" size={24} />,
    title: "Learn by Building",
    description: "Hands-on exploration through real-world systems and developer tools. Theory is essential, but execution solidifies understanding."
  },
  {
    icon: <Code2 className="text-blue-500" size={24} />,
    title: "Engineering With Clarity",
    description: "Clean architecture, readability, and thoughtful design over unnecessary complexity. Code is read far more often than it is written."
  }
];

const PhilosophyCards = () => {
  return (
    <section className="py-24 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            How I Think About Software
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {philosophies.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophyCards;
