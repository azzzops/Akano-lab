import { Book, Users, TrendingUp, User, Rocket } from "lucide-react";
import imo from "../../assets/IMG-20251222-WA0013-removebg-preview.png";
import safepin from "../../assets/IMG-20251222-WA0014-removebg-preview.png"
import Button from "../button";
export default function Products() {
  return (
    <>
      <div className="flex flex-col gap-8">

      <h1 className="text-center text-white md:text-5xl text-xl font-bold gradient-text">Products / Portfolio</h1>

        <div className="flex flex-wrap gap-7">
          <div className="flex flex-col glass-card px-6 rounded-2xl py-7 gap-3 max-w-125">
            <div className="flex gap-3 items-center ">
              <div className="w-20 h-20 shrink-0 bg-white/50 rounded-3xl overflow-clip"><img src={imo} className="scale-150 object-cover object-center h-full w-full " alt="" /></div>
              <div>
                <h1 className="text-xl font-bold gradient-text">Ìmòforge Academy</h1>
                <p className="font-bold text-default-font">Global Web3 & DeFi Deep-Tech Education Hub</p>
              </div>
            </div>
            <div className="text-[18px] md:text-xl text-default-font">
              Focused on blockchain engineering, DeFi tool development, Web3
              security, and on-chain trading & market analytics.
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="bg-for-border/10 p-3 rounded-xl w-fit">
                  <Book className="h-5 w-5 text-for-border" />
                </div> <p className="text-[18px] text-default-font">Hands on project driven programs</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-for-border/10 p-3 rounded-2xl w-fit">
                  <Users className="h-5 w-5 text-for-border" />
                </div> <p className="text-[18px] text-default-font">Fast growing Web3 alumni Network</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-for-border/10 p-3 rounded-2xl w-fit">
                  <TrendingUp className="h-5 w-5 text-for-border" />
                </div> <p className="text-[18px] text-default-font">Real World applications</p>
              </div>
            </div>
            <a href="https://t.me/imoforge_Acad" target="_blank" className="flex gap-2 text-[18px] font-semibold text-white items-center w-fit px-5 py-2 rounded-xl bg-[hsla(187,100%,50%,0.1)]">Join the Telegram</a>
          </div>



          <div className="flex flex-col glass-card px-6 rounded-2xl py-7 gap-4 max-w-125">
            <div className="flex gap-3 items-center ">
              <div className="w-20 h-20 shrink-0 bg-white/50 rounded-3xl overflow-clip"><img src={safepin} className="object-cover scale-200 object-center h-full w-full " alt="" /></div>
              <div>
                <h1 className="text-xl font-bold gradient-text">SafepinBot</h1>
                <p className="font-bold text-default-font">Simple. Reliable. Built for the future.</p>
              </div>
            </div>
            <div className="text-[18px] md:text-xl text-default-font">
              Upcoming Web3 project under Àkàńó Labs. A next-generation solution
              designed to revolutionize digital security.
            </div>
              <div  className="flex gap-2 text-[23px] text-white items-center w-fit px-5 py-2 rounded-xl bg-[hsla(187,100%,50%,0.1)]"><span>Coming Soon</span> <Rocket className="w-5 h-5 text-[hsl(187,100%,50%)]" /></div>
          </div>
        </div>
      </div>
    </>
  );
}
