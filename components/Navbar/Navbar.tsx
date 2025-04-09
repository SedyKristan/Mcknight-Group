"use client";

import { Content } from "@prismicio/client";
import { Button } from "../ui/button";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useNavigation } from "@/lib/hooks/useNavigation";
import { useActiveSectionContext } from "@/context/activeSectionContetxt";
import { LogoSolid } from "../icons";
type NavbarProps = {
  settings: Content.SettingsDocument<string>;
};

const Navbar = ({ settings }: NavbarProps) => {
  const { scrollToSection } = useNavigation();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isScrolled, setIsScrolled] = useState(false);

  const navigations = settings.data.navigation;
  const ctaButton = navigations.filter(
    (nav) =>
      nav.cta_button === true &&
      typeof nav.section_id === "string" &&
      nav.section_id !== null
  );
  const navLinks = navigations.filter(
    (nav) =>
      !nav.cta_button &&
      typeof nav.section_id === "string" &&
      nav.section_id !== null
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const normalizedSectionId = sectionId.toLowerCase();
    setTimeOfLastClick(Date.now());
    setActiveSection(normalizedSectionId);
    scrollToSection(normalizedSectionId);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed flex w-screen h-[68px] px-4 justify-center items-center z-50 transition-colors duration-200 ${isScrolled ? "bg-primary" : ""}`}
    >
      <div className="flex max-w-[1280px] w-full justify-between items-center">
        <div className="w-full">
          <LogoSolid
            className={`${isScrolled ? "opacity-100" : "opacity-0"} size-16 text-white transition-opacity duration-200 ease-in-out`}
          />
        </div>
        <ul className="hidden lg:flex items-center gap-3 self-stretch">
          {navLinks.map((navigation, index) => (
            <li
              key={index}
              className={`nav-links cursor-pointer  px-4 py-2 text-[var(--text-primary-dark)] transition-colors ${activeSection === navigation.section_id?.toLowerCase() ? "text-primary-lightest rounded-lg bg-white-10" : ""}`}
              onClick={() =>
                navigation.section_id && handleNavClick(navigation.section_id)
              }
            >
              {navigation.label}
            </li>
          ))}
        </ul>
        {ctaButton.length > 0 && (
          <div className="flex items-center gap-4">
            {ctaButton.map((navigation, index) => (
              <Button
                key={index}
                size="sm"
                onClick={() =>
                  navigation.section_id && handleNavClick(navigation.section_id)
                }
              >
                {navigation.label}
              </Button>
            ))}
          </div>
        )}
        <Sidebar settings={settings} onNavigate={handleNavClick} />
      </div>
    </nav>
  );
};

export default Navbar;
