"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import {useState} from "react";
import {SheetContent, SheetTrigger, Sheet} from "@/app/[lng]/components/ui/sheet";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeSheet = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  // Extract the current locale prefix from the pathname
  const currentLocale = pathname.split('/')[1];

  // Remove the locale prefix from the pathname for comparison
  const trimmedPathname = pathname.replace(`/${currentLocale}`, '') || '/';

  return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
          </button>
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-primary-light dark:bg-primary-dark">
          {/* logo */}
          <div className="mt-32 mb-40 text-center text-2xl bg-light dark:bg-dark">
            <Link href={`/${currentLocale}/`} onClick={closeSheet}>
              <h1 className="text-4xl font-semibold text-text-light dark:text-text-dark">
                Youri<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          {/* nav */}
          <nav className="flex flex-col justify-center items-center gap-8 text-text-light dark:text-text-dark">
            {links.map((link, index) => (
                <Link
                    href={`/${currentLocale}${link.path}`}
                    key={index}
                    className={`${
                        (link.path === '/' && trimmedPathname === '/') || (link.path !== '/' && link.path === trimmedPathname)
                            ? "text-accent border-b-2 border-accent"
                            : ""
                    } text-xl capitalize hover:text-accent transition-all`}
                    onClick={closeSheet}
                >
                  {link.name}
                </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
  );
};

export default MobileNav;
