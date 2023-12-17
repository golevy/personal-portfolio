"use client"

import { motion } from "framer-motion"

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 lg:px-4 md:px-3 py-3 lg:py-2 md:py-1.5 md:text-sm shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{
        scale: 1.05,
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <div>
      <h2 className="font-bold text-8xl md:text-6xl mt-64 md:mt-32 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 lg:p-6 md:p-4 xs:p-2 xs:text-xs shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{
            scale: 1.05,
          }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-5vw" y="-10vw" />
        <Skill name="CSS" x="-25vw" y="2vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="TypeScript" x="0vw" y="12vw" />
        <Skill name="ReactJS" x="-20vw" y="-15vw" />
        <Skill name="NextJS" x="15vw" y="-12vw" />
        <Skill name="Postgres SQL" x="32vw" y="-5vw" />
        <Skill name="Tailwind CSS" x="0vw" y="-20vw" />
        <Skill name="Prisma" x="-25vw" y="18vw" />
        <Skill name="Golang" x="18vw" y="18vw" />
      </div>
    </div>
  )
}
