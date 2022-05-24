import Footer from "./Footer";
import Navigation from "./Navigation";

const Page = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Page;
