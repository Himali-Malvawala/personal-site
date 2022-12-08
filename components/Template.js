// import { useRef } from "react";

import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation";

// import useOutsideAlerter from "../hooks/useOutsideClick";

const Template = (props) => {
  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);

  return (
    <div>
      <Head>
        <title>Himali Malvawala</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-1">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Template;
