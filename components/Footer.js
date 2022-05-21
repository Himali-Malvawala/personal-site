const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <p className="px-14 py-10 font-normal bg-yellow text-center mb-0 bottom-0 w-full">
      All rights Reserved © Himali Malvawala {year}
    </p>
  );
};

export default Footer;
