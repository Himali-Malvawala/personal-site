import Head from "next/head";
// import favicon from "../public/images/avataaars.png";

import Page from "../components/page";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Himali Malvawala</title>
        <meta name="description" content="Himali Malvawala's Personal Site." />
        <link rel="icon" href="/avataaars.ico" />
      </Head>
      <HomePage />
    </Page>
  );
}
