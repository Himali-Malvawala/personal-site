import Head from "next/head";
// import favicon from "../public/images/avataaars.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Himali Malvawala</title>
        <meta name="description" content="Himali Malvawala's Personal Site." />
        <link rel="icon" href={""} />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
