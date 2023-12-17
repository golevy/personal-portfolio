"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "~/components/LiIcon"

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}) => {
  const liRef = useRef(null)

  return (
    <li
      ref={liRef}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={liRef} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })

  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl md:text-6xl xs:text-4xl mb-32 md:mb-16 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          ref={ref}
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 md:left-[30px] xs:left-[20px] top-0 w-[4px] md:w-[2px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
           search engine, including improving the accuracy and relevance of search results and 
           developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
           search engine, including improving the accuracy and relevance of search results and 
           developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
           search engine, including improving the accuracy and relevance of search results and 
           developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
           search engine, including improving the accuracy and relevance of search results and 
           developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
           search engine, including improving the accuracy and relevance of search results and 
           developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  )
}
