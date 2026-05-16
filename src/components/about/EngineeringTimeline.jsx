import { motion } from "framer-motion";
import { TIMELINE_DATA } from "../../data/about";

const EngineeringTimeline = () => {
  return (
    <section className="py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Engineering Journey
          </h2>
          <p className="mt-4 text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            A chronological look at my evolution as a developer, highlighting key focus areas and paradigm shifts.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-500 shadow-sm -translate-x-1/2 z-10 mt-1.5 md:mt-0" />
                
                {/* Content Box */}
                <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${
                  idx % 2 === 0 ? "md:pl-12 lg:pl-16" : "md:pr-12 lg:pr-16 text-left md:text-right"
                }`}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 mb-3 rounded-full bg-slate-100 text-xs font-bold text-slate-600 tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 font-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringTimeline;
