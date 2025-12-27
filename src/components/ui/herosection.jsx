import { div } from "motion/react-client";
import { Sparkles } from "lucide-react";
import Button from "../button";
export default function HeroSection() {
  return (
    <>
    <div className="flex flex-col px-10 max-w-300 m-auto items-center justify-center mt-30">
      
      <div className="rounded-full p-px bg-linear-to-r shadow-2xl  from-left-start via-fail-middle to-right-end">
        <div className="flex justify-center w-fit gap-3 rounded-full  bg-foreground border border-transparent py-1.5 px-4 items-center">
                <Sparkles className="w-5 h-5 text-[#39749c]"/>
                <h1 className="text-default-font">Technology & Innovation Lab</h1>
        </div>
      </div>
      
      <div className="flex gap-9 mt-15 flex-col items-center justify-center">
          
        <h1 className="text-white leading-tight text-5xl md:text-7xl font-bold max-w-210 text-center">
          Building <span className="gradient-text text-glow">Tools</span>, <span className="gradient-text text-glow" >Talent</span>, and the{" "}
          <span className="gradient-text text-glow">Future</span>
        </h1>
        <p className="max-w-170 leading-tight font-bold md:font-normal md:text-xl text-center text-default-font">
          Àkàńó Labs is a technology and innovation lab focused on building
          data-driven products, automation tools, and educational platforms in
          Web3, digital finance, and emerging technologies.
        </p>
      <div className="flex gap-4 flex-nowrap text-sm">
          <Button text={"Discover Our Product"} className={"border text-nowrap cursor-pointer border-solid md:text-xl bg-cta-bg py-2 px-4 rounded-xl text-white font-bold border-for-border"}/>
          <Button text={"Join the Academy"} className={"text-white text-nowrap cursor-pointer font-bold md:text-xl"}/>
      </div>
      </div>
    </div>
  </>
  );
}
