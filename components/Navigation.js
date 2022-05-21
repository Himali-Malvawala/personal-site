import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-between py-8 px-14 bg-yellow">
      <Link href="/">
        <a className="font-mono text-3xl font-semibold hover:text-blue">
          Himali Malvawala
        </a>
      </Link>
      <div className="text-lg font-light">
        <Link href="/about">
          <a className="pr-10 hover:text-white">ABOUT</a>
        </Link>
        <Link href="/blog">
          <a className="pr-10 hover:text-white">BLOG</a>
        </Link>
        <Link href="/contact">
          <a className=" hover:text-white">CONTACT</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
