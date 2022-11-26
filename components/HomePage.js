import DivContent from "./DivContent";

const HomePage = () => {
  return (
    <div>
      <div className="container flex flex-col md:flex md:flex-col lg:flex lg:flex-row xl:flex xl:flex-row">
        <div className="bg-blue w-screen h-96 lg:flex-auto lg:w-6 lg:h-screen xl:flex-auto xl:w-6 xl:h-screen"></div>
        <div className="bg-white w-screen h-fit lg:flex-auto lg:w-96 lg:h-screen  xl:flex-auto xl:w-96 xl:h-screen">
          <div className="ml-10 mt-80 md:ml-28 md:mt-80 xl:mt-36 xl:ml-60 md:m-auto md:w-8/12 lg:w-96 xl:w-80 ">
            <h1 className="font-black text-5xl mb-6 md:text-6xl lg:text-7xl lg:mb-10 xl:text-8xl xl:mb-10">
              Hello
            </h1>
            <p className="text-zinc-700 text-xl pr-9 mb-16 md:text-xl xl:text-lg">
              {" "}
              I'm Himali Malvawala and I'm a software Developer, building
              web-apps and sites.
            </p>
          </div>
        </div>
      </div>
      <div className="shadow-2xl bg-light-yellow rounded-md h-fit w-5/6 absolute top-60 left-9 md:left-28 md:top-48 md:w-9/12 lg:w-3/12 lg:left-44 xl:w-3/12 xl:h-4/6 xl:left-96">
        <DivContent />
      </div>
    </div>
  );
};

export default HomePage;
