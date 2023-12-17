"use client"

import Link from "next/link"
import Logo from "~/components/Logo"
import { cn } from "~/lib/utils"
import { usePathname } from "next/navigation"
import {
  DiscordIcon,
  GithubIcon,
  LinkedInIcon,
  QQIcon,
  TwitterIcon,
} from "~/components/Icons"
import { motion } from "framer-motion"
import useThemeSwitcher from "~/components/hooks/useThemeSwitcher"
import Image from "next/image"
import { useState } from "react"
import Menu from "~/components/Menu"

const CustomLink = ({
  href,
  title,
  className,
}: {
  href: string
  title: string
  className: string
}) => {
  const pathname = usePathname()

  return (
    <Link href={href} className={cn(className, "relative group")}>
      {title}
      <span
        className={cn(
          "h-[3px] inline-block absolute left-0 -bottom-1 transition ease duration-300 rounded-lg",
          "transition-all",
          pathname === href ? "w-full" : "w-0",
          pathname === href && pathname === "/" && "bg-green-500",
          pathname === href && pathname === "/about" && "bg-blue-500",
          pathname === href && pathname === "/projects" && "bg-purple-500",
          pathname === href && pathname === "/articles" && "bg-yellow-500",
          "group-hover:w-full",
          href === "/" && "group-hover:bg-green-500",
          href === "/about" && "group-hover:bg-blue-500",
          href === "/projects" && "group-hover:bg-purple-500",
          href === "/articles" && "group-hover:bg-yellow-500"
        )}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleModalClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="relative z-10 w-full px-32 lg:px-16 md:px-12 sm:px-8 py-8 font-medium flex items-center justify-between dark:text-light">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleModalClick}
      >
        <span
          className={cn(
            "bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          )}
        ></span>
        <span
          className={cn(
            "bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        ></span>
        <span
          className={cn(
            "bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          )}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          {/* Github */}
          <motion.a
            href="https://github.com/Lvw666"
            target="_blank"
            className="w-6 mr-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <GithubIcon className="" />
          </motion.a>

          {/* Twitter */}
          <motion.a
            href="https://twitter.com/Levy0522"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <TwitterIcon className="" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <LinkedInIcon className="" />
          </motion.a>

          {/* Discord */}
          <motion.a
            href="https://discord.com"
            target="_blank"
            className="w-6 mx-3 bg-light dark:bg-dark rounded-full"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <DiscordIcon className="" />
          </motion.a>

          {/* QQ */}
          <motion.a
            href="tencent://message/?uin=674711494&Site=&Menu=yes"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <QQIcon className="" />
          </motion.a>

          {/* Theme Switcher */}
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light")
            }}
            className={cn(
              "ml-3 flex items-center justify-center rounded-full p-1",
              mode === "light" ? "bg-light text-light" : "bg-light text-dark"
            )}
          >
            {mode === "dark" ? (
              <Image
                src="/images/moon-filled-to-sunny-filled-loop-transition.svg"
                alt=""
                width={24}
                height={24}
                className="w-6 h-auto"
              />
            ) : (
              <Image
                src="/images/sunny-filled-loop-to-moon-filled-loop-transition.svg"
                alt=""
                width={24}
                height={24}
                className="w-6 h-auto"
              />
            )}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {isOpen && <Menu toggle={handleModalClick} />}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}
