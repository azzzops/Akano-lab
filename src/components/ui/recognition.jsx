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
            <div>
                <h1>RECOGNITION</h1>
                    <p>Trusted by the <span>industry</span></p>
            </div>
            <div>
                {recognitions.map(r => (
                    <div>
                        <Award />
                        <h1>{r.name}</h1>
                        <p>{r.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}