import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is Àkàńó Labs?",
    answer:
      "Àkàńó Labs is a technology and blockchain-focused innovation lab dedicated to education, research, and the development of secure, data-driven products across Web2 and Web3 technologies. We combine learning, experimentation, and real-world building to prepare individuals for the digital and decentralized future."
  },
  {
    id: 2,
    question: "Who is the founder of Àkàńó Labs?",
    answer:
      "Àkàńó Labs was founded by Oyelude Waliullahi, who serves as the Founder and Director. He is a blockchain data analyst, Web3 developer, and researcher focused on building impactful technology products and education systems."
  },
  {
    id: 3,
    question: "What does Àkàńó Labs specialize in?",
    answer: [
      "Web2 Technology (software tools, data systems, automation)",
      "Web3 & Blockchain Technology",
      "Blockchain & On-chain Research",
      "Web3 Development",
      "DeFi, Trading & Market Analysis",
      "Cybersecurity & Wallet Safety",
      "Data Analytics & Automation",
      "Web3 Tools, Bots, and Protocol Research"
    ]
  },
  {
    id: 4,
    question: "Is Àkàńó Labs a school or a company?",
    answer:
      "Àkàńó Labs operates as both an innovation lab that builds and researches technology products, and an education ecosystem through its academy and training programs."
  },
  {
    id: 5,
    question: "What products are currently built by Àkàńó Labs?",
    answer: [
      "Ìmòforge Academy – the official education and training arm",
      "SafepinBot – a Web3 security and trading-safety tool",
      "More Web2 and Web3 products currently in development"
    ]
  },
  {
    id: 6,
    question: "What is Ìmòforge Academy?",
    answer:
      "Ìmòforge Academy is the official education arm of Àkàńó Labs, focused on structured learning, mentorship, and hands-on training in Web2, Web3, blockchain development, data analytics, DeFi, and digital finance."
  },
  {
    id: 7,
    question: "Who can join Ìmòforge Academy?",
    answer: [
      "Complete beginners",
      "Students",
      "Developers",
      "Traders",
      "Researchers",
      "Web3 enthusiasts",
      "Web2 professionals transitioning into Web3"
    ]
  },
  {
    id: 8,
    question: "Do I need prior experience to join the academy?",
    answer:
      "No. Ìmòforge Academy cohorts are beginner-friendly and scalable from beginner to advanced levels, with structured guidance from experienced tutors."
  },
  {
    id: 9,
    question: "How does the academy cohort system work?",
    answer:
      "Ìmòforge Academy runs cohort-based bootcamps. Participants who successfully complete a cohort receive an official certificate and become members of the Ìmòforge Academy Alumni Community."
  },
  {
    id: 10,
    question: "What is the Ìmòforge Academy Alumni Community?",
    answer:
      "The Alumni Community is an exclusive network for certified graduates. Members gain continued learning and mentorship, networking opportunities, and early access to new programs and tools from Àkàńó Labs."
  },
  {
    id: 11,
    question: "When is the next academy cohort starting?",
    answer:
      "The second cohort of Ìmòforge Academy is scheduled to begin in February 2nd, 2026."
  },
  {
    id: 12,
    question: "What is the Academy Waitlist?",
    answer:
      "The Academy Waitlist allows interested participants to receive early notifications, get informed when registration opens, and secure priority access. No immediate payment is required."
  },
  {
    id: 13,
    question: "Are Àkàńó Labs programs online or physical?",
    answer:
      "All programs are currently 100% online, allowing participants from anywhere in the world to join."
  },
  {
    id: 14,
    question: "Do you provide certificates?",
    answer:
      "Yes. Participants who successfully complete eligible programs receive a certificate of completion issued by Ìmòforge Academy under Àkàńó Labs."
  },
  {
    id: 15,
    question: "Does Àkàńó Labs provide financial or investment advice?",
    answer:
      "No. All content is strictly for educational and research purposes only."
  },
  {
    id: 16,
    question: "Can I collaborate or partner with Àkàńó Labs?",
    answer:
      "Yes. Àkàńó Labs is open to collaborations with developers, researchers, organizations, communities, and investors aligned with our mission."
  },
  {
    id: 17,
    question: "Is Àkàńó Labs open to investors?",
    answer:
      "Yes. We welcome discussions with investors interested in supporting technology education, research, and product innovation."
  },
  {
    id: 18,
    question: "How can I contact Àkàńó Labs?",
    answer:
      "You can reach us through the official contact details listed on our website or via our verified social platforms."
  },
  {
    id: 19,
    question: "How do I stay updated?",
    answer: [
      "Join our official community channels",
      "Follow our announcements",
      "Join the Ìmòforge Academy Waitlist"
    ]
  }
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="z-20 max-w-180 glass-subtle w-full p-6 rounded-xl">
      <div className="space-y-2.5 text-center">
        <h1 className="text-center text-white md:text-4xl text-2xl font-bold">Frequently Asked Questions</h1>
        <p className="text-center max-w-md m-auto text-default-font md:text-[16px] text-[16px] font-bold">Everything you need to know about Àkàńó Labs. Can't find the answer you're looking for? <a href="" className="text-for-border">Contact Us</a></p>
      </div>

      {faqs.map((q) => (
        <div key={q.id} className="flex text-xl border-b border-default-font/20 last:border-none flex-col gap-3 p-4">
          <div className="flex items-center gap-5 group text-[16px] md:text-xl justify-between" onClick={() => toggleFaq(q.id)}>
            <span className="text-white md:text-[16px] text-[14px] group-hover:text-for-border">{q.question}</span>
            <button className={`cursor-pointer ${activeIndex === q.id ? " bg-for-border/10" : "bg-white/10" } rounded-full p-1 text-default-font`}>
              {activeIndex === q.id ? <Minus strokeWidth={3}/> : <Plus strokeWidth={3}/>}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {activeIndex === q.id && (
              <motion.div
                initial={{ height: 0, opacity: 0, }}
                animate={{ height: "auto", opacity: 1, }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="overflow-hidden text-white/60 text-[17px]"
              >
                {Array.isArray(q.answer) ? (
                  <ul className="list-disc pl-6">
                    {q.answer.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{q.answer}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
