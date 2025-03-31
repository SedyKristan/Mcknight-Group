"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { BurgerMenuSolid } from "../icons";
import { Content } from "@prismicio/client";
import { Button } from "../ui/button";

type NavItem = {
  label: string;
  section_id: string;
  cta_button?: boolean;
};

type SidebarProps = {
  settings: Content.SettingsDocument<string>;
};

const Sidebar = ({ settings }: SidebarProps) => {
  const navigations = settings.data.navigation as NavItem[];
  const ctaButton = navigations.find((item) => item.cta_button);
  const regularNavItems = navigations.filter((item) => !item.cta_button);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <BurgerMenuSolid className="h-5 w-5" />
        </Button>
        {/* <button className="lg:hidden">
          <BurgerMenuSolid className="h-10 w-10 text-neutral-light" />
        </button> */}
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[325px] flex p-4 flex-col items-start h-screen bg-primary"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex pt-6 flex-col justify-between flex-auto self-stretch">
          <div className="flex flex-col self-stretch items-start">
            {regularNavItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.section_id}`}
                className="flex py-6 pr-5 pl-6 tab-links text-[var(--color-neutral-light)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {ctaButton && (
            <Button asChild className="w-full">
              <a href={`#${ctaButton.section_id}`}>{ctaButton.label}</a>
            </Button>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
