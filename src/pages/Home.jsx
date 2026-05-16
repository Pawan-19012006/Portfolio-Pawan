import HeroSection from "../components/home/HeroSection";
import SkillsSection from "../components/home/SkillsSection";
import ProjectsPreview from "../components/home/ProjectsPreview";
import PhilosophySection from "../components/home/PhilosophySection";
import SEO from "../components/common/SEO";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO title="Pawan Eswaran — Software Developer" />
      <HeroSection />
      <SkillsSection />
      <ProjectsPreview />
      <PhilosophySection />
    </div>
  );
};

export default Home;
