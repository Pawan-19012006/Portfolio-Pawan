const Projects = () => {
  // Placeholder array for future projects
  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <div className="py-12 animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Selected Works</h1>
        <p className="text-lg text-slate-600 font-light max-w-2xl">
          A collection of projects I've worked on. Ranging from web applications to open-source tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholders.map((item) => (
          <div 
            key={item} 
            className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-slate-100 w-full group-hover:scale-105 transition-transform duration-500 ease-in-out"></div>
            
            {/* Content Placeholder */}
            <div className="p-6 flex-grow flex flex-col bg-white relative z-10">
              <div className="h-6 w-3/4 bg-slate-200 rounded animate-pulse mb-3"></div>
              <div className="h-4 w-full bg-slate-100 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse mb-6"></div>
              
              <div className="mt-auto flex gap-2">
                <div className="h-6 w-16 bg-indigo-50 rounded-full animate-pulse"></div>
                <div className="h-6 w-20 bg-indigo-50 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
