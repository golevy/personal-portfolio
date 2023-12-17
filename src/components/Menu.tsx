import { cn } from "~/lib/utils"
import {
  DiscordIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  QQIcon,
  TwitterIcon,
} from "~/components/Icons"
import { motion } from "framer-motion"
import useThemeSwitcher from "~/components/hooks/useThemeSwitcher"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export const CustomMobileLink = ({
  href,
  title,
  className,
  toggle,
}: {
  href: string
  title: string
  className: string
  toggle: () => void
}) => {
  const pathname = usePathname()
  const router = useRouter()

  const handleMenuClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      className={cn(className, "relative group text-light dark:text-dark my-2")}
      onClick={handleMenuClick}
    >
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
    </button>
  )
}

export default function Menu({ toggle }: { toggle: () => void }) {
  const [mode, setMode] = useThemeSwitcher()

  return (
    <motion.div
      className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1 }}
    >
      {/* Navbar */}
      <nav className="flex items-center flex-col justify-center">
        <CustomMobileLink
          href="/"
          title="Home"
          className=""
          toggle={() => toggle()}
        />
        <CustomMobileLink
          href="/about"
          title="About"
          className=""
          toggle={() => toggle()}
        />
        <CustomMobileLink
          href="/projects"
          title="Projects"
          className=""
          toggle={() => toggle()}
        />
        <CustomMobileLink
          href="/articles"
          title="Articles"
          className=""
          toggle={() => toggle()}
        />
      </nav>

      {/* Icons */}
      <nav className="flex items-center justify-center flex-wrap mt-2">
        <motion.a
          href="https://github.com/Lvw666"
          target="_blank"
          className="w-6 mr-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <GithubIcon className="" />
        </motion.a>

        <motion.a
          href="https://twitter.com/Levy0522"
          target="_blank"
          className="w-6 mx-3 sm:mx-1"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <TwitterIcon className="" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com"
          target="_blank"
          className="w-6 mx-3 sm:mx-1"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <LinkedInIcon className="" />
        </motion.a>

        <motion.a
          href="https://discord.com"
          target="_blank"
          className="w-6 mx-3 sm:mx-1 rounded-full"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <DiscordIcon className="" />
        </motion.a>

        <motion.a
          href="tencent://message/?uin=674711494&Site=&Menu=yes"
          target="_blank"
          className="w-6 mx-3 sm:mx-1"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <QQIcon className="" />
        </motion.a>

        <button
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light")
          }}
          className={cn(
            "ml-3 sm:ml-1 flex items-center justify-center rounded-full p-1",
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
    </motion.div>
  )
}
