import Page from "../components/page";

const About = () => {
  return (
    <Page>
      <div className="w-7/12 text-center ml-80 mb-24">
        <h1 className="text-5xl font-bold mt-14 mb-14">About</h1>
        <p className="text-xl text-gray-700 pb-9">
          Hey!! My name is Himali Malvawala and I'm a web developer. I learned
          Web Development recently, so I guess I can call myself a beginner and
          to really get into that coding mindset I keep creating websites and
          I'm also learning new things related to that.
        </p>

        <p className="text-xl text-gray-700 pb-9">
          So How it all started?. Well, I have a degree in Business
          Administration field and while I was pursuing that, around end of that
          I started learning Web Development.
        </p>

        <p className="text-xl text-gray-700 pb-9">
          About my interests, I like to listen to music while doing work and
          while coding I like to listen{"   "}
          <span>
            <a
              className="underline hover:text-blue"
              href="https://open.spotify.com/artist/46d1ndWtnYj9kxd3IlQykV?si=I09Io-dATHuIAL7TNX8Hiw"
            >
              Chill Beats
            </a>
          </span>{" "}
          on Spotify. Also, I wasn't reading type of a person but over the time
          I have developed habit of reading books. The most recent one is{" "}
          <span>
            <a
              className="underline hover:text-blue"
              href="https://www.navalmanack.com/"
            >
              The Almanack of Naval Ravikant
            </a>
          </span>{" "}
          and currently I'm reading{" "}
          <span>
            <a
              className="underline hover:text-blue"
              href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&%20going/README.md#you-dont-know-js-up--going"
            >
              Up & Going (You Don't Know JS)
            </a>
          </span>{" "}
          . In Gaming, I usually play Valorant at which I'm not that good.
        </p>

        <p className="text-xl text-gray-700 pb-9">
          I like to document things that come my way and I like to share that
          with people. For that I write Blogs (which you can see in the
          navigation) and I also have an Instagram Account called {"   "}
          <span>
            <a
              className="underline hover:text-blue"
              href="https://instagram.com/day_journalising?igshid=YmMyMTA2M2Y="
            >
              day_journalising
            </a>
          </span>
          {"   "}
          where I post my content.
        </p>
        <p className="text-xl text-gray-700">
          I hope you enjoyed it. You can reach out to me on any of the social
          apps or email me at{" "}
          <span>
            <a
              className="underline hover:text-blue"
              href="mailto: himalimalvawala@gmail.com"
            >
              himalimalvawala@gmail.com
            </a>
          </span>
        </p>
      </div>
    </Page>
  );
};

export default About;

// instagram acount
// email
