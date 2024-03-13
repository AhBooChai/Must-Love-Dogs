import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-end items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Must Love Dogs logo"
            width={65}
            height={65}
            className="object-contain"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
