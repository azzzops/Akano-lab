import { Award } from "lucide-react"
import { div } from "motion/react-client";

export default function RecognitionSection(){
const recognitions = [
  {
    name: 'Jupiter Nigeria',
    description: 'Reposted our post during the first ÌmòForge bootcamp',
  },
  {
    name: 'TradeWizBot',
    description: 'Engaged our academy programs',
  },
  {
    name: 'GMGN',
    description: 'Highlighted our program',
  },
  {
    name: 'Growing Network',
    description: 'Fast-growing alumni network through Ìmòforge Academy',
  },
];


    return(
        <>
            <div className="flex flex-col gap-7 z-10">
              <div className="text-center">
                  <h1 className="text-center text-white text-2xl font-bold text-glow gradient-text">RECOGNITION</h1>
                  <p className="text-center text-white md:text-5xl text-xl font-bold">Trusted by the <span>industry</span></p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                  {recognitions.map(r => (
                      <div className="flex-10 glass-card flex items-center justify-center py-8 px-2 rounded-2xl bg-[#0a1524] text-center  flex-col gap-2">
                          <div className="bg-for-border/10 p-3 rounded-2xl w-fit">
                            <Award size={30} className="text-for-border"/>
                          </div>
                          <h1 className="text-white text-xl">{r.name}</h1>
                          <p className="text-default-font font-bold max-w-3xs">{r.description}</p>
                      </div>
                  ))}
              </div>
            </div>
        </>
    )
}