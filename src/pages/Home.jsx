import HeroSection from "../components/home/HeroSection";
import SkillsSection from "../components/home/SkillsSection";
import ProjectsPreview from "../components/home/ProjectsPreview";
import PhilosophySection from "../components/home/PhilosophySection";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <SkillsSection />
      <ProjectsPreview />
      <PhilosophySection />
    </div>
  );
};

export default Home;
