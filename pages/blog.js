import Page from "../components/page";
import BlogItem from "../components/BlogItem";

const Blog = () => {
  return (
    <Page>
      <h1 className="text-center text-5xl font-bold mt-14 mb-20">Blog</h1>
      <BlogItem
        image="/images/computer1.jpg"
        title="Create Github Repository"
        date="September 03, 2021"
        minute="3 min read"
        description="Create you own Github repository from existing projects."
      />
    </Page>
  );
};

export default Blog;
