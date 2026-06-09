import { getAllGraphicProjects } from "@/app/action/action";
import GraphicPortfolio from "@/components/manual/content/graphic-portfolio";
import SectionHeader from "@/components/manual/header/section-header";

export default async function ProjectGraphic() {
  const projects = await getAllGraphicProjects();
  return (
    projects && (
      <section className=" bg-muted">
        <div className="md:py-24 md:px-12 px-5 py-16 max-w-7xl w-full mx-auto">
          <SectionHeader
            heading="Our Design Portfolio"
            subHeading="Explore our latest graphic design projects across various categories"
          />
          <div className="mt-12">
            <GraphicPortfolio projects={projects} />
          </div>
        </div>
      </section>
    )
  );
}
