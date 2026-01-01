import { Mail, MapPin } from "lucide-react";
import { BsTwitterX, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            Let&apos;s Build <span className="text-for-border">Together</span>
          </h1>

          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Ready to collaborate on the future of Web3 and digital innovation?
            Reach out to us.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="flex items-center gap-4 pl-4 pr-20  py-4  rounded-xl glass">
            <div className="w-12 h-12 rounded-lg bg-for-border/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-for-border" />
            </div>

            <div>
              <h4 className="font-semibold text-white">Email Us</h4>
              <a
                href="mailto:info@akanolabs.com"
                className="text-muted-foreground hover:text-for-border transition-colors"
              >
                info@akanolabs.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center text-nowrap gap-4 pl-4 pr-20 py-4 rounded-xl glass">
            <div className="w-12 h-12 rounded-lg bg-for-border/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-for-border" />
            </div>

            <div>
              <h4 className="font-semibold text-white">Global Reach</h4>
              <p className="text-muted-foreground">Building for the World</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://x.com/AkanoLabs"
            target="_blank"
            className="w-10 h-10 transition-all hover:scale-110
          hover:border-blue-400/60
  hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] rounded-lg border border-border/60 flex items-center justify-center text-white glass-card "
            aria-label="Twitter"
          >
            <BsTwitterX />
          </a>

          <a
            href="https://www.instagram.com/akanolabs?igsh=MWo5dGxzejkyc2dpdw=="
            target="_blank"
            className="w-10 h-10 rounded-lg border border-border/60 flex items-center justify-center text-white glass-card  transition-all
        hover:scale-110
          hover:border-blue-400/60
  hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            aria-label="Instagram"
          >
            <BsInstagram />
          </a>

          
        </div>
      </div>
    </section>
  );
}
