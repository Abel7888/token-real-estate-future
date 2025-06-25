
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowItWorks = () => {
  const investorSteps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Complete a quick KYC/AML check.",
      icon: "👤"
    },
    {
      number: "2", 
      title: "Choose an Offering",
      description: "Select from private or public deals.",
      icon: "🏢"
    },
    {
      number: "3",
      title: "Invest Digitally",
      description: "Purchase tokens representing property shares.",
      icon: "💰"
    },
    {
      number: "4",
      title: "Earn Income",
      description: "Get monthly/quarterly rental income payouts.",
      icon: "📈"
    },
    {
      number: "5",
      title: "Sell Anytime",
      description: "Trade tokens for liquidity or hold until property sale.",
      icon: "🔄"
    }
  ];

  const ownerSteps = [
    {
      number: "1",
      title: "Tokenize Your Asset",
      description: "Digitize your property equity.",
      icon: "🏗️"
    },
    {
      number: "2",
      title: "Raise Capital Faster",
      description: "Access global investor pools.",
      icon: "🌍"
    },
    {
      number: "3",
      title: "Automate Compliance",
      description: "KYC, AML, cap table, and payouts handled by smart contracts.",
      icon: "⚙️"
    },
    {
      number: "4",
      title: "Offer Liquidity",
      description: "Differentiate with secondary trading options.",
      icon: "💧"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            ⚙️ How It Works — Step by Step
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Simple Steps to{" "}
            <span className="text-blue-600">Get Started</span>
          </h2>
        </div>

        <Tabs defaultValue="investors" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-white border border-slate-200 p-1">
            <TabsTrigger value="investors" className="text-lg font-medium">For Investors</TabsTrigger>
            <TabsTrigger value="owners" className="text-lg font-medium">For Property Owners & Developers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="investors">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {investorSteps.map((step, index) => (
                <Card key={index} className="relative border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">
                      {step.number}
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center">{step.description}</p>
                  </CardContent>
                  {index < investorSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-blue-100 rotate-45 border-r border-b border-blue-300"></div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="owners">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ownerSteps.map((step, index) => (
                <Card key={index} className="relative border-2 border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">
                      {step.number}
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center">{step.description}</p>
                  </CardContent>
                  {index < ownerSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-indigo-100 rotate-45 border-r border-b border-indigo-300"></div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;
