import Navigation from "./Navigation";
import Footer from "./Footer";

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
