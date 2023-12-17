"use client"

import Link from "next/link"
import { motion, useMotionValue } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const FramerImage = motion(Image)

const MovingImg = ({
  title,
  img,
  link,
}: {
  title: string
  img: any
  link: string
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef<HTMLImageElement>(null)

  const handleMouseMove = (event: any) => {
    imgRef.current!.style.display = "inline-block"
    x.set(event.pageX)
    y.set(-10)
  }

  const handleMouseLeave = (event: any) => {
    imgRef.current!.style.display = "none"
    x.set(0)
    y.set(0)
  }

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{
          x: x,
          y: y,
        }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        }}
        ref={imgRef}
        src={img}
        alt={title}
        width={500}
        height={500}
        className="z-10 w-96 h-auto hidden md:!hidden absolute rounded-lg"
        priority={true}
      />
    </Link>
  )
}

export default function Article({
  img,
  title,
  date,
  link,
}: {
  img: any
  title: string
  date: string
  link: string
}) {
  return (
    <motion.li
      className="relative w-full px-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:pl-0 sm:self-start xs:text-sm">
        {date}
      </span>
    </motion.li>
  )
}
