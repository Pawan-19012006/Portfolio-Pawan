import AboutHero from "../components/about/AboutHero";
import PhilosophyCards from "../components/about/PhilosophyCards";
import TechStack from "../components/about/TechStack";
import EngineeringTimeline from "../components/about/EngineeringTimeline";
import ResumeSection from "../components/about/ResumeSection";
import WorkflowEnvironment from "../components/about/WorkflowEnvironment";
import ThoughtsPreview from "../components/about/ThoughtsPreview";
import AboutCTA from "../components/about/AboutCTA";
import SEO from "../components/common/SEO";

const About = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <SEO 
        title="About — Pawan Eswaran" 
        description="Learn more about my engineering philosophy, technical journey, and the tools I use to build scalable systems." 
      />
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
