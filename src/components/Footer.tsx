import Link from "next/link"
import PageLayout from "~/components/PageLayout"

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base dark:text-light dark:border-light">
      <PageLayout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="https://weblvw.com"
            className="underline underline-offset-2"
            target="_blank"
          >
            Levy
          </Link>
        </div>
        <Link
          href="https://weblvw.com"
          className="underline underline-offset-2"
          target="_blank"
        >
          Say hello
        </Link>
      </PageLayout>
    </footer>
  )
}
