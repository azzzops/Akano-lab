import { Link } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
export default function Condition() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center p-10 justify-center overflow-hidden"
        style={{ background: "var(--gradient-subtle)" }}
      >
        <div className="absolute inset-0 grid-background"></div>
        <div className="max-w-200 space-y-2 glass-card p-5 md:p-9 rounded-xl">
          <Link
            to="/"
            className="flex gap-1 text-[18px] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] md:text-xl items-center glass w-fit p-2 text-white rounded-xl"
          >
            {" "}
            <ArrowLeftIcon /> <span>Go Back</span>
          </Link>
          <h1 className="text-white text-2xl md:text-[28px] ">
            Terms & Conditions
          </h1>
          <p className="text-default-font text-[16px] md:text-xl">
            Welcome to Àkàńó Labs. By accessing or using this website, you agree
            to the following terms. Purpose All content and materials provided
            by Àkàńó Labs are for educational and informational purposes only.
            Àkàńó Labs does not provide financial, investment, or trading
            advice. Risk Disclaimer Blockchain, DeFi, and trading involve risk.
            Any actions taken based on information from this website are
            entirely the user’s responsibility. Intellectual Property All
            content on this website belongs to Àkàńó Labs and may not be copied
            or reused without permission. Changes to Content Content on this
            website may be updated at any time without prior notice. Acceptance
            of Terms By using this website or contacting Àkàńó Labs via email,
            you agree to these Terms & Conditions.
          </p>
          <p className="text-default-font text-[16px] md:text-xl">
            {" "}
           Contact For questions regarding these terms, contact:{" "}
            <a href="mailto:info@akanolabs.com" className="text-primary">
              info@akanolabs.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
