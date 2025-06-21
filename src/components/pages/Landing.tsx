import {
  Hero,
  Problem,
  HowItWorks,
  Roadmap,
} from "@/components/sections/landing";
import FAQ from "@/components/sections/landing/Faq.tsx";
import Footer from "@/components/molecules/Footer.tsx";
import { Navbar } from "@/components/molecules";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Designed from "@/components/sections/landing/Designed";
import VerticalScoll from "@/components/ui/vertical-scroll-names";
import ScaleVideo from "@/components/ui/ScaleVideo";
import VideoSection from "@/components/ui/VideoSection";
export default function Landing() {
  return (
    <div className="bg-[#01081E]">
      <Navbar />

      <ContainerScroll titleComponent="">
        <Hero />
      </ContainerScroll>

      <Problem />
      <HowItWorks />
      <Designed />
      <ScaleVideo />
      <VerticalScoll />
      <VideoSection />
      {/* <Roadmap /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
