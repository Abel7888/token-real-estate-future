
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400/30 rounded-full"></div>
        <div className="absolute top-40 left-32 w-6 h-6 bg-indigo-400/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-purple-400/25 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-blue-300/15 rounded-full"></div>
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium">
            🔔 Limited Time Opportunity
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Be the First to Join the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Real Estate Revolution
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl mb-12 text-slate-300 leading-relaxed">
            🚀 ReTokenize is launching soon. Don't miss early access to our first tokenized offerings.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 mb-8"
          >
            Join the Waitlist — Register for Early Access
            <ArrowRight className="ml-4 h-6 w-6" />
          </Button>
          
          <p className="text-slate-400 text-lg">
            Limited early spots available for both investors and property owners.
          </p>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm">SEC Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm">FINRA Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-sm">Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
