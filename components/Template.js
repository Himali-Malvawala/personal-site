// import { useRef } from "react";

import Footer from "./Footer";
import Navigation from "./Navigation";

// import useOutsideAlerter from "../hooks/useOutsideClick";

const Template = (props) => {
  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);

  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Template;
