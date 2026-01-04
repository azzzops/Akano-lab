import { Target } from "lucide-react";
import { Link } from "react-router";

const footerLinks = {
  company: [
    { label: 'About', href: '#about' },
    { label: 'Vision', href: '#vision' },
    { label: 'Products', href: '#product' },
    { label: 'Founder', href: '#founder' },
  ],
  connect: [
    { label: 'Contact', href: '#contact' },
    { label: 'Twitter / X', href: 'https://x.com/AkanoLabs' },
    { label: 'Instagram', href: 'https://www.instagram.com/akanolabs?igsh=MWo5dGxzejkyc2dpdw==' },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Inner container */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#" className="text-2xl font-bold tracking-tight">
              <span className="text-white">Àkàńó</span>
              <span className="text-white"> Labs</span>
            </a>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Building tools, talent, and the future of Web3 and digital technologies.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href} target={link.label !== "Contact" ? "_blank" : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-default-font flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Àkàńó Labs. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/condition" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
