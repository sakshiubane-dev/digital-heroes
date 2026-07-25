import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const SelectedWork = dynamic(() => import("@/components/SelectedWork"), { ssr: true });
const Capabilities = dynamic(() => import("@/components/Capabilities"), { ssr: true });
const GrowthFramework = dynamic(() => import("@/components/GrowthFramework"), { ssr: true });
const ClientResults = dynamic(() => import("@/components/ClientResults"), { ssr: true });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

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
