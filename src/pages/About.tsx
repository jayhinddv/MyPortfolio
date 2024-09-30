import Aboutfooter from "../components/Aboutfooter";
import FramerWrapper from "../components/FramerWrapper";
import Heading from "../components/Heading";
import { Badge } from "../components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
export default function About() {
  const items = [
    { hobby: "coding" },
    { hobby: "Tech Blog Reading" },
    { hobby: "creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
       
          <Heading>
            Software Engineer And Web <br /> Developer, Based In India.
          </Heading>
   
        <FramerWrapper y={0} x={100} >
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
          I’m Jayhind Yadav, a dedicated Full Stack Developer from Deoria, Uttar Pradesh, India, with over 3<sup>+</sup>
          years of experience in creating robust, scalable web applications. My expertise lies in the MERN stack, where 
          I specialize in back-end to front-end like API Creation and integrations, and database management.<br />
          From e-commerce platforms to property valuation systems, I’ve built and deployed solutions that are not only 
          efficient but also maintainable and secure. My proficiency with technologies like Node.js, Express.js,React,
          MongoDb and SQL Server ensures that I deliver high-performance, data-driven applications. I thrive on optimizing 
          workflows, streamlining operations, and solving complex technical challenges.<br />
          When I'm not coding, I am Continuously explore the latest innovations in web development, 
          striving to stay ahead in the ever-evolving tech landscape.
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col " y={100} delay={0.30}>
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};
