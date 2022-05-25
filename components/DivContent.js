import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import Image from "next/image";

const DivContent = () => {
  return (
    <div className="text-center">
      <div className="mt-8 md:ml-7">
        <Image
          width={200}
          height={200}
          src="/images/Image.png"
          alt="himali malvawala profile picture"
        />
      </div>
      <p className="text-3xl font-bold mt-4">
        Himali
        <br />
        Malvawala
      </p>
      <div className="w-16 border-t-2 border-blue text-center m-auto mt-6 mb-4"></div>
      <p className="italic text-2xl font-light md:mt-6">WEB DEVELOPER</p>

      <div className="container rounded-b-md bg-white">
        <div className="flex justify-evenly mt-14 xl:mt-9">
          <a
            className="mt-5 mb-5 xl:mt-4 xl:mb-4"
            href="https://twitter.com/HimaliMalvawala"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            className="mt-5 mb-5 xl:mt-4 xl:mb-4"
            href="https://www.linkedin.com/in/himalimalvawala/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="hover:shrink-0" />
          </a>
          <a
            className="mt-5 mb-5 xl:mt-4 xl:mb-4"
            href="https://github.com/Himali-Malvawala"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            className="mt-5 mb-5 xl:mt-4 xl:mb-4"
            href="mailto: itsme@himalimalvawala.com"
            rel="noopener noreferrer"
          >
            <HiMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DivContent;
