"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();

  // Extract the current locale prefix from the pathname
  const currentLocale = pathname.split('/')[1];

  // Remove the locale prefix from the pathname for comparison
  const trimmedPathname = pathname.replace(`/${currentLocale}`, '') || '/';

  return (
      <nav className="flex gap-8 text-text-light dark:text-text-dark">
        {links.map((link, index) => {
          return (
              <Link
                  href={`/${currentLocale}${link.path}`}
                  key={index}
                  className={`${
                      link.path === trimmedPathname && "text-accent border-b-2 border-accent"
                  } capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
          );
        })}
      </nav>
  );
};

export default Nav;
