
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Globe, Shield, BarChart3, Zap, Users } from "lucide-react";

const Benefits = () => {
  const investorBenefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Passive Income from Real Assets",
      description: "Earn steady returns from premium commercial real estate without the hassle of property management."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Exposure with Liquidity",
      description: "Access real estate markets with the flexibility to trade your holdings when you need to."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Full Regulatory Compliance",
      description: "Invest with confidence knowing all offerings are SEC and FINRA compliant."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      title: "24/7 Transparency",
      description: "Track ownership, payouts, and performance in real-time through our blockchain-powered platform."
    }
  ];

  const ownerBenefits = [
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Raise Capital Faster",
      description: "Access global pools of investors and streamline your fundraising process with digital efficiency."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Reach More Investors Globally",
      description: "Break geographical barriers and tap into international investment markets."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Offer Liquidity — Unique Differentiator",
      description: "Provide investors with liquidity options that traditional CRE cannot match."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Automate Operations",
      description: "No more manual cap tables or distribution headaches — smart contracts handle everything."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🌟 Key Benefits
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Built for{" "}
            <span className="text-blue-600">Everyone</span>
          </h2>
        </div>

        <Tabs defaultValue="investors" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-white border border-slate-200 p-1">
            <TabsTrigger value="investors" className="text-lg font-medium">For Investors</TabsTrigger>
            <TabsTrigger value="owners" className="text-lg font-medium">For Property Owners/Developers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="investors">
            <div className="grid md:grid-cols-2 gap-8">
              {investorBenefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="owners">
            <div className="grid md:grid-cols-2 gap-8">
              {ownerBenefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Benefits;
