const AboutContent = () => {
  return (
    <div className="mt-14 text-left mx-9 mb-14 md:w-7/12 md:m-auto md:mt-14 md:mb-20 lg:w-7/12 lg:m-auto lg:mt-14 lg:mb-24 xl:w-7/12 xl:ml-80 xl:mb-24">
      <h1 className="text-5xl font-bold text-center xl:mb-14">About</h1>
      <p className="text-xl text-gray-700 mt-11">
        Hey!! My name is Himali Malvawala and I'm a web developer. I learned Web
        Development recently, so I guess I can call myself a beginner and as a
        beginner to really get into that coding mindset I keep creating websites
        and keep learning new things.
      </p>
      <p className="text-xl text-gray-700 mt-9">
        So How it all started?. Well, I have a degree in Business Administration
        field and while I was pursuing that, my brother encouraged me to start
        learning Web Development. And after couple of months I decided that I
        want to have a career in this field, so here we are!!
      </p>
      <p className="text-xl text-gray-700 mt-9">
        About my interests, I like to listen to music while coding, and usually
        I listen to{"   "}
        <span>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            className="underline hover:text-blue"
            href="https://open.spotify.com/artist/46d1ndWtnYj9kxd3IlQykV?si=I09Io-dATHuIAL7TNX8Hiw"
          >
            Chill Beats
          </a>
        </span>{" "}
        on Spotify. Apart from that, I'm not a typical book-reading person but I
        have developed habit of reading books. The most recent one is{" "}
        <span>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            className="underline hover:text-blue"
            href="https://www.navalmanack.com/"
          >
            The Almanack of Naval Ravikant
          </a>
        </span>{" "}
        and currently I'm reading{" "}
        <span>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            className="underline hover:text-blue"
            href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&%20going/README.md#you-dont-know-js-up--going"
          >
            Up & Going (You Don't Know JS)
          </a>
        </span>{" "}
        . In Gaming, I usually play Valorant at which I'm not that good.
      </p>
      <p className="text-xl text-gray-700 mt-9">
        I like to document things that come my way and I like to share that with
        people. For that I write Blogs and I also have an Instagram Account
        called {"   "}
        <span>
          <a
            rel="noopener noreferrer"
            className="underline hover:text-blue"
            target={"_blank"}
            href="https://instagram.com/day_journalising?igshid=YmMyMTA2M2Y="
          >
            day_journalising
          </a>
        </span>
        {"   "}
        where I post my content.
      </p>
      <p className="text-xl text-gray-700 mt-9">
        I hope you enjoyed it. You can reach out to me on any of the social apps
        or email me at{" "}
        <span>
          <a
            rel="noopener noreferrer"
            className="underline hover:text-blue"
            href="mailto: himalimalvawala@gmail.com"
          >
            himalimalvawala@gmail.com
          </a>
        </span>
      </p>
    </div>
  );
};

export default AboutContent;
