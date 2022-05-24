import Template from "../components/Template";

import BlogItem from "../components/BlogItem";

const Blog = () => {
  return (
    <Template>
      <div className="text-center mt-14">
        <h1 className="text-5xl font-bold">Blog</h1>
        <BlogItem
          image="/images/computer1.jpg"
          title="Create Github Repository"
          date="September 03, 2021"
          minute="3 min read"
          description="Create you own Github repository from existing projects."
        />
      </div>
    </Template>
  );
};

export default Blog;
