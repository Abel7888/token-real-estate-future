
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Cpu, Globe } from "lucide-react";

const PoweredBy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🛠️ Enterprise Grade Infrastructure
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Powered by Securitize.{" "}
            <span className="text-blue-600">Built for You.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ReTokenize leverages enterprise-grade, SEC-registered blockchain infrastructure to ensure your investment is secure, compliant, and future-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">SEC Registered</h3>
              <p className="text-slate-600">Fully compliant with securities regulations and registered with the SEC for maximum investor protection.</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 text-center bg-gradient-to-br from-green-50 to-blue-50">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Blockchain Powered</h3>
              <p className="text-slate-600">Advanced smart contracts automate compliance, distributions, and record-keeping with unmatched transparency.</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 text-center bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Access</h3>
              <p className="text-slate-600">Connect investors and property owners worldwide through our secure, scalable digital infrastructure.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
