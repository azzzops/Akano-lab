import { Quote, ExternalLink, Award, Users, Rocket, BookOpen } from 'lucide-react';
import { div } from 'motion/react-client';

const accomplishments = [
  { icon: BookOpen, text: 'Founded Ìmòforge Academy with a fast-growing global alumni network' },
  { icon: Rocket, text: 'Developed SafepinBot, an upcoming Web3 project' },
  { icon: Users, text: 'Mentored hundreds of learners in blockchain, Web3, and DeFi' },
  { icon: Award, text: 'Recognized by Jupiter Nigeria, TradeWizBot, and GMGN' },
];

export default function Founder(){

    return(
        <>
        <div>
            <h1>LEADERSHIP</h1>
            <p>Meet the <span>Founder</span></p>
        </div>
        <div id="founder">
            <div className='founder image'>

            </div>
            <div>
                <div>
                    <h1>Oyelude Waliullahi</h1>
                    <p>Founder & Director, Àkàńó Labs</p>
                </div>
                <div>
                    <Quote className="" />
                    <p className="text-lg text-muted-foreground italic">
                      "Skilled individuals and technology will transform the world."
                    </p>
                </div>
                <p>Oyelude Waliullahi is a <span className="">Blockchain Data Analyst, 
                    DeFi Tool Developer, Trader, and Cybersecurity Student</span>, passionate about building innovative 
                    tools, developing talent, and shaping the future of digital technologies.
                </p>
                <p>
                     As the Founder & Director of Àkàńó Labs, he leads a global innovation hub creating data-driven 
                    products, automation tools, and educational platforms across Web3, digital finance, and emerging 
                    technologies.
                </p>
                {
                    accomplishments.map(t => 
                        <div>
                            {t.icon}
                            <p>{t.text}</p>
                        </div>
                    )
                }
                <button>Contact for Collaboration <ExternalLink /> </button>
            </div>

        </div>
        <div>
            <blockquote className="text-xl md:text-2xl  max-w-3xl mx-auto">
                "At Àkàńó Labs, we build tools that solve real problems, train builders who can create, 
                and cultivate a community that can innovate globally."
            </blockquote>
        </div>
        </>
    )
}