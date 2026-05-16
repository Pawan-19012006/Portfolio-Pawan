import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Briefcase, MessageCircle, ArrowLeft } from 'lucide-react';

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative w-full min-h-screen text-white flex flex-col font-sans selection:bg-slate-500 selection:text-white">
      
      {/* Fixed Navigation Elements - Z-50 */}
      <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between p-6 md:p-8">
        
        {/* TOP ROW */}
        <div className="flex justify-between items-start w-full relative">
          {/* Top Left: Logo */}
          <Link to="/" className="pointer-events-auto">
            <h1 className="font-serif italic text-3xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
              PE
            </h1>
          </Link>

          {/* Top Center: Back Button (Only visible if not on Home) */}
          <AnimatePresence>
            {!isHome && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-auto"
              >
                <Link to="/" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <ArrowLeft size={20} strokeWidth={2.5} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Top Right: Contact/Say hi */}
          <Link to="/contact" className="pointer-events-auto flex items-center group">
            <span className={`${isHome ? "text-black" : "text-white"} font-bold text-sm tracking-widest uppercase hover:underline decoration-2 underline-offset-4 transition-colors`}>
              Say hi..
            </span>
          </Link>
        </div>

        {/* MIDDLE SECTION: Edge Rotated Text */}
        <div className="absolute inset-y-0 left-6 md:left-8 flex items-center pointer-events-none">
          <div className="flex flex-col gap-24">
            <Link to="/projects" className="pointer-events-auto vertical-text text-sm font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/experience" className="pointer-events-auto vertical-text text-sm font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors">
              Experience
            </Link>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between items-end w-full">
          {/* Bottom Left: Socials */}
          <div className="flex flex-col items-center gap-6 pointer-events-auto">
            <a href="https://www.linkedin.com/in/pawan-eswaran-9ab4a130b/" target="_blank" rel="noreferrer" className="text-white hover:text-white/70 transition-colors">
              <Briefcase size={18} />
            </a>
            <a href="https://github.com/Pawan-19012006" target="_blank" rel="noreferrer" className="text-white hover:text-white/70 transition-colors">
              <GitBranch size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-white/70 transition-colors">
              <MessageCircle size={18} />
            </a>
            <div className="w-[1px] h-16 bg-white/30 mt-2" />
          </div>

          {/* Bottom Right: Navigation & Decorative */}
          <div className="flex items-center gap-6 pointer-events-auto">
            <Link to="/skills" className={`${isHome ? "text-black hover:text-black/70" : "text-white/50 hover:text-white"} text-sm font-black tracking-widest uppercase transition-colors`}>
              My Skills
            </Link>
            
            <div className={`w-12 h-12 rounded-full border-2 ${isHome ? "border-black" : "border-white"} flex items-center justify-center overflow-hidden bg-black relative shadow-xl hover:scale-110 transition-transform cursor-pointer`}>
              <div className={`absolute inset-y-0 left-0 w-1/2 ${isHome ? "bg-black" : "bg-white"}`} />
              <div className={`absolute top-0 inset-x-0 h-1/2 ${isHome ? "bg-black" : "bg-white"} rounded-full translate-y-1/2 flex items-center justify-center z-10`}>
                <div className={`w-2 h-2 ${isHome ? "bg-white" : "bg-black"} rounded-full`} />
              </div>
              <div className={`absolute bottom-0 inset-x-0 h-1/2 ${isHome ? "bg-white" : "bg-black"} rounded-full -translate-y-1/2 flex items-center justify-center z-10`}>
                <div className={`w-2 h-2 ${isHome ? "bg-black" : "bg-white"} rounded-full`} />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Content Area - Z-20 */}
      <div className="relative z-20 w-full min-h-screen flex flex-col pointer-events-auto bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex-grow flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default MainLayout;
