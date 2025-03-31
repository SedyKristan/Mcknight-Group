"use client";

import { Content } from "@prismicio/client";

import { Button } from "../ui/button";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

type NavbarProps = {
  settings: Content.SettingsDocument<string>;
};

const Navbar = ({ settings }: NavbarProps) => {
  const navigations = settings.data.navigation;
  const ctaButton = settings.data.navigation.filter(
    (navigation) => navigation.cta_button === true
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed flex w-screen h-[68px] px-4 justify-center items-center z-50 transition-colors duration-200 ${isScrolled ? "bg-primary" : ""}`}
    >
      <div className="flex max-w-[1280px] w-full justify-between items-center">
        <ul className="flex items-center gap-3 self-stretch">
          {navigations.map((navigation, index) => (
            <li
              key={index}
              className="nav-links px-4 py-2 text-[var(--text-primary-dark)]"
            >
              {navigation.label}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {ctaButton.map((navigation, index) => (
            <Button key={index} size="sm">
              {navigation.label}
            </Button>
          ))}
        </div>
        <Sidebar settings={settings} />
      </div>
    </nav>
  );
};

export default Navbar;
