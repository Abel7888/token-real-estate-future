
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, CheckCircle } from "lucide-react";

const Comparison = () => {
  const comparisons = [
    {
      traditional: {
        text: "High minimums ($50K–$250K)",
        icon: <X className="h-5 w-5 text-red-500" />
      },
      tokenized: {
        text: "Invest from as low as $500",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />
      }
    },
    {
      traditional: {
        text: "Locked for 5–10 years",
        icon: <X className="h-5 w-5 text-red-500" />
      },
      tokenized: {
        text: "Liquidity via secondary markets",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />
      }
    },
    {
      traditional: {
        text: "Paper contracts, slow onboarding",
        icon: <X className="h-5 w-5 text-red-500" />
      },
      tokenized: {
        text: "Digital onboarding in minutes",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />
      }
    },
    {
      traditional: {
        text: "Manual payouts",
        icon: <X className="h-5 w-5 text-red-500" />
      },
      tokenized: {
        text: "Automated distributions",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />
      }
    },
    {
      traditional: {
        text: "Opaque ownership",
        icon: <X className="h-5 w-5 text-red-500" />
      },
      tokenized: {
        text: "Transparent blockchain records",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            💡 Why ReTokenize?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Traditional vs{" "}
            <span className="text-blue-600">Tokenized</span> Real Estate
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional CRE */}
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
              <CardHeader className="text-center border-b border-red-200">
                <CardTitle className="text-2xl font-bold text-red-700 flex items-center justify-center">
                  <X className="mr-2 h-6 w-6" />
                  Traditional CRE
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-red-100">
                    {item.traditional.icon}
                    <span className="text-slate-700">{item.traditional.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tokenized CRE */}
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 The Future
                </div>
              </div>
              <CardHeader className="text-center border-b border-green-200 pt-8">
                <CardTitle className="text-2xl font-bold text-green-700 flex items-center justify-center">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Tokenized CRE with ReTokenize
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                    {item.tokenized.icon}
                    <span className="text-slate-700 font-medium">{item.tokenized.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
