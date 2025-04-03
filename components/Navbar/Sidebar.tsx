"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { BurgerMenuSolid } from "../icons";
import { Content } from "@prismicio/client";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  section_id: string;
  cta_button?: boolean;
};

type SidebarProps = {
  settings: Content.SettingsDocument<string>;
  onNavigate?: (sectionId: string) => void;
};

const Sidebar = ({ settings, onNavigate }: SidebarProps) => {
  const navigations = settings.data.navigation as NavItem[];
  const ctaButton = navigations.find((item) => item.cta_button);
  const regularNavItems = navigations.filter((item) => !item.cta_button);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigations
        .filter(
          (nav) => typeof nav.section_id === "string" && nav.section_id !== null
        )
        .map((nav) => document.getElementById(nav.section_id!))
        .filter((section): section is HTMLElement => section !== null);

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigations]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="lg:hidden cursor-pointer"
          size="icon"
        >
          <BurgerMenuSolid className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[325px] flex p-4 flex-col items-start h-screen bg-primary"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex pt-6 flex-col justify-between flex-auto self-stretch">
          <div className="flex flex-col self-stretch items-start gap-4">
            {regularNavItems.map((item, index) => (
              <SheetClose asChild key={index}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start !label-lg cursor-pointer text-white hover:bg-white/5 ${activeSection === item.section_id ? "!bg-white/10" : ""}`}
                  size="sm"
                  onClick={() =>
                    item.section_id && onNavigate?.(item.section_id)
                  }
                >
                  {item.label}
                </Button>
              </SheetClose>
            ))}
          </div>

          {ctaButton && (
            <SheetClose asChild>
              <Button
                className="w-full"
                onClick={() =>
                  ctaButton.section_id && onNavigate?.(ctaButton.section_id)
                }
              >
                {ctaButton.label}
              </Button>
            </SheetClose>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
