
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerLinks = {
    company: ["About", "How It Works", "FAQs", "Contact"],
    legal: ["Terms", "Privacy", "Compliance", "Disclosures"],
    social: ["LinkedIn", "Twitter", "Email"]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              ReTokenize
            </h3>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Democratizing commercial real estate investment through blockchain technology. 
              Secure, compliant, and accessible for everyone.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-sm font-medium">{social.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-700 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2025 ReTokenize — All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs text-slate-500">
            <span>🔐 SEC Registered</span>
            <span>🛡️ FINRA Compliant</span>
            <span>🔗 Blockchain Secured</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-slate-800 rounded-lg">
          <p className="text-xs text-slate-400 text-center leading-relaxed">
            This is not an offer to sell securities. All investments involve risk and may result in loss. 
            Past performance does not guarantee future results. Please read all offering documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
