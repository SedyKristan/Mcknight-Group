"use client";

import { Content } from "@prismicio/client";

import { Button } from "../ui/button";
import Sidebar from "./Sidebar";

type NavbarProps = {
  settings: Content.SettingsDocument<string>;
};

const Navbar = ({ settings }: NavbarProps) => {
  const navigations = settings.data.navigation;
  const ctaButton = settings.data.navigation.filter(
    (navigation) => navigation.cta_button === true
  );

  console.log(ctaButton);
  return (
    <nav
      aria-label="Main navigation"
      className="flex max-w-[1200px] w-full self-stretch justify-between items-center flex-auto"
    >
      <div className="flex items-center gap-4">
        {ctaButton.map((navigation, index) => (
          <Button key={index}>{navigation.label}</Button>
        ))}
      </div>
      <Sidebar settings={settings} />

      {/* <ul>
        {navigations.map((navigation, index) => (
          <li key={index}>{navigation.label}</li>
        ))}
      </ul> */}
    </nav>
  );
};

export default Navbar;
