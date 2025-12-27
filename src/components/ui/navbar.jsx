import AkanoIcon from "../../assets/1766742887788.png";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../button";
export default function NavBar(){
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    
    
    
useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    
    return(
        <>
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass ' : 'bg-transparent'}`}>
            <nav className="flex justify-between container mx-auto px-6 py-4">
                <div className="flex gap-2 items-center ">
                    <img src={AkanoIcon} className="max-w-7 w-full" alt="" />
                    <h1 className="text-2xl font-bold text-white">Àkàńó <span>Labs</span></h1>
                </div>
                <div className="hidden gap-8 md:flex items-center justify-center text-default-font transition-colors duration-300 text-[15px] font-medium">
                    <a href="#about">About</a>
                    <a href="#vision">Vision</a>
                    <a href="#product">Product</a>
                    <a href="#founder">Founder</a>
                    <a href="#contact">Contact</a>
                    <a href="#contact" className="border border-solid text-for-border border-for-border py-2 px-4 rounded-xl">Join Academy</a>
                </div>
                <div onClick={() => setIsOpened(i => i = !i)} className="text-white block md:hidden">
                { isOpened ? <X size={24}/> : <Menu size={24}   />}
                </div>
            </nav>
            <div className={`md:hidden mobile ${isOpened ? "flex" : "hidden"} glass z-40 border-b`}>
                <div className="flex flex-col p-6 gap-4 md:hidden justify-start text-default-font transition-all duration-300 text-[15px] font-medium">
                        <a href="#about">About</a>
                        <a href="#vision">Vision</a>
                        <a href="#product">Product</a>
                        <a href="#founder">Founder</a>
                        <a href="#contact">Contact</a>
                        <a href="#contact" className="border border-solid text-for-border border-for-border py-2 px-4 rounded-xl">Join Academy</a>
                </div>
            </div>
        </div>
        </>
    )
}