import { motion } from "framer-motion";

const MinimalPhilosophy = () => {
  const philosophies = [
    {
      title: "Fundamentals Before Frameworks.",
      description: "Technologies come and go, but underlying system mechanics remain constant."
    },
    {
      title: "Systems Should Scale Cleanly.",
      description: "Complexity should be intentional, not accidental. Architecture dictates longevity."
    },
    {
      title: "Build Thoughtfully.",
      description: "Software engineering is more than writing code; it's about solving the right problems."
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="inline-block mb-4 text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
            Approach
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-tight">
            How I Approach Software
          </h2>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {philosophies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 md:w-1/2">
                {item.title}
              </h3>
              <p className="text-lg text-slate-500 font-light md:w-1/2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MinimalPhilosophy;
