"use client"

import React from "react";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  logo as defaultLogo,
  menu as defaultMenu,
  mobileExtraLinks as defaultMobileExtraLinks,
} from "../../lib/navegacion";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavegadorProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

export default function Navegador({
  logo = defaultLogo,
  menu = defaultMenu,
  mobileExtraLinks = defaultMobileExtraLinks,
  auth = {
    login: { text: "Iniciar Sesión", url: "/login" },
    signup: { text: "Registrarse", url: "/signup" },
  },
}: NavegadorProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side: Logo and Desktop Menu */}
          <div className="flex items-center gap-8">
            <a href={logo.url} className="flex items-center space-x-2">
              <img src={logo.src} className="h-8 w-auto" alt={logo.alt} />
              <span className="text-lg font-bold font-heading tracking-tight text-[#2D3277]">
                Envíos<span className="text-[#FFE600]">DosRuedas</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  {menu.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      {item.items ? (
                        <>
                          <NavigationMenuTrigger className="bg-transparent text-[#2D3277] hover:text-[#FFE600] font-medium">
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {item.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      href={subItem.url}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none text-[#2D3277]">
                                        {subItem.title}
                                      </div>
                                      {subItem.description && (
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                          {subItem.description}
                                        </p>
                                      )}
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <a
                            href={item.url}
                            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#2D3277] transition-colors hover:text-[#FFE600]"
                          >
                            {item.title}
                          </a>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* Right side: Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" asChild className="text-[#2D3277] hover:text-[#FFE600]">
              <a href={auth.login.url}>{auth.login.text}</a>
            </Button>
            <Button asChild className="bg-[#FFE600] text-[#2D3277] hover:bg-[#FFD700] font-bold shadow-sm">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#2D3277]">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <img src={logo.src} className="h-6 w-auto" alt={logo.alt} />
                    <span className="text-lg font-bold text-[#2D3277]">EnvíosDosRuedas</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-6">
                  <nav className="flex flex-col gap-4">
                    {menu.map((item, index) => (
                      <div key={index}>
                        {item.items ? (
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value={`item-${index}`} className="border-none">
                              <AccordionTrigger className="text-[#2D3277] hover:text-[#FFE600] py-2 font-semibold">
                                {item.title}
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col gap-2 pl-4">
                                {item.items.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={subItem.url}
                                    className="py-2 text-sm text-muted-foreground hover:text-[#FFE600]"
                                  >
                                    {subItem.title}
                                  </a>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <a
                            href={item.url}
                            className="text-lg font-semibold text-[#2D3277] hover:text-[#FFE600] block py-2"
                          >
                            {item.title}
                          </a>
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="mt-auto flex flex-col gap-3 pt-6 border-t">
                    <Button variant="outline" className="w-full border-[#2D3277] text-[#2D3277] hover:bg-[#2D3277]/5" asChild>
                      <a href={auth.login.url}>{auth.login.text}</a>
                    </Button>
                    <Button className="w-full bg-[#FFE600] text-[#2D3277] font-bold hover:bg-[#FFD700]" asChild>
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
