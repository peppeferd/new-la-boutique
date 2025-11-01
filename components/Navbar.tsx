"use client";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useRef, useState } from "react";
import logo from "../app/favicon.ico";
import { Cormorant_Infant, Licorice, Kotta_One } from "next/font/google";
const firstFont = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const secondFont = Licorice({
  subsets: ["latin"],
  weight: ["400"],
});
const thirdFont = Kotta_One({
  subsets: ["latin"],
  weight: ["400"],
});
const Navbar = () => {
  const navLinks = [
    { name: "Prodotti", path: "/" },
    { name: "Contatti", path: "/" },
  ];

  const ref: any = useRef(null);
  const { isSignedIn, user, isLoaded } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(ref.current.scrollTop > 10);
    };
    ref.current.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref}>
      <nav
        className={`fixed top-0 left-0 bg-indigo-500 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
            : "py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <a
          href="/"
          className={`flex items-center gap-2 ${secondFont.className} text-3xl border-2 border-white p-2 rounded-2xl`}
        >
          <h1>La Boutique</h1>
          <img src={logo.src} alt="" width={50} height={50} />
        </a>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex items-center gap-4 lg:gap-8 ${firstFont.className} text-3xl`}
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          {isSignedIn ? (
            <div className="flex flex-row gap-6">
              <UserButton />
              <a
                href="/profilo"
                className={`${thirdFont.className} text-3xl text-white p-2 hover:text-blue-500 hover:bg-white hover:p-2 rounded-2xl`}
              >
                Profilo
              </a>
            </div>
          ) : (
            <div className={`${thirdFont.className}`}>
              <SignInButton>
                <button
                  className={`cursor-pointer px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
                    isScrolled ? "text-white bg-black" : "bg-white text-black"
                  }`}
                >
                  Login
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                  className={`cursor-pointer px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
                    isScrolled ? "text-white bg-black" : "bg-white text-black"
                  }`}
                >
                  Registrati
                </button>
              </SignUpButton>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <a
              className={`${thirdFont.className}`}
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {isSignedIn ? (
            <div>
              <UserButton />
            </div>
          ) : (
            <div className={`${thirdFont.className} flex flex-col gap-5`}>
              <SignInButton>
                <button className="bg-black cursor-pointer text-white px-8 py-2.5 rounded-full transition-all duration-500">
                  Login
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-black cursor-pointer text-white px-8 py-2.5 rounded-full transition-all duration-500">
                  Registrati
                </button>
              </SignUpButton>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
