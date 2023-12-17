import PageLayout from "~/components/PageLayout"
import AnimatedText from "~/components/animation/AnimatedText"
import FeaturedArticle from "~/components/articles/FeaturedArticle"
import Article from "~/components/articles/Article"

export const metadata = {
  title: "Levy | Articles",
  description: "about articles",
}

export default function ArticlesPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center overflow-hidden dark:text-light">
      <PageLayout className="pt-16">
        <AnimatedText
          text="Words Can Change The World!"
          className="mb-16 sm:mb-8 leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl"
        />

        <ul className="grid grid-cols-2 md:grid-cols-1 gap-16 lg:gap-8 md:gap-y-16">
          <FeaturedArticle
            img="/images/articles/pagination component in reactjs.jpg"
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read"
            link="/"
          />
          <FeaturedArticle
            img="/images/articles/create loading screen in react js.jpg"
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read"
            link="/"
          />
        </ul>
        <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
          All Articles
        </h2>
        <ul>
          <Article
            img="/images/articles/create modal component in react using react portals.png"
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/"
          />
          <Article
            img="/images/articles/form validation in reactjs using custom react hook.png"
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/"
          />
          <Article
            img="/images/articles/smooth scrolling in reactjs.png"
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/"
          />
          <Article
            img="/images/articles/smooth scrolling in reactjs.png"
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/"
          />
          <Article
            img="/images/articles/smooth scrolling in reactjs.png"
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/"
          />
          <Article
            img="/images/articles/smooth scrolling in reactjs.png"
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/"
          />
          <Article
            img="/images/articles/smooth scrolling in reactjs.png"
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="March 22, 2023"
            link="/"
          />
        </ul>
      </PageLayout>
    </main>
  )
}
