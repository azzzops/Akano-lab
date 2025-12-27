import NavBar from "./components/ui/navbar";
import About from "./components/ui/about";
import HeroSection from "./components/ui/herosection";
import VisionMission from "./components/ui/visionmission";
import Products from "./components/ui/products";

export default function App() {
  return (
    <>
      <main className="relative bg-[hsl(222,47%,5%)]">
        {/* Background layer for blur to work */}
        <div className="absolute inset-0 bg-[hsl(222,47%,5%)] z-0"></div>

        {/* Navbar on top with backdrop-filter */}
        <NavBar className="glass fixed top-0 left-0 w-full z-10" />

        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden z-0"
          style={{ background: "var(--gradient-subtle)" }}
        >
          <div className="absolute inset-0 grid-background"></div>
          <HeroSection className="relative z-10" />
        </section>

        {/* About Section */}
        <section className="flex justify-center items-center p-10 min-h-105 bg-secondary/20 relative z-0">
          <About />
        </section>

        {/* Vision & Mission Section */}
        <section className="flex justify-center items-center p-10 min-h-105 grid-background relative z-0">
          <VisionMission />
        </section>

        {/* Products Section */}
        <section className="flex justify-center items-center p-10 min-h-105 bg-[#0215264f] relative z-0">
          <Products />
        </section>
      </main>
    </>
  );
}
