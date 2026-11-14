import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      width={150}
      height={150}
      alt="logo"
      className="mx-auto"
    />
  );
};

export default Logo;
