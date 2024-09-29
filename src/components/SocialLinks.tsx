import { cn } from "../lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import FramerWrapper from "./FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/jayhinddv", icon: <Facebook /> },
    { name: "Twitter", link: "https://x.com/Jayhind_Indian", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/jayhind-yadav-224908276/", icon: <Linkedin /> },
    { name: "External", link: "https://cscsohnag.in/", icon: <ExternalLink /> },
  ];

  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <a 
              href={itm.link} 
              target="_blank" 
              rel="noopener noreferrer" // Important for security
              className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >
              {itm.icon}
            </a>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
