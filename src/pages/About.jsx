import AboutHero from "../components/about/AboutHero";
import PhilosophyCards from "../components/about/PhilosophyCards";
import TechStack from "../components/about/TechStack";
import EngineeringTimeline from "../components/about/EngineeringTimeline";
import ResumeSection from "../components/about/ResumeSection";
import WorkflowEnvironment from "../components/about/WorkflowEnvironment";
import ThoughtsPreview from "../components/about/ThoughtsPreview";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <AboutHero />
      <PhilosophyCards />
      <TechStack />
      <EngineeringTimeline />
      <WorkflowEnvironment />
      <ResumeSection />
      <ThoughtsPreview />
      <AboutCTA />
    </div>
  );
};

export default About;
