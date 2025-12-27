import NavBar from "./components/ui/navbar";
import About from "./components/ui/about";
import HeroSection from "./components/ui/herosection";
import VisionMission from "./components/ui/visionmission";
import Products from "./components/ui/products";
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
        
        <section className="flex justify-center items-center  p-10 min-h-105 bg-secondary/20">
          <About /> 
        </section>
        <section className="flex justify-center items-center  p-10 min-h-105 grid-background">
          <VisionMission /> 
        </section>
        <section className="flex justify-center items-center  p-10 min-h-105 bg-[#0215264f]">
          <Products /> 
        </section>
      </main>
    </>
  )
}