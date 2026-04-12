import { getAllWebDevProjects } from "@/app/action/action";
import WebDevPortfolio from "@/components/manual/content/web-dev-portfolio";
import SectionHeader from "@/components/manual/header/section-header";

export default async function ProjectWebDev() {
  const projectsData = await getAllWebDevProjects();
  return (
    projectsData && (
      <section className="bg-white ">
        <div className=" mx-auto px-5 md:py-24 py-16 md:px-12 max-w-7xl">
          <SectionHeader
            heading="Our Web Development Portfolio"
            subHeading=" Explore some of our recent web development projects"
          />
          <WebDevPortfolio projectsData={projectsData} />
        </div>
      </section>
    )
  );
}
