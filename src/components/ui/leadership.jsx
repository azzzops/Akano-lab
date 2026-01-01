import { Quote, ExternalLink, Award, Users, Rocket, BookOpen, Instagram} from 'lucide-react';
import { BsTelegram, BsTiktok, BsTwitterX, BsLinkedin} from "react-icons/bs";
import { TbBrandLinktree } from 'react-icons/tb';

import { div } from 'motion/react-client';
import FounderImage from "../../assets/IMG-20251222-WA0017.jpg"

const socials = [
  { href: "https://www.instagram.com/ludethelegend?igsh=NnU2MG45bnUzMG1z", icon: Instagram, label: "Instagram" },
  { href: "https://x.com/ludethelegend", icon: BsTwitterX, label: "Twitter" },
  { href: "https://www.tiktok.com/@ludethelegend?_r=1&_t=ZS-92ibqL0vRdI ", icon: BsTiktok, label: "TikTok" },
  { href: "https://t.me/ludethelegend_portfolio ", icon: BsTelegram, label: "Telegram" },
  { href: "https://linktr.ee/Waliullahi", icon: TbBrandLinktree, label: "Linktree" },
  { href: "https://www.linkedin.com/in/oyelude-waliullahi-26a686368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: BsLinkedin, label: "Linkedin" },
];

const accomplishments = [
  { icon: BookOpen, text: 'Founded Ìmòforge Academy with a fast-growing global alumni network' },
  { icon: Rocket, text: 'Developed SafepinBot, an upcoming Web3 project' },
  { icon: Users, text: 'Mentored hundreds of learners in blockchain, Web3, and DeFi' },
  { icon: Award, text: 'Recognized by Jupiter Nigeria, TradeWizBot, and GMGN' },
];

export default function Founder(){

    return(
        <>
        <div className='flex flex-col gap-4 '>
            <div>
                <p className='text-center text-white md:text-5xl text-2xl font-bold'>Meet the <span>Founder</span></p>
            </div>
            <div className='flex glass p-5 rounded-xl flex-col justify-between mt-5 items-center xl:flex-row gap-9'>
                <div className='founder glass-card p-5   max-w-110 rounded-2xl'>
                    <div className='w-full relative'>
                        <div className='absolute inset-0 max-w-full bg-black/50 rounded-2xl'></div>
                        <img src={FounderImage} className='w-full h-full object-cover object-center rounded-2xl' alt="The Founder" />
                    </div>
                </div>
                <div className='flex flex-col gap-8 max-w-150'>
                    <div>
                        <h1 className='text-white/80 md:text-3xl text-2xl'>Oyelude Waliullahi</h1>
                        <p className='text-default-font font-bold'>Founder & Director, Àkàńó Labs</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Quote className="text-for-border" size={40} />
                        <p className="text-lg text-muted-foreground italic">
                          "Skilled individuals and technology will transform the world."
                        </p>
                    </div>
                    <p className='text-default-font'>
                        Oyelude Waliullahi is a <span className="">Blockchain Data Analyst,
                        DeFi Tool Developer, Trader, and Cybersecurity Student</span>, passionate about building innovative
                        tools, developing talent, and shaping the future of digital technologies.
                    </p>
                    <p className='text-default-font'>
                         As the Founder & Director of Àkàńó Labs, he leads a global innovation hub creating data-driven
                        products, automation tools, and educational platforms across Web3, digital finance, and emerging
                        technologies.
                    </p>
                    <div className='grid grid-cols-1 gap-2.5 md:grid-cols-2'>
                        {
                            accomplishments.map(t => <div className='flex items-center gap-4' >
                                <div>{< t.icon size={29} className='text-for-border' />}</div>
                                <div className='text-default-font'>{t.text}</div>
                            </div>)
                        }
                    </div>

                    <div className='flex items-center justify-center flex-col gap-4'>
                        <p className='text-white flex gap-2 items-center text-center text-xl'><span>Connect with me</span> <ExternalLink size={15} /></p>
                       <div className="flex gap-5 items-center">
  {socials.map(({ href, icon: Icon, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      aria-label={label}
      className="
        w-12 h-12
        rounded-lg
        border border-border/60
        flex items-center justify-center
        text-white
        glass-card
        transition-all
        hover:scale-110
          hover:border-blue-400/60
  hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]
      "
    >
      <Icon className="w-6 h-6" />
    </a>
  ))}
</div>
                    </div>
                </div>
            </div>
            <div>
                <blockquote className="text-xl md:text-2xl text-default-font max-w-3xl mx-auto">
                    "At Àkàńó Labs, we build tools that solve real problems, train builders who can create,
                    and cultivate a community that can innovate globally."
                </blockquote>
            </div>
        </div>
        </>
    )
}