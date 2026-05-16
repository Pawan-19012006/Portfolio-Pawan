import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "../data/projects";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectFilter from "../components/projects/ProjectFilter";
import FeaturedProjectCard from "../components/projects/FeaturedProjectCard";
import OtherProjectCard from "../components/projects/OtherProjectCard";
import GithubCTA from "../components/projects/GithubCTA";
import SEO from "../components/common/SEO";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchLower));
        
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Separate into featured and other for rendering
  const featuredProjects = filteredProjects.filter(p => p.isFeatured);
  const otherProjects = filteredProjects.filter(p => !p.isFeatured);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <SEO 
        title="Projects & Engineering Work — Pawan Eswaran" 
        description="A showcase of full-stack platforms, system architectures, and developer tools built by Pawan Eswaran." 
      />
      
      <ProjectsHero totalProjects={PROJECTS_DATA.length} />
      
      <ProjectFilter 
        categories={PROJECT_CATEGORIES}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex flex-col space-y-12 pb-24">
        
        {/* Featured Projects List */}
        {featuredProjects.length > 0 && (
          <div className="flex flex-col">
            <AnimatePresence mode="popLayout">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <FeaturedProjectCard project={project} index={idx} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div className="pt-16 border-t border-slate-100">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-slate-900 mb-8"
            >
              More Projects
            </motion.h3>
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {otherProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OtherProjectCard project={project} index={idx} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center"
          >
            <p className="text-xl text-slate-500 font-light">
              No projects found matching your criteria.
            </p>
            <button 
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-6 text-indigo-600 font-medium hover:text-indigo-700 underline underline-offset-4"
            >
              Clear filters
            </button>
          </motion.div>
        )}
        
      </div>

      <GithubCTA />

    </div>
  );
};

export default Projects;
