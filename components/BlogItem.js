import Image from "next/image";

const BlogItem = (props) => {
  return (
    <div className="flex w-7/12 text-center ml-64 mb-44">
      <div className="flex-auto">
        <Image
          width={350}
          height={200}
          src={props.image}
          className="rounded-md"
        />
      </div>
      <div className="flex-auto text-left pt-2">
        <a
          className="text-2xl text-cyan-700 font-semibold hover:underline"
          href="https://himali-malvawala.netlify.app/git-repository/"
          target={"_blank"}
        >
          {props.title}
        </a>

        <p className=" text-zinc-500 pt-3">
          <span>{props.date}</span> - <span>{props.minute}</span>
        </p>
        <p className="pt-4 text-base">{props.description}</p>
      </div>
    </div>
  );
};

export default BlogItem;

// py-8 px-14
