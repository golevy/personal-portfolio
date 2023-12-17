import { cn } from "~/lib/utils"

export default function PageLayout({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  return (
    <div
      className={cn(
        "w-full h-full inline-block z-0 p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8",
        className
      )}
    >
      {children}
    </div>
  )
}
