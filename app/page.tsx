import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Capabilities from "@/components/Capabilities";
import GrowthFramework from "@/components/GrowthFramework";
import ClientResults from "@/components/ClientResults";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0B0B0B] text-[#F7F7F5]">
      <Navbar />
      <Hero />
      <SelectedWork />
      <Capabilities />
      <GrowthFramework />
      <ClientResults />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
