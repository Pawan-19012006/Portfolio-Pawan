import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-black text-white relative px-6 py-24">
      <SEO title="Contact — Pawan Eswaran" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full text-center relative z-10"
      >
        <span className="inline-block mb-8 text-sm font-bold tracking-[0.3em] uppercase text-white/50">
          Get in touch
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
          Let's build something <br className="hidden md:block" /> meaningful together.
        </h1>

        <p className="text-lg text-white/60 font-light mb-16 max-w-xl mx-auto leading-relaxed">
          I'm currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:pawaneswaran19@gmail.com" 
            className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden font-bold tracking-wide uppercase text-sm w-full md:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send an Email <ArrowUpRight size={16} />
            </span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/pawan-eswaran-9ab4a130b/" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full hover:bg-white/5 hover:border-white/40 transition-colors font-bold tracking-wide uppercase text-sm w-full md:w-auto flex items-center justify-center gap-2"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>

    </div>
  );
};

export default Contact;
