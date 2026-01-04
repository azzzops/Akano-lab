import { Link } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
export default function PrivacyPage() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center p-10 justify-center overflow-hidden"
        style={{ background: "var(--gradient-subtle)" }}
      >
        <div className="absolute inset-0 grid-background"></div>
        <div className="max-w-200 space-y-2 glass-card p-5 md:p-9 rounded-xl">
            <Link to="/" className="flex gap-1 text-[18px] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] md:text-xl items-center glass w-fit p-2 text-white rounded-xl"> <ArrowLeftIcon /> <span>Go Back</span></Link>
          <h1 className="text-white text-2xl md:text-[28px] ">Privacy Policy</h1>
          <p className="text-default-font text-[16px] md:text-xl">
            At Àkàńó Labs, we respect your privacy and are committed to
            transparency. Information We Collect Àkàńó Labs does not
            automatically collect, store, or process any personal information
            from visitors to this website. The website is fully static and does
            not use contact forms, user accounts, cookies, or tracking
            technologies. If a visitor chooses to contact us directly via the
            email address provided on this website, we may receive the
            information voluntarily included in the email. How We Use
            Information Any information shared via email is used only to respond
            to messages or inquiries. We do not sell, rent, or share personal
            information with third parties. Data Protection We take reasonable
            steps to keep any received communication secure and confidential.
            Third-Party Services Àkàńó Labs does not use third-party tools to
            collect user data on this website. Your Consent By using this
            website, you agree to this Privacy Policy.
          </p>
          <p className="text-default-font text-[16px] md:text-xl"> Contact Us For questions
            about this Privacy Policy, contact: <a href="mailto:info@akanolabs.com" className="text-primary">info@akanolabs.com</a></p>
        </div>
      </section>
    </>
  );
}
