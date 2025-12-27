import { div } from "motion/react-client";
import { Eye, Rocket } from "lucide-react";
export default function VisionMission() {
  return (
    <>

    <div className="flex flex-col gap-9 items-center justify-center">
        
    <div className="flex flex-col gap-4">
        <h1 className="text-center text-white text-2xl font-bold text-glow gradient-text">OUR PURPOSE</h1>
        <p className="text-center text-white md:text-5xl text-xl font-bold">Vision <span className="gradient-text">& Mission</span></p>
    </div>

          <div className="flex flex-wrap justify-between gap-9 ">
            <div className="flex glass-card rounded-2xl py-4 px-8 flex-col gap-4 max-w-100">
              <div className="bg-for-border/10 p-3 rounded-2xl w-fit">
                  <Eye className="w-7 h-7 text-for-border " />
              </div>
              
                <h1 className="text-white font-bold text-2xl">Vision</h1>
                <p className="text-[18px] text-default-font font-semibold">
                  Become a <span>global hub for innovation</span>, nurturing skilled
                  talent and creating practical solutions in emerging technologies.
                </p>
            </div>
            <div className="flex glass-card rounded-2xl py-4 px-8  flex-col gap-4 max-w-100">
              <div className="bg-for-border/10 p-3 rounded-2xl w-fit">
                  <Rocket className="w-7 h-7 text-for-border" />
              </div>

                <h1  className="text-white font-bold text-2xl">Mission</h1>
                <p className="text-[18px] text-default-font font-semibold">
                  Develop <span>cutting edge products</span>, educational platforms,
                  and automation tools that empower individuals and businesses to
                  thrive in the digital economy.
                </p>
    
            </div>
          </div>
    </div>
    </>
  );
}
