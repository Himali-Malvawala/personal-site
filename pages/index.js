import Head from "next/head";
// import favicon from "../public/images/avataaars.png";
import favicon from "../public/avataaars.ico";
import Page from "../components/page";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Himali Malvawala</title>
        <meta name="description" content="Himali Malvawala's Personal Site." />
        <link rel="icon" href={favicon} />
      </Head>
      <h1>Okay!!!!</h1>
    </Page>
  );
}
