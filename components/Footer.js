const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-yellow">
      <p className="px-14 py-10 font-normal text-center ">
        All rights Reserved © Himali Malvawala {year}
      </p>
    </div>
  );
};

export default Footer;
