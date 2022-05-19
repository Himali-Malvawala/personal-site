import Page from "../components/page";

const Contact = () => {
  return (
    <Page>
      <div className="bg-white py-8 px-14 text-center pb-44">
        <h1 className="text-6xl font-extrabold pb-36 pt-20">REACH OUT.</h1>
        <a
          className="pr-20 text-xl hover:text-blue font-medium"
          href="https://twitter.com/HimaliMalvawala"
        >
          Twitter
        </a>
        <a
          className="pr-20 text-xl hover:text-blue font-medium"
          href="https://www.linkedin.com/in/himalimalvawala/"
        >
          LinkedIn
        </a>
        <a
          className="pr-20 text-xl hover:text-blue font-medium"
          href="https://github.com/Himali-Malvawala"
        >
          Github
        </a>
        <a
          className="text-xl hover:text-blue font-medium"
          href="mailto: himalimalvawala@gmail.com"
        >
          Mail
        </a>
      </div>
    </Page>
  );
};

export default Contact;
