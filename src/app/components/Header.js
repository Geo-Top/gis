"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header({link} ) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const links = [
    { href: "/home/ar", text: "الرئيسية" },
    { href: "/courses/ar", text: "الدورات" },
    { href: "/instructors/ar", text: "المدربون" },
    { href: "/contact/ar", text: "تواصل معنا" },
    { href: "/https://geo-top.github.io/geotop/", text: "جيو توب" },
  ];
  const lang = "EN"
  const languageSwitchLink = `${link}/en`; 

  return (
    <header dir="rtl" className="flex items-center justify-between px-4 py-3">
      {/* Logo and Site Name */}
      <Link href="/">
        <div className="flex items-center gap-2">
          <img
            src="/Geo Top logo.png"
            alt="Geo Top Logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold text-[#007bff]"> دورات جيو توب </h1>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:text-[#007bff] text-xl font-bold"
          >
            {link.text}
          </Link>
        ))}
      </nav>

      {/* Language Toggle Button */}
      <Link
        href={languageSwitchLink}
        className="hidden md:block px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        {lang}
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#f9fafb] md:hidden z-10 border-t-2">
          <nav className="flex flex-col items-center py-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-[#007bff] py-3 text-center text-xl font-bold hover:bg-gray-200 w-full"
                onClick={toggleMenu}
              >
                {link.text}
              </Link>
            ))}
            <Link
              href={languageSwitchLink}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 w-[90%] mt-4 text-center"
            >
              {lang}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
