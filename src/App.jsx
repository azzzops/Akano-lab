import NavBar from "./components/ui/navbar";
import About from "./components/ui/about";
import HeroSection from "./components/ui/herosection";
import VisionMission from "./components/ui/visionmission";
import Products from "./components/ui/products";

export default function App() {
  return (
    <>
      <main className="relative bg-[hsl(222,47%,5%)] min-h-screen">
        {/* Background layer */}
        <div className="absolute inset-0 grid-background z-0"></div>

        {/* Navbar on top of background */}
        <NavBar className="glass fixed top-0 left-0 w-full z-10" />

        {/* Hero Section */}
        <section className="relative z-0 min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>

        {/* Other sections */}
        <section className="p-10 z-0 bg-secondary/20">
          <About />
        </section>
        <section className="p-10 z-0 grid-background">
          <VisionMission />
        </section>
        <section className="p-10 z-0 bg-[#0215264f]">
          <Products />
        </section>
      </main>
    </>
  );
}
