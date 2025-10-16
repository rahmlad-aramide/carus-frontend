import NavBar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import Community from "@/components/community";
import Faqs from "@/components/faqs";
import DownloadSection from "@/components/download-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Community />
      <Faqs />
      <DownloadSection />
      <Footer />
    </div>
  );
}
