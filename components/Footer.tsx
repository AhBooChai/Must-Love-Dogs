import Image from "next/image";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="bottom-0 w-full pt-8 text-black mb-2 z-10">
      <div className="flex justify-center items-center gap-3 p-4">
        <Image
          src="/logo.svg"
          alt="logo"
          width={35}
          height={35}
          className="object-contain"
        />
        <p className="flex justify-center items-center text-sm gap-1">
          Ⓒ {year} Must Love Dogs. Terms of Use.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
