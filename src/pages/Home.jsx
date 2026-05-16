import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12 animate-in fade-in duration-700">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Hi, I'm <span className="text-indigo-600">Your Name</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
          A passionate software engineer specializing in building modern, exceptional, high-quality digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link 
            to="/projects"
            className="group flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/contact"
            className="flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
