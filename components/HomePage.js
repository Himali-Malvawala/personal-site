import DivContent from "./DivContent";

const HomePage = () => {
  return (
    <div className="static">
      <div className="container flex flex-col md:flex md:flex-row">
        <div className="bg-blue w-screen h-96 md:flex-auto md:w-6 md:h-screen"></div>
        <div className="bg-white w-screen h-72  md:flex-auto md:w-96 md:h-screen"></div>
      </div>
      <div className="shadow-2xl bg-light-yellow rounded-md h-3/5 w-5/6 absolute top-60 left-9 md:w-3/12 md:h-4/6 md:left-96">
        <DivContent />
      </div>
      <div className="mt-6 ml-11 md:absolute md:right-80 md:bottom-20 md:w-96">
        <h1 className="font-black text-5xl mb-6 md:text-8xl md:mb-10">Hello</h1>
        <p className="text-zinc-700 text-xl pr-9 mb-16 md:text-lg">
          {" "}
          I'm Himali Malvawala and I'm a Web Developer, building
          web-apps(sites). I learned Web Development recently and so far its
          going great. I'm building new websites and this is one of them.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
