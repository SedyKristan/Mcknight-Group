import { LogoSolid } from "../icons";

const Footer = () => {
  return (
    <footer className="flex h-[320px] text-white bg-primary flex-col justify-center items-center gap-5 self-stretch">
      <LogoSolid className="w-[129px] " />
      <p className="paragraph-sm">© All rights Reserved. McKnight Group</p>
    </footer>
  );
};

export default Footer;
