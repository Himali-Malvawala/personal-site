import Footer from "./Footer";
import Navigation from "./Navigation";

const Template = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Template;
