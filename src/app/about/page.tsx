import Image from "next/image"
import AnimatedNumber from "~/components/animation/AnimatedNumber"
import AnimatedText from "~/components/animation/AnimatedText"
import Experience from "~/components/about/Experience"
import PageLayout from "~/components/PageLayout"
import Skills from "~/components/about/Skills"
import Education from "~/components/about/Education"

export const metadata = {
  title: "Levy | About",
  description: "about me",
}

export default function AboutPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <PageLayout className="pt-16">
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
        />

        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 xl:col-span-4 md:col-span-8 flex flex-col items-center justify-start md:order-2">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 self-start">
              Biography
            </h2>
            <p className="my-4 font-medium">
              Hi, I&apos;m Levy, a web developer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 1 years of experience in the field. I am
              always looking for new and innovative ways to bring my
              clients&apos; visions to life.
            </p>
            <p className="my-4 font-medium">
              I believe that design is about more than just making things look
              pretty – it&apos;s about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="my-4 font-medium">
              Whether I&apos;m working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>

          <div className="col-span-3 xl:col-span-4 md:col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src="/images/like.png"
              alt="Levylv"
              width={500}
              height={1000}
              className="w-full h-auto rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
          </div>

          <div className="col-span-2 xl:col-span-8 flex flex-col xl:flex-row items-end xl:items-center justify-between md:order-3">
            <div className="flex flex-col items-end xl:items-center justify-center">
              <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                <AnimatedNumber value={10} />+
              </span>
              <h2 className="text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize text-dark/75 dark:text-light/75">
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end xl:items-center justify-center">
              <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                <AnimatedNumber value={10} />+
              </span>
              <h2 className="text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize text-dark/75 dark:text-light/75">
                projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end xl:items-center justify-center">
              <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                <AnimatedNumber value={1} />+
              </span>
              <h2 className="text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize text-dark/75 dark:text-light/75">
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </PageLayout>
    </main>
  )
}
