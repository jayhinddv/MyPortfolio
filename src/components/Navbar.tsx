"use client";
import { cn } from "../lib/utils";
import {
  GraduationCap,
  Home,
  Lightbulb,
  Rocket,
  Phone,
  User2,
} from "lucide-react";
import { buttonVariants } from "./ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import FramerWrapper from "./FramerWrapper";

const Navbar = () => {
  const items = [
    { name: "Home", icon: <Home />, link: "/" },
    { name: "About", icon: <User2 />, link: "/about" },
    { name: "Skills", icon: <Lightbulb />, link: "/skills" },
    { name: "Projects", icon: <Rocket />, link: "/projects" },
    { name: "Education", icon: <GraduationCap />, link: "/education" },
    //{ name: "More", icon: <Rocket />, link: "/more" },
    { name: "Contact", icon: <Phone />, link: "/contact" },
  ];

  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FramerWrapper className={`h-fit w-fit fixed top-5 right-0 left-0 px-5 m-auto border border-black rounded-full p-2 bg-transparent flex-row gap-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 max-sm:gap-1 ${scrolling ? "hidden" : "flex"}`} y={-100}>
      {items.map((itm) => {
        return (
          <TooltipProvider key={itm.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  to={itm.link}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "hover:text-[#2f7df4]", 
                    location.pathname === itm.link && "text-[#2f7df4] bg-zinc-100"
                  )}
                >
                  {itm.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{itm.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </FramerWrapper>
  );
};

export default Navbar;
