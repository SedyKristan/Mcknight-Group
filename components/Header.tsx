import { createClient } from "@/prismicio";
import Navbar from "./Navbar/Navbar";

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="fixed flex w-screen h-[100px] py-6 px-4 justify-center items-center z-50">
      <Navbar settings={settings} />
    </header>
  );
};

export default Header;
