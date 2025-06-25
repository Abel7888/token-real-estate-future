
import { Button } from "@/components/ui/button";
import { ArrowRight, Unlock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-indigo-400/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-400/25 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-blue-300/15 rounded-full"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium">
            🏗️ Revolutionary Real Estate Investment Platform
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
            ReTokenize
          </h1>
          
          <p className="text-xl lg:text-2xl font-semibold mb-4 text-blue-100">
            The Future of Real Estate Investing
          </p>
          
          <p className="text-lg lg:text-xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">Fractional ownership.</span>{" "}
            <span className="font-semibold text-white">Passive income.</span>{" "}
            <span className="font-semibold text-white">Global access.</span>
            <br className="hidden lg:block" />
            Own a piece of premium commercial real estate — fully digitized, fully compliant, fully yours.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            <Unlock className="mr-3 h-5 w-5" />
            Coming Soon — Register for Early Access
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          
          <p className="mt-6 text-sm text-slate-400">
            Limited early spots available for both investors and property owners
          </p>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
