import NavBar from "./components/ui/navbar";
import About from "./components/ui/about";
import HeroSection from "./components/ui/herosection";
import VisionMission from "./components/ui/visionmission";
import Products from "./components/ui/products";
import RecognitionSection from "./components/ui/recognition";
import Founder from "./components/ui/leadership";
export default function App(){
  return(
    <>
      <main className="bg-[hsl(222,47%,5%)]">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{background: "var(--gradient-subtle)"}}>
          <div className="absolute inset-0 grid-background" >
            <NavBar />
            <HeroSection />
          </div>
        </section>
        
        <section id="about" className="flex justify-center items-center  p-10 min-h-105 bg-secondary/20">
          <About /> 
        </section>
        <section id="vision" className="flex justify-center items-center  p-10 min-h-105 grid-background">
          <VisionMission /> 
        </section>
        <section id="product" className="flex justify-center items-center  p-10 min-h-105 bg-[#0215264f]">
          <Products /> 
        </section>
        <section className="flex justify-center items-center  p-10 min-h-105 relative">
          <div className="absolute inset-0 opacity-70 grid-background"></div>
          <RecognitionSection /> 
        </section>
        <section id="founder" className="flex justify-center items-center p-10 min-h-105 bg-[#0215264f]">
          <Founder /> 
        </section>
      </main>
    </>
  )
}