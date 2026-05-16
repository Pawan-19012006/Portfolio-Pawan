import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { ARTICLES_DATA } from "../../data/about";

const ThoughtsPreview = () => {
  return (
    <section className="py-24 border-b border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Thoughts on Systems & Software
            </h2>
            <p className="mt-4 text-slate-500 font-light max-w-xl leading-relaxed">
              Occasionally, I document my learnings, architectural experiments, and thoughts on the evolving software engineering landscape.
            </p>
          </div>
          
          <button className="hidden md:flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors group">
            View All Writings
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-indigo-900/5 hover:border-indigo-100 transition-all duration-300 flex flex-col h-full cursor-not-allowed"
              title="Coming Soon"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-500">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {article.readTime}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-snug">
                {article.title}
              </h3>
              
              <div className="mt-auto pt-6 flex items-center gap-2 text-slate-400 text-sm font-medium">
                <BookOpen size={16} />
                {article.date}
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-8 flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors group w-full">
          View All Writings
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ThoughtsPreview;
