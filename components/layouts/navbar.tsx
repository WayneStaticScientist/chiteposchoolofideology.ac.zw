"use client";
import { Menu, ShieldCheck, X } from "lucide-react";
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
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Curriculum", id: "curriculum" },
    { name: "Apply", id: "apply" },
    { name: "Student Portal", id: "portal" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg py-2" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-green-700 p-2.5 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] shadow-lg shadow-green-900/20">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <div className="leading-tight">
            <h1
              className={`font-black text-xl tracking-tighter transition-colors ${!scrolled && activeTab === "home" ? "text-white" : "text-green-950"}`}
            >
              CHITEPO
            </h1>
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-[0.2em]">
              School of Ideology
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`text-sm font-bold transition-all hover:scale-105 ${
                !scrolled && activeTab === "home"
                  ? "text-white/90 hover:text-white"
                  : "text-slate-600 hover:text-green-700"
              } ${activeTab === link.id ? "underline underline-offset-8 decoration-2" : ""}`}
            >
              {link.name}
            </button>
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
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="text-4xl font-black text-left hover:text-green-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
