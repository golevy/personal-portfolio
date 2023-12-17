import PageLayout from "~/components/PageLayout"
import AnimatedText from "~/components/animation/AnimatedText"
import project1 from "../../../public/images/projects/crypto-screener-cover-image.jpg"
import FeaturedProject from "~/components/projects/FeaturedProject"
import Project from "~/components/projects/Project"

export const metadata = {
  title: "Levy | Projects",
  description: "about projects",
}

export default function ProjectsPage() {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <PageLayout className="pt-16">
        <AnimatedText
          text="Imagination Trumps Knowledge!"
          className="leading-tight mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
        />

        <div className="grid grid-cols-12 gap-x-24 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0 gap-y-32 md:gap-y-24">
          <div className="col-span-12">
            <FeaturedProject
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
              link="/"
              github=""
              type="Featured Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Crypto Screener Application"
              img={project1}
              link="/"
              github=""
              type="Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Crypto Screener Application"
              img={project1}
              link="/"
              github=""
              type="Project"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
              link="/"
              github=""
              type="Featured Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Crypto Screener Application"
              img={project1}
              link="/"
              github=""
              type="Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Crypto Screener Application"
              img={project1}
              link="/"
              github=""
              type="Project"
            />
          </div>
        </div>
      </PageLayout>
    </main>
  )
}
