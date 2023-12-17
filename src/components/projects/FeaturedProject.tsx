"use client"

import Image from "next/image"
import Link from "next/link"
import { GithubIcon } from "~/components/Icons"
import { motion } from "framer-motion"

const FramerImage = motion(Image)

export default function FeaturedProject({
  type,
  title,
  summary,
  img,
  link,
  github,
}: {
  type: string
  title: string
  summary: string
  img: any
  link: string
  github: string
}) {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 xs:-right-2 -z-10 w-[101%] xs:w-full h-[103%] sm:h-[102%] rounded-[2.5rem] xs:rounded-[1.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          width={500}
          height={500}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>
      <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl sm:text-sm font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10"
          >
            <GithubIcon className="" />
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 sm:px-4 text-lg sm:text-base font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}
