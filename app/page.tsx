import HeroSection from "@/components/herosection";
import NavBar from "../components/navbar";
import Faqs from "../components/faqs";
import Community from "@/components/community";
import DownloadSection from "@/components/downloadsection";
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
