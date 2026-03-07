"use client";
import { siteConfig } from "@/config/site";
import { Menu, ShieldCheck, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavBar({ activeTab }: { activeTab: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg py-2" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-white p-2.5 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] shadow-lg shadow-green-900/20">
            <Image
              src={"/apple-touch-icon.png"}
              width={30}
              height={30}
              alt={"logo"}
            />
          </div>
          <div className="leading-tight">
            <h1
              className={`font-black text-xl tracking-tighter transition-colors ${!scrolled ? "text-white!" : "text-green-950"}`}
            >
              CHITEPO
            </h1>
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-[0.2em]">
              School of Ideology
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {siteConfig.navItems.map((link, index) => (
            <Link
              href={link.href ?? ""}
              key={index}
              className={`text-sm font-bold transition-all hover:scale-105 ${
                !scrolled
                  ? "text-white/90 hover:text-white"
                  : "text-slate-600 hover:text-green-700"
              } ${activeTab === link.id ? "underline underline-offset-8 decoration-2" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition-all hover:shadow-[0_0_20px_rgba(22,163,74,0.4)] active:scale-95">
            Enroll Now
          </button>
        </div>

        <button
          className={`md:hidden ${!scrolled && activeTab === "home" ? "text-white" : "text-slate-900"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-green-950 text-white p-10 flex flex-col justify-center gap-8 animate-in fade-in zoom-in duration-300">
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={40} />
          </button>
          {siteConfig.navItems.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`text-4xl font-black text-left hover:text-green-400 transition-colors `}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
