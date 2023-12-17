import Image from "next/image"
import AnimatedText from "~/components/animation/AnimatedText"
import HireMe from "~/components/HireMe"
import { LinkArrow } from "~/components/Icons"
import PageLayout from "~/components/PageLayout"

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:bg-dark dark:text-light">
      <PageLayout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image
              src="/images/profilePic.png"
              alt="LevyLv"
              className="w-full h-auto lg:hidden md:inline-block md:w-full"
              width={500}
              height={1000}
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !leading-tight !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 md:p-2 px-6 md:px-4 rounded-lg text-lg md:text-base font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                download={true}
              >
                Resume <LinkArrow className="w-6 ml-1" />
              </a>
              <a
                href="mailto:lvw0522@gmail.com"
                target="_blank"
                className="ml-6 text-lg md:text-base font-medium capitalize text-dark underline dark:text-light"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src="/images/miscellaneous_icon.svg"
            width={1000}
            height={1000}
            alt="Levylv"
            className="w-full h-auto"
          />
        </div>
      </PageLayout>
    </main>
  )
}
