"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

// Updated siteConfig with children for the About section
export const siteConfig = {
  name: "Chitepo School of Ideology",
  description:
    "The Chitepo School of Ideology is more than an educational institution; it is the ideological heartbeat of Zimbabwe.",
  navItems: [
    {
      label: "Home",
      href: "/",
      id: "home",
    },
    {
      label: "About",
      id: "about",
      children: [
        { label: "Mission", href: "/about/mission" },
        { label: "Vision", href: "/about/vision" },
        { label: "Values", href: "/about/values" },
      ],
    },
    {
      label: "Courses",
      children: [
        { label: "Party Governancy", href: "#" },
        {
          label: "National Defense And Security Policy",
          href: "#",
        },
        { label: "Party Governancy", href: "#" },
        {
          label: "Emerging Trends on the Geo-Political Landscape",
          href: "#",
        },
        {
          label: "National Ideology",
          href: "#",
        },
        {
          label: "National Heritage",
          href: "#",
        },
      ],
      id: "courses",
    },
    { label: "Apply", href: "/apply", id: "apply" },
    { label: "Student Portal", href: "/portal", id: "portal" },
  ],
};

export default function NavBar({ activeTab = "home" }: { activeTab?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-white p-2.5 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] shadow-lg shadow-green-900/20">
            {/* Using standard img for compatibility */}
            <img
              src="/apple-touch-icon.png"
              width="30"
              height="30"
              alt="logo"
              style={{ width: "30px", height: "30px" }}
              onError={(e) =>
                (e.currentTarget.src = "https://placehold.co/30x30?text=C")
              }
            />
          </div>
          <div className="leading-tight">
            <h1
              className={`font-black text-xl tracking-tighter transition-colors ${
                !scrolled ? "text-white" : "text-green-950"
              }`}
            >
              CHITEPO
            </h1>
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-[0.2em]">
              School of Ideology
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.map((link, index) => {
            if (link.children) {
              return (
                <div key={index} className="relative group py-4">
                  <button
                    className={`flex items-center gap-1 text-sm font-bold transition-all ${
                      !scrolled
                        ? "text-white/90 hover:text-white"
                        : "text-slate-600 hover:text-green-700"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl py-3 border border-slate-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    {link.children.map((child, idx) => (
                      <a
                        key={idx}
                        href={child.href}
                        className="block px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                href={link.href ?? ""}
                key={index}
                className={`text-sm font-bold transition-all hover:scale-105 ${
                  !scrolled
                    ? "text-white/90 hover:text-white"
                    : "text-slate-600 hover:text-green-700"
                } ${activeTab === link.id ? "underline underline-offset-8 decoration-2" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
          <a href="https://studentcsi.comradeconnect.co.zw/welcome" className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition-all hover:shadow-[0_0_20px_rgba(22,163,74,0.4)] active:scale-95 ml-2 text-center inline-block">
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${
            !scrolled && activeTab === "home" ? "text-white" : "text-slate-900"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={32} />
          ) : (
            <Menu size={32} color={!scrolled ? "white" : "black"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-green-950 text-white z-[150] p-8 flex flex-col justify-start pt-24 gap-4 animate-in fade-in slide-in-from-top duration-300 overflow-y-auto">
          <button
            className="absolute top-6 right-6 p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>

          {siteConfig.navItems.map((link, index) => (
            <div key={index} className="flex flex-col">
              {link.children ? (
                <>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="font-black flex items-center justify-between w-full hover:text-green-400 transition-colors py-2"
                  >
                    {link.label}
                    <ChevronDown
                      size={32}
                      className={`transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`flex flex-col gap-4 pl-4 overflow-hidden transition-all duration-300 ${mobileAboutOpen ? "max-h-60 mt-4" : "max-h-0"}`}
                  >
                    {link.children.map((child, idx) => (
                      <a
                        key={idx}
                        href={child.href}
                        onClick={() => setIsMenuOpen(false)}
                        className=" font-bold text-green-300/80 hover:text-white"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={link.href ?? ""}
                  onClick={() => setIsMenuOpen(false)}
                  className=" font-black hover:text-green-400 transition-colors py-2"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}

          <a href="https://studentcsi.comradeconnect.co.zw/welcome" className="mt-8 bg-white text-green-950 w-full py-4 rounded-2xl text-xl font-black active:scale-95 transition-transform text-center block">
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}
