import Hero from "../components/Hero";
import HeroSearch from "../components/HeroSearch";
import AboutPreview from "../components/AboutPreview";
import FeaturedProjects from "../components/FeaturedProjectsSection";
import AssociationsSection from "../components/AssociationsSection";
import PressMedia from "../components/PressMediaSection";
import NriCornerSection from "../components/NriCornerSection";
import ContactCTA from "../components/ContactCTA";
import PressMediaSection from "../components/PressMediaSection";
import StatsSection from "../components/StatsSection";
import Reveal from "../components/Reveal";

function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <HeroSearch />
      <Reveal>
  <AboutPreview />
</Reveal>
<Reveal>
  <FeaturedProjects />
</Reveal>
      <Reveal>
        <AssociationsSection />
      </Reveal>
      <Reveal>
        <PressMediaSection />
      </Reveal>
      <Reveal>
        <NriCornerSection />
      </Reveal>
      
      <ContactCTA />
    </>
  );
}

export default Home;