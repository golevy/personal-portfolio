"use client"

import { cn } from "~/lib/utils"
import { motion } from "framer-motion"

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

export default function AnimatedText({
  text,
  className,
}: {
  text: string
  className: string
}) {
  return (
    <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center capitalize text-center overflow-hidden">
      <motion.h1
        className={cn(
          "inline-block w-full text-dark dark:text-light font-bold text-8xl",
          className
        )}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
