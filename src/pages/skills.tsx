import Heading from "../components/Heading";
import SkillsFooter from "../components/SkillsFotter";
import { Badge } from "../components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '/html.png'
import css from '/css.png'
import mernpng from '/mernpng.png'
import js from '/js.png'
import ts from '/ts.png'
import react from '/react.png'
import sql from '/sql.png'
import mongodb from '/mongo.png'
import tailwind from '/tailwindcss.png'
import github from '/github.png'
import vscode from '/vscode.png'
import FramerWrapper from "../components/FramerWrapper";
const skillPage = () => {

    const language = [
        {alt:"html", img:html},
        {alt:"css", img:css},
        {alt:"js", img:js},
        {alt:"ts", img:ts},
        {alt:"sql", img:sql},
    ]
    const framework = [
        {alt:"react", img:react},
        {alt:"mern", img:mernpng},
        {alt:"mongodb", img:mongodb},
        {alt:"tailwind", img:tailwind},
        {alt:"github", img:github},
        {alt:"vscode", img:vscode},
    ]
       

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200} >

        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
  I am an experienced Full Stack Developer with a strong understanding of modern web
   technologies, including HTML5, CSS3, JavaScript, TypeScript, and React. My expertise
    lies in building scalable web applications using JavaScript, TypeScript, React, Next.js, 
    Node.js, and managing databases like MongoDB and SQL Server. I specialize in creating robust 
    MERN systems, API integrations, and delivering high-performance, maintainable solutions.
</p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.30} className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Programming Languages
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={language} />
        </div>
        </FramerWrapper>
        <FramerWrapper  className="block" y={100} delay={0.32}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Framework/Libraries and Version Control
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={framework} />
        </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
