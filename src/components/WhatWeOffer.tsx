
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building2, Users, TrendingUp } from "lucide-react";

const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🏗️ What We Offer — Private & Public Real Estate Tokenization
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Invest in Commercial Real Estate.{" "}
            <span className="text-blue-600">Your Way.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At ReTokenize, we empower investors and property owners with a secure, streamlined, and compliant platform to tokenize real estate. Whether you're a private accredited investor or a public investor, you can now own fractional shares in income-generating properties — with the liquidity, transparency, and automation that blockchain technology enables.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Private Investors */}
          <Card className="border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-blue-50">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                For Private Investors
              </CardTitle>
              <p className="text-blue-600 font-semibold">Reg D (506c)</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Access exclusive private commercial real estate deals.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Invest alongside accredited investors in high-yield assets.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Enjoy rental income distributions and long-term property appreciation.</p>
              </div>
            </CardContent>
          </Card>

          {/* Public Investors */}
          <Card className="border-2 border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-indigo-50">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                For Public Investors
              </CardTitle>
              <p className="text-indigo-600 font-semibold">Reg CF & Reg A+</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Fractional real estate ownership starting as low as <span className="font-semibold text-indigo-600">$500</span>.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Earn passive income from institutional-grade properties.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Trade tokens on regulated secondary markets for liquidity.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
