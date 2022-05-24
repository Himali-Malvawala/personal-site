import Image from "next/image";

const BlogItem = (props) => {
  return (
    <div className="container w-10/12 ml-8 mt-11 mb-28 rounded-xl shadow-2xl bg-blue md:w-7/12 md:flex md:text-left md:ml-72 md:mt-20 md:bg-white md:shadow-none md:mb-32">
      <div>
        <Image
          width={350}
          height={200}
          src={props.image}
          className="rounded-b-md rounded-t-xl md:rounded-xl"
          alt="computer setup Image"
        />
      </div>
      <div className="md:ml-9 md:mt-2 mt-4">
        <a
          className="text-white underline font-semibold text-2xl md:no-underline md:hover:underline md:text-cyan-700"
          href="https://himali-malvawala.netlify.app/git-repository/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
        <p className="text-zinc-500 mt-4">
          <span>{props.date}</span> - <span>{props.minute}</span>
        </p>
        <p className="mt-4 text-lg pb-7 px-3 md:px-0 md:text-base">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
