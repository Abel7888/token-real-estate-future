
import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Benefits from "@/components/Benefits";
import PoweredBy from "@/components/PoweredBy";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Hero />
      <WhatWeOffer />
      <HowItWorks />
      <Comparison />
      <Benefits />
      <PoweredBy />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
