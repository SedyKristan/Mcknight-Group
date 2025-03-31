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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden" size="icon">
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
              <SheetClose asChild key={index}>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                  onClick={() => item.section_id && onNavigate?.(item.section_id)}
                >
                  {item.label}
                </Button>
              </SheetClose>
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
