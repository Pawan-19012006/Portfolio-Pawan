import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";

const ResumeSection = () => {
  return (
    <section className="py-24 border-b border-slate-100 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Professional Profile
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Resume Document Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[1/1.4] bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-slate-50/50 flex flex-col p-8 opacity-60">
                <div className="w-1/2 h-6 bg-slate-200 rounded mb-6" />
                <div className="w-3/4 h-3 bg-slate-200 rounded mb-2" />
                <div className="w-2/3 h-3 bg-slate-200 rounded mb-8" />
                
                <div className="w-1/3 h-4 bg-slate-300 rounded mb-4" />
                <div className="space-y-2 mb-8">
                  <div className="w-full h-2 bg-slate-200 rounded" />
                  <div className="w-full h-2 bg-slate-200 rounded" />
                  <div className="w-4/5 h-2 bg-slate-200 rounded" />
                </div>

                <div className="w-1/3 h-4 bg-slate-300 rounded mb-4" />
                <div className="space-y-2">
                  <div className="w-full h-2 bg-slate-200 rounded" />
                  <div className="w-full h-2 bg-slate-200 rounded" />
                  <div className="w-3/4 h-2 bg-slate-200 rounded" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-medium rounded-lg shadow-lg hover:bg-slate-50 transition-colors">
                  <Download size={18} />
                  Download PDF
                </button>
              </div>
            </div>
          </motion.div>

          {/* Highlights & Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-indigo-500" />
                Resume Highlights
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                A summary of my professional expertise, focusing on systems architecture, full-stack application development, and data-driven solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Backend Systems Engineering</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Designing resilient APIs and microservices using Java (Spring Boot) and Node.js.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Data Engineering & Analytics</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Processing and analyzing datasets utilizing Python, Pandas, and NumPy.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Modern Frontend Integration</h4>
                  <p className="text-sm text-slate-500 font-light mt-1">Building responsive, high-performance user interfaces with React and Tailwind CSS.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-sm w-full sm:w-auto justify-center">
                <Download size={18} />
                Download Full Resume
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
