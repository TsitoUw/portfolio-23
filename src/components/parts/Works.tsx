import Work from "./Work";
import { Circle } from "@mui/icons-material";
import gameEngine from "../../assets/engine.jpeg";
import internship from "../../assets/internship.png";
import musicc from "../../assets/musicc.png";
import nestangular from "../../assets/nestangular.webp";
import portfolio from "../../assets/portfolio-desk.png";
import finder from "../../assets/job-mobi.png";

function Works() {
  const workMocks = [
    {
      name: "2023 portfolio",
      imgSrc: portfolio,
      desc: `This portfolio was made with ReactTs, vite and the framework Tailwind css. This is also a progressive web app, so it can work offline if needed.

And a little cup of coffe ☕.
`,
      links: {
        project: "https://github.com/TsitoUw/portfolio-23",
        deployment: "https://TsitoUW.vercel.app",
      },
      isLandscape: true,
      status: "done",
      isHere: true,
    },
    {
      name: "Restaurant Management",
      imgSrc: nestangular,
      desc: `Collaborating for building of a restaurant management, this is a web app build with Angular, NestJs and Postgresql.
I was participating in the database study and mainly focusing on the backend, setting up a RESTful api for the front end.`,
      links: {
        project: "https://github.com/TsitoUw/nest-restau",
        deployment: "",
      },
      status: "done",
      isLandscape: true,
    },
    {
      name: "Finder",
      imgSrc: finder,
      desc: `Fullstack job finder app made with ReactJs, Tailwind css and Pocketbase.
Practicing mobile first developement while learning pocketbase. I challenged myself to finnish an app in 6 hours and this is the result.
I've done the signup, signin page; home page were popular companies and recent jobs posts are shown; a detailed view of a job and a profile for companies;
and a search page to search for job or company.`,
      links: {
        project: "https://github.com/TsitoUw/job-finder",
        deployment: "",
      },
      status: "done",
      isLandscape: false,
    },
    {
      name: "Musicc",
      imgSrc: musicc,
      desc: `Fullstack Music streaming progressive web app made with ReactTs, Tailwind css, NodeTs , ExpressJs and Postgresql. 
I aimed to achieve implementing my own media streaming and uploading methods, and also handling advanced authentication.
Exploring React, NodeJs and Typescript in depth.`,
      links: {
        project: "https://github.com/TsitoUw/musicc-front",
        deployment: "https://musicc-front.vercel.app",
      },
      isLandscape: true,
    },
    {
      name: "Internship - Webmapping",
      imgSrc: internship,
      desc: `Using Vue, Laravel, Postgresql and Geoserver. During six (6) months we built a large application that can offer to user an interactive and detailled map of Madagascar.
Also lets admins manage the entire applications and its contents.`,
      links: {
        project: "",
        deployment: "",
      },
      status: "done",
      isLandscape: true,
    },
    {
      name: "2D Game Engine",
      imgSrc: gameEngine,
      desc: `This is a 2D game framework built with TypeScript, following the Entity-Component-System (ECS) architecture and utilizing the Matter.js physics engine. 
The framework enables the development of 2D games with realistic physics interactions.

My first step in the programing world was through game-making, with the RPG Maker Vx Ace, I also learnt fundamentals of Unity3D. 
Now I'm interested in writting one.`,
      links: {
        project: "https://github.com/TsitoUw/2d-game-framework",
        deployment: "",
      },
      isLandscape: true,
    },
  ];
  return (
    <>
      <div className="w-max flex gap-2 rounded-md p-2 text-sm justify-center bg-[var(--content-bg)]">
        <p className="flex items-center gap-1">
          <span className="flex items-center  text-emerald-600">
            <Circle fontSize="small" />
          </span>{" "}
          Done
        </p>
        <p className="flex items-center gap-1">
          <span className="flex items-center  text-blue-400">
            <Circle fontSize="small" />
          </span>{" "}
          On going
        </p>
        {/* <p className="flex items-center gap-1">
          <span className="flex items-center  text-orange-400">
            <Circle fontSize="small" />
          </span>{" "}
          Need to be re-written
        </p> */}
      </div>
      <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-2">
        {workMocks.map((projet, id) => {
          return <Work project={projet} key={id} />;
        })}
      </div>
    </>
  );
}

export default Works;
