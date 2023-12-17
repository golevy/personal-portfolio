"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const FramerImage = motion(Image)

export default function FeaturedArticle({
  img,
  title,
  time,
  summary,
  link,
}: {
  img: any
  title: string
  time: string
  summary: string
  link: string
}) {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="capitalize text-2xl xs:text-lg font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  )
}
