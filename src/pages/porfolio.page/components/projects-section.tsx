import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <div id="#projects" className={ss.root}>
      <div className="inline-block pb-2">
        <p className="text-[24px] md:text-[28px]  tracking-widest pt-2 text-white">
          Projects
        </p>
        <div className="bg-gradient-to-r from-secondary  to-primary rounded h-1 ease-linear "></div>
      </div>

      <div className="grid grid-cols-12 py-4 gap-4">
        <div className="col-span-12 md:col-span-4 bg-gradient-to-r border-l-8 border-primary from-[rgba(0,0,0,0.8)] p-3 pr-3  to-[rgba(0,0,0,0.2)]">
          <ProjectCard
            title={"Recommender System"}
            content={
              "based on collaborative filtering and psychographics models,by calculating eucledian distance between the points"
            }
            list={["Python", "Scikit learn", "Pandas", "Node js"]}
          />
        </div>
        <div className="col-span-12 md:col-span-4 bg-gradient-to-r border-l-8 border-primary from-[rgba(0,0,0,0.8)] p-3 pr-3  to-[rgba(0,0,0,0.2)]">
          <ProjectCard
            title={"Swiggy based Food Delivery Application"}
            content={
              "Location based Restaurants listing and Food Order Placement, Tracking with online payment application"
            }
            list={["React Native", "Typescript", "Redux"]}
          />
        </div>
        <div className="col-span-12 md:col-span-4 bg-gradient-to-r border-l-8 border-primary from-[rgba(0,0,0,0.8)] p-3 pr-3  to-[rgba(0,0,0,0.2)]">
          <ProjectCard
            title={"Fantasy Cricket Application"}
            content={
              "Dream 11 Like Fantasy Cricket application where users can pick players and create team for an upcomming match, and win prizes"
            }
            list={["React Native", "Typescript", "Redux", "React Query"]}
          />
        </div>
      </div>
    </div>
  );
}

const ss = {
  root: "py-3 md:py-6 px-6 md:px-20",
};
