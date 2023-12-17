"use client"

import Link from "next/link"
import { GithubIcon } from "~/components/Icons"
import Image from "next/image"
import { motion } from "framer-motion"

const FramerImage = motion(Image)

export default function Project({
  type,
  title,
  img,
  link,
  github,
}: {
  type: string
  title: string
  img: any
  link: string
  github: string
}) {
  return (
    <article className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 xs:p-4">
      <div className="absolute top-0 -right-3 md:-right-2 -z-10 w-[101%] md:w-[100%] h-[103%] xs:h-[102%] rounded-[2rem] xs:rounded-[1.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          width={500}
          height={500}
          className="w-full h-auto"
          priority={true}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl lg:text-2xl font-bold">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-base font-semibold underline underline-offset-2"
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 md:w-6"
          >
            <GithubIcon className="" />
          </Link>
        </div>
      </div>
    </article>
  )
}
