const ContactContent = () => {
  return (
    <div className="text-center mt-24 xl:mt-28 lg:mt-28 md:mt-28 md:mb-96">
      <h1 className="text-4xl font-extrabold pt-2 md:text-6xl md:pt-0 lg:text-5xl lg:pt-0 xl:text-6xl xl:pt-0">
        REACH OUT.
      </h1>
      <div className="mt-16 mb-96 md:mt-36 md:mb-96 lg:mt-36 lg:mb-48 xl:mt-36 xl:mb-44">
        <a
          className="hover:text-blue font-medium text-xl mr-6 md:mr-20 lg:mr-20 xl:mr-20"
          href="https://twitter.com/HimaliMalvawala"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="hover:text-blue font-medium text-xl mr-6 md:mr-20 lg:mr-20 xl:mr-20"
          href="https://www.linkedin.com/in/himalimalvawala/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="hover:text-blue font-medium text-xl mr-6 md:mr-20 lg:mr-20 xl:mr-20"
          href="https://github.com/Himali-Malvawala"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="hover:text-blue font-medium text-xl mr-2 md:mr-0 lg:mr-0 xl:mr-0"
          href="mailto: himalimalvawala@gmail.com"
          rel="noopener noreferrer"
        >
          Mail
        </a>
      </div>
    </div>
  );
};

export default ContactContent;
