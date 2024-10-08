import FramerWrapper from "../components/FramerWrapper";
import Heading from "../components/Heading";
import ProjectCards from "../components/ProjectsCard";
import { Badge } from "../components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "LINR-Valuation – Property Valuation Platform",
      description:
        "A property valuation system that automates report generation and integrates external data sources to streamline valuation processes. Built with a strong back-end architecture, ensuring secure data management and scalability.",
        tags: ["Node.js", "Express", "Sequlize", "SQL Server",  "React"],
      link: "http://linrweb.thedaps.com/",
    },
    {
      title: "North Eye – Legal Advisory Platform",
      description:
        "A legal advisory platform connecting clients with advisors through secure document exchange and real-time consultations. Focused on back-end processing and API-driven communication.",
        tags: ["Node.js", "Express", "Mongoose", "MongoDB"],
      link: "http://app.northeye.co.in/#/",
    },
    {
      title: "Grata E-shop – E-commerce Platform",
      description:
        "Developed a full-fledged e-commerce platform with product catalog management, order tracking, and secure payment processing. Emphasized database management and real-time transaction handling.",
      tags: ["Node.js", "SQL Server", "JWT","back-end"],
      link: "#",
    },
    {
      title: "ARSIM – Scrap Bidding Platform",
      description:
        "A live auction platform for scrap materials featuring automated notifications and real-time bidding functionality. Back-end operations were built for scalability and secure payments.",
      tags: ["Node.js", "MongoDB", "Real-time Notifications"],
      link: "#",
    },
    {
      title: "Astute – Insurance Surveyor Platform",
      description:
        "A system designed for insurance surveyors to manage claims, upload reports, and track claim status with real-time data integration. Developed to handle high volumes of data with efficiency.",
      tags: [".Net", "MVC", "SQL SerVer"],
      link: "http://online.astutesurveyors.com/",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            I specialize in creating full-stack solutions for a variety of industries, from property valuation to e-commerce and insurance platforms. Each of these projects demonstrates my ability to build scalable, secure, and high-performance web applications.
          </p>
        </FramerWrapper>
      </div>

      <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
