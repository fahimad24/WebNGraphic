import { getCommonGraphicProjects } from "@/app/action/action";
import NormalButton from "@/components/manual/button/NormalButton";
import GraphicPortfolio from "@/components/manual/content/graphic-portfolio";
import SectionHeader from "@/components/manual/header/section-header";
import Link from "next/link";

export default async function GraphicPortfolioSection() {
  const projects = await getCommonGraphicProjects();
  return (
    projects && (
      <section className=" bg-white">
        <div className="md:py-24 md:px-12 px-5 py-16 max-w-7xl w-full mx-auto">
          <SectionHeader
            heading="Our Design Portfolio"
            subHeading="Explore our latest graphic design projects across various categories"
          />
          <div className="mt-12">
            <GraphicPortfolio projects={projects} />
          </div>

          <div className="flex mt-12 justify-center w-full">
            <Link href="/portfolio">
              <NormalButton>View all Projects</NormalButton>
            </Link>
          </div>
        </div>
      </section>
    )
  );
}
