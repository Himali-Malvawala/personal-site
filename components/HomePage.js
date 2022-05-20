import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import Image from "next/image";

const HomePage = () => {
  return (
    <div className="static">
      <div className="flex">
        <div className="bg-blue h-screen flex-auto w-6"></div>
        <div className="bg-white h-screen flex-auto w-96"></div>
      </div>
      <div className="h-4/6 shadow-2xl bg-light-yellow w-3/12 absolute bottom-0 left-96 rounded-md">
        <div className="text-center pt-8">
          <Image width={200} height={200} src="/images/Image.png" />
        </div>
        <div className="text-center text-3xl font-bold pt-4">
          Himali
          <br />
          Malvawala
        </div>
        <div className="w-16 ml-40 border-t-2 mt-5 mb-5 border-blue text-center"></div>
        <div className="text-center italic text-2xl font-light">
          WEB DEVELOPER
        </div>
        <div className=" bg-white pt-4 pb-4 mt-9 rounded-b-md">
          <div className="flex justify-evenly mb-0">
            <a href="https://twitter.com/HimaliMalvawala">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/himalimalvawala/">
              <FaLinkedin size={20} className="hover:shrink-0" />
            </a>
            <a href="https://github.com/Himali-Malvawala">
              <FaGithub size={20} />
            </a>
            <a href="mailto: himalimalvawala@gmail.com">
              <HiMail size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute right-96 bottom-36 w-80">
        <h1 className="text-8xl font-black pb-10">Hello</h1>
        <p className="text-lg text-zinc-700">
          I'm Himali Malvawala and I'm a Web Developer, building
          web-apps(sites). I learned Web Development recently and so far its
          going great. I'm building new websites and this is one of them.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
