import { getCommonWebDevProjects } from "@/app/action/action";
import NormalButton from "@/components/manual/button/NormalButton";
import WebDevPortfolio from "@/components/manual/content/web-dev-portfolio";
import SectionHeader from "@/components/manual/header/section-header";
import Link from "next/link";

export default async function PortfolioSection() {
  const projectsData = await getCommonWebDevProjects();
  return (
    projectsData && (
      <section className="bg-white ">
        <div className=" mx-auto px-5 md:py-24 py-16 md:px-12 max-w-7xl">
          <SectionHeader
            heading="Our Web Development Portfolio"
            subHeading=" Explore some of our recent web development projects"
          />
          <WebDevPortfolio projectsData={projectsData} />

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
