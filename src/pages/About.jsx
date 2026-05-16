const About = () => {
  return (
    <div className="py-12 animate-in fade-in duration-500 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">About Me</h1>
      
      <div className="space-y-12">
        {/* Bio Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Bio</h2>
          <div className="space-y-4 text-slate-600 font-light leading-relaxed">
            <p className="h-4 w-full bg-slate-100 rounded animate-pulse"></p>
            <p className="h-4 w-11/12 bg-slate-100 rounded animate-pulse"></p>
            <p className="h-4 w-full bg-slate-100 rounded animate-pulse"></p>
            <p className="h-4 w-3/4 bg-slate-100 rounded animate-pulse"></p>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="h-10 w-24 bg-slate-100 rounded-full animate-pulse"></div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Experience</h2>
          <div className="space-y-8">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 shrink-0"></div>
                <div className="flex-grow space-y-3 pt-1">
                  <div className="h-5 w-1/3 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-4 w-1/4 bg-slate-100 rounded animate-pulse"></div>
                  <div className="h-20 w-full bg-slate-50 rounded animate-pulse mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
