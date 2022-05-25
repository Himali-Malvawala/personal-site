import Head from "next/head";

import Template from "../components/Template";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <Template>
      <Head>
        <title>Himali Malvawala</title>
        <meta
          name="description"
          content="I'm Himali Malvawala and I'm a Web Developer, building
          web-apps(sites)."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Himali Malvawala" />
        <meta name="twitter:title" content="Himali Malvawala" />
        <meta
          name="twitter:description"
          content="I'm Himali Malvawala and I'm a Web Developer, building
          web-apps(sites)."
        />
        <meta name="twitter:creator" content="Himali Malvawala" />
        <link rel="icon" href="/avataaars.ico" />
      </Head>
      <HomePage />
    </Template>
  );
}
