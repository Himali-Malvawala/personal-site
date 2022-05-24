import Head from "next/head";

import Template from "../components/Template";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <Template>
      <Head>
        <title>Himali Malvawala</title>
        <meta name="description" content="Himali Malvawala's Personal Site." />
        <link rel="icon" href="/avataaars.ico" />
      </Head>
      <HomePage />
    </Template>
  );
}
