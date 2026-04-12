"use client";
import Logo from "@/app/(Main)/components/logo";
import { AlignRight, LaptopMinimal, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SubItem {
  label: string;
  href: string;
}

const MainNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const phoneNumber2 = process.env.NEXT_PUBLIC_PHONE_NUMBER2;
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
  const address = process.env.NEXT_PUBLIC_ADDRESS;
  const address2 = process.env.NEXT_PUBLIC_ADDRESS2;

  const subItems: SubItem[] = [
    { label: "Web Development", href: "/web-development" },
    { label: "Graphics Design", href: "/graphic-design" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-colors duration-500 ease-in-out border-b border-Sbg ${
        scrolled ? "bg-Mbg/80 backdrop-blur-2xl shadow-sm" : "bg-Mbg"
      }`}
      aria-label="Main Navigation"
    >
      {/* Top bar for mobile with contact info */}
      <div className="md:hidden bg-Sbg text-white px-5 py-2 w-full flex">
        <div className="flex w-full justify-between items-center gap-5">
          <Link
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-2 text-sm"
            aria-label="Email Address"
          >
            <Mail className="w-3 h-3 text-Ttext" />
            <span>{emailAddress}</span>
          </Link>
          <div className="flex flex-col gap-1 text-sm">
            <Link
              href={`tel:${phoneNumber2}`}
              className="flex items-center gap-2"
              aria-label="Phone Number Australia"
            >
              <Phone className="w-3 h-3 text-Ttext" />
              <span>{phoneNumber2}</span>
            </Link>
            <Link
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2"
              aria-label="Phone Number Global"
            >
              <Phone className="w-3 h-3 text-Ttext" />
              <span>{phoneNumber}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="py-3 md:py-2 max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between text-white">
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center ml-7 gap-4">
            <li className="relative group">
              <button
                type="button"
                className={`flex items-center gap-2 py-2 px-1 text-sm capitalize nav-option ${
                  pathname === "/web-development" ||
                  pathname === "/graphic-design"
                    ? "actived"
                    : ""
                }`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                <LaptopMinimal
                  strokeWidth={pathname === "/services" ? 3 : 2}
                  className="w-5 h-5 pl-2"
                  aria-hidden="true"
                />
                <span>Services</span>
              </button>

              {/* Dropdown menu */}
              <ul
                className="absolute top-full left-0 w-60 py-3 bg-white rounded-md shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-200 ease-in-out flex flex-col space-y-2"
                role="menu"
                aria-label="Services submenu"
              >
                {subItems.map((subItem, index) => (
                  <li key={index} role="none">
                    <Link
                      href={subItem.href}
                      role="menuitem"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-black hover:bg-gray-200 rounded-md"
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Other nav items */}
            {[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Blog", href: "/blog" },
            ].map(({ label, href }) => (
              <li
                key={href}
                className="nav-option text-sm capitalize py-1.5 px-1"
              >
                <Link
                  href={href}
                  className={pathname === href ? "actived" : ""}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop contact info */}
        <div className="hidden md:flex items-center gap-5 text-sm">
          <Link
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-1"
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4" />
            <span>{emailAddress}</span>
          </Link>

          <div className="flex flex-col">
            <Link
              href={`tel:${phoneNumber2}`}
              className="flex items-center gap-1"
              aria-label="Phone Number Australia"
            >
              <Phone className="w-4 h-4" />
              <span>{phoneNumber2}</span>
            </Link>
            <Link
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-1"
              aria-label="Phone Number Global"
            >
              <Phone className="w-4 h-4" />
              <span>{phoneNumber}</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden w-8 h-8 border-white rounded transition-all duration-100 ease-in-out flex items-center justify-center ${
            isMenuOpen ? "p-1 border-[2px]" : "p-0 border-0"
          }`}
          type="button"
        >
          <AlignRight className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-[110px] z-[100] w-full bg-Mbg text-white transition-all duration-200 ease-in-out ${
          isMenuOpen
            ? "h-[calc(100vh-120px)] overflow-y-auto"
            : "h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {[
            { label: "Home", href: "/" },
            { label: "Web Development", href: "/web-development" },
            { label: "Graphic Design", href: "/graphic-design" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Blog", href: "/blog" },
          ].map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block px-5 py-1.5 hover:bg-indigo-950 ${
                  pathname === href ? "bg-indigo-900" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="my-2 border-gray-600" />

        {/* Contact info */}
        <div className="px-5 space-y-4 text-sm">
          <section>
            <h3 className="font-semibold text-white mb-1">
              Phone Number (Global)
            </h3>
            <Link
              href={`tel:${phoneNumber}`}
              className="block hover:underline text-Ttext"
              aria-label="Phone Number Global"
            >
              {phoneNumber}
            </Link>
          </section>
          <section>
            <h3 className="font-semibold text-white mb-1">
              Phone Number (Australia)
            </h3>
            <Link
              href={`tel:${phoneNumber2}`}
              className="block hover:underline text-Ttext"
              aria-label="Phone Number Australia"
            >
              {phoneNumber2}
            </Link>
          </section>
          <section>
            <h3 className="font-semibold text-white mb-1">Email</h3>
            <Link
              href={`mailto:${emailAddress}`}
              className="block hover:underline text-Ttext"
              aria-label="Email Address"
            >
              {emailAddress}
            </Link>
          </section>
          <address className="not-italic space-y-2 text-gray-300">
            <div className="flex items-start gap-2">
              <MapPin
                className="h-5 w-5 rounded-full bg-white text-black p-0.5 mt-0.5"
                aria-hidden="true"
              />
              <p>{address}</p>
            </div>
            <div className="flex items-start gap-2">
              <MapPin
                className="h-5 w-5 rounded-full bg-white text-black p-0.5 mt-0.5"
                aria-hidden="true"
              />
              <p>{address2}</p>
            </div>
          </address>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
