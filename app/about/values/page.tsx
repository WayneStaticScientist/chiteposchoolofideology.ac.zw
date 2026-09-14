"use client";
import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ShieldAlert,
  Handshake,
  Scale,
  Hammer,
  Users2,
  BookOpenCheck,
  Award,
  Fingerprint,
  Anchor,
  HeartHandshake,
} from "lucide-react";
import NavBar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { ValueTile } from "@/components/layouts/value-tile";

/**
 * INTERACTIVE VALUE TILE
 */

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      icon: ShieldAlert,
      title: "Unwavering Patriotism",
      desc: "Placing the interests of Zimbabwe above all else, fostering a deep-seated love for our heritage and sovereign future.",
      colorClass: "bg-green-600",
    },
    {
      icon: Handshake,
      title: "Ethical Integrity",
      desc: "Upholding the highest standards of honesty and moral uprightness in every aspect of national service and leadership.",
      colorClass: "bg-amber-500",
    },
    {
      icon: Scale,
      title: "Social Justice",
      desc: "Commitment to fairness, equality, and the equitable distribution of national resources for the benefit of all citizens.",
      colorClass: "bg-red-600",
    },
    {
      icon: Hammer,
      title: "Hard Work",
      desc: "Believing in the dignity of labor and the necessity of diligent effort to build a prosperous and self-reliant nation.",
      colorClass: "bg-blue-600",
    },
    {
      icon: Users2,
      title: "Unity (Ubuntu)",
      desc: "Fostering collective responsibility and communal harmony, recognizing that our strength lies in our togetherness.",
      colorClass: "bg-purple-600",
    },
    {
      icon: BookOpenCheck,
      title: "Knowledge",
      desc: "The pursuit of truth and decolonised education as a tool for liberation and sustainable development.",
      colorClass: "bg-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-green-600 selection:text-white font-sans overflow-x-hidden">
      <NavBar activeTab="values" />

      <main>
        {/* Header Section */}
        <section className="relative pt-40 pb-20 bg-green-950 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-900/30 skew-x-12 translate-x-20"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-md rounded-full text-green-400 font-bold text-xs uppercase tracking-widest mb-6 border border-green-500/30">
                <Fingerprint size={14} /> Our DNA
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
                The Principles that <br />
                <span className="text-green-500 underline decoration-green-500/30">
                  Anchor Us.
                </span>
              </h1>
              <p className="text-xl text-green-100/70 leading-relaxed font-light">
                Values are not just words on a wall; they are the compass by
                which we navigate the complexities of nation-building. At
                Chitepo, these six pillars define our character.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-24 -mt-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <ValueTile key={i} {...v} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Philosophy Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-900 rounded-[4rem] overflow-hidden relative">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 md:p-20 flex flex-col justify-center">
                  <HeartHandshake className="text-green-500 mb-8" size={64} />
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    The Spirit of <br />{" "}
                    <span className="text-green-500">Hunhu / Ubuntu</span>
                  </h2>
                  <p className="text-xl text-slate-400 leading-relaxed mb-8">
                    "I am because we are." This foundational African value sits
                    at the heart of our ideology. It reminds every student that
                    individual success is hollow unless it contributes to the
                    collective well-being of the Zimbabwean family.
                  </p>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-full border border-green-500 flex items-center justify-center">
                      <Anchor size={20} className="text-green-500" />
                    </div>
                    <span className="font-bold text-lg">
                      Anchor of our Social Justice
                    </span>
                  </div>
                </div>
                <div className="relative min-h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="Community"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Statement */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Award className="text-green-600 mx-auto mb-8" size={64} />
            <h2 className="text-4xl font-black text-slate-900 mb-8">
              A Pledge of Excellence
            </h2>
            <div className="relative p-12 bg-white rounded-[3rem] shadow-xl border border-slate-100">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">
                The Chitepo Oath
              </div>
              <p className="text-2xl text-slate-600 leading-relaxed italic">
                "We commit to live these values daily, ensuring that our conduct
                reflects the honor of those who fought for our liberation and
                the hopes of those who will inherit our future."
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto bg-green-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">
              Live the Values.
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
              Ideology is not just studied; it is lived. Start your
              transformation today and become a value-driven leader in the new
              Zimbabwe.
            </p>
            <a href="https://studentcsi.comradeconnect.co.zw/welcome" className="bg-white text-green-700 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform relative z-10 shadow-xl inline-block">
              Apply for Enrollment
            </a>
            <div
              className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
