import DivContent from "./DivContent";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex lg:flex-row justify-center items-center">
        <div className="bg-blue w-screen h-96 lg:flex-auto lg:w-36 lg:h-screen"></div>
        <div className="bg-white w-screen h-fit lg:flex-auto lg:w-96 lg:h-screen  xl:flex-auto xl:w-96 xl:h-screen">
          <div className="ml-10 mt-80 md:ml-28 md:mt-80 lg:mt-36 lg:ml-44 md:m-auto md:w-8/12 lg:w-96 xl:w-80 ">
            <h1 className="font-black text-5xl mb-6 md:text-6xl lg:text-7xl lg:mb-10 xl:text-8xl xl:mb-10">
              Hello
            </h1>
            <p className="text-zinc-700 text-xl pr-9 mb-16 md:text-xl">
              {" "}
              I'm Himali Malvawala and I'm a Software Developer, building
              web-apps and sites.
            </p>
          </div>
        </div>
      </div>
      <div className="shadow-2xl bg-light-yellow rounded-md h-fit w-5/6 absolute top-60 left-9 sm:left-14 md:left-28 md:top-48 md:w-9/12 lg:w-4/12 lg:left-[18%] xl:w-4/12 2xl:w-3/12 2xl:left-[25%]">
        <DivContent />
      </div>
    </div>
  );
};

export default HomePage;
