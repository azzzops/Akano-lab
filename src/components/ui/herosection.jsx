import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import Button from "../button";
export default function HeroSection() {
  return (
    <>
    <div className="relative flex flex-col px-10 max-w-300 m-auto items-center justify-center mt-30">
      
       <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
      />

      <div className="rounded-full p-px bg-linear-to-r shadow-2xl from-left-start via-fail-middle to-right-end">
        <div className="flex justify-center w-fit gap-3 rounded-full  bg-foreground border border-transparent py-1.5 px-4 items-center">
                <Sparkles className="w-5 h-5 text-[#39749c]"/>
                <h1 className="text-default-font">Technology & Innovation Lab</h1>
        </div>
      </div>
      
      <div className="flex gap-9 mt-15 flex-col items-center justify-center">
          
        <h1 className="text-white leading-tight text-5xl md:text-7xl font-bold max-w-200 text-center">
          Building <span className="gradient-text text-glow">Tools</span>, <span className="gradient-text text-glow" >Talent</span>, and the{" "}
          <span className="gradient-text text-glow">Future</span>
        </h1>
        <p className="max-w-170 leading-tight font-bold md:font-normal md:text-xl text-center text-default-font">
          Àkàńó Labs is a technology and innovation lab focused on building
          data-driven products, automation tools, and educational platforms in
          Web3, digital finance, and emerging technologies.
        </p>
      <div className="flex gap-4 flex-col md:flex-row flex-nowrap text-sm">
          <a href="#product" className={`border block drop-shadow-lg hover:drop-shadow-lg hover:drop-shadow-white/20 drop-shadow-white/10 text-nowrap cursor-pointer border-solid md:text-[16px] bg-white/70 py-3 px-6 rounded-xl font-semibold text-black`}>Discover Our Product</a>
          <a href="https://t.me/+PDthiNCZhTlmYTJk" target="_blank"  className={`cursor-pointer z-3 block hover:bg-white/10 font-light text-white text-nowrap md:text-[16px] py-3 px-6 rounded-xl bg-black/40 border border-white/20 `}>Join the Academy</a>
      </div>
      </div>
    </div>
  </>
  );
}
