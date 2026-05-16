import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Briefcase, MessageCircle, ArrowLeft } from 'lucide-react';

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white flex select-none font-sans">
      
      {/* 50/50 Split Background */}
      <div className="absolute inset-0 flex w-full h-full z-0 pointer-events-none">
        <div className="w-[50vw] h-full bg-[#0a0a0a]" />
        <div className="w-[50vw] h-full bg-[#f4f4f4]" />
      </div>

      {/* Pinned Navigation Elements - Z-10 */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6 md:p-8">
        
        {/* TOP ROW */}
        <div className="flex justify-between items-start w-full">
          {/* Top Left: Logo */}
          <Link to="/" className="pointer-events-auto">
            <h1 className="font-serif italic text-3xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
              PE
            </h1>
          </Link>

          {/* Top Right: Contact/Say hi */}
          <Link to="/contact" className="pointer-events-auto flex items-center gap-2 group">
            {location.pathname !== '/' && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white text-black rounded-full p-1 mr-2 flex items-center justify-center"
              >
                <ArrowLeft size={16} strokeWidth={3} />
              </motion.div>
            )}
            <span className="text-black font-semibold text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-4">
              Say hi..
            </span>
          </Link>
        </div>

        {/* MIDDLE SECTION: Edge Rotated Text */}
        <div className="absolute inset-y-0 left-6 md:left-8 flex items-center pointer-events-none">
          <div className="flex flex-col gap-24">
            <Link to="/work" className="pointer-events-auto vertical-text text-sm font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/about" className="pointer-events-auto vertical-text text-sm font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="absolute inset-y-0 right-6 md:right-8 flex items-center pointer-events-none">
          <div className="flex flex-col">
             <span className="pointer-events-auto vertical-text text-sm font-bold tracking-widest uppercase text-black/50 hover:text-black transition-colors cursor-pointer">
              Feats
            </span>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between items-end w-full">
          {/* Bottom Left: Socials */}
          <div className="flex flex-col items-center gap-6 pointer-events-auto">
            <a href="https://linkedin.com/in/pawaneswaran" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <Briefcase size={18} />
            </a>
            <a href="https://github.com/Pawan-19012006" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <GitBranch size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <MessageCircle size={18} />
            </a>
            <div className="w-[1px] h-16 bg-white/30 mt-2" />
          </div>

          {/* Bottom Center: Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-32 pointer-events-none">
            <Link to="/about" className="pointer-events-auto text-sm font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors">
              About
            </Link>
            <span className="pointer-events-auto text-sm font-bold tracking-widest uppercase text-black/50 hover:text-black transition-colors cursor-pointer">
              My Skills
            </span>
          </div>

          {/* Bottom Right: Yin-Yang / Theme Toggle icon (visual only) */}
          <div className="pointer-events-auto">
            <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center overflow-hidden bg-black relative shadow-xl hover:scale-110 transition-transform cursor-pointer">
              {/* Simple Yin-Yang CSS representation */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
              <div className="absolute top-0 inset-x-0 h-1/2 bg-white rounded-full translate-y-1/2 flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-black rounded-full -translate-y-1/2 flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Content Area - Z-20 */}
      <div className="relative z-20 w-full h-full flex items-center justify-center p-8 md:p-16 lg:p-24 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full pointer-events-auto flex items-center justify-center"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default MainLayout;
