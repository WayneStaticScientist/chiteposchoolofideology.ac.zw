"use client";

import { Eye } from "lucide-react";
import Link from "next/link";

import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/navbar";
import { schoolIdentity } from "@/config/identity";

export default function VisionPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans selection:bg-green-600 selection:text-white">
      <NavBar activeTab="about" />

      <main>
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-slate-950">
          <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] animate-pulse rounded-full bg-green-600/20 blur-[150px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.3em] text-green-400 backdrop-blur-2xl">
              <Eye size={14} /> Our Vision
            </div>
            <p className="mb-4 font-serif text-2xl italic text-green-200/90 md:text-3xl">
              {schoolIdentity.tagline}
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tighter text-white md:text-7xl">
              Chitepo School of Ideology
            </h1>
          </div>
        </section>

        <section className="bg-white py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 h-2 w-20 rounded-full bg-green-600" />
              <h2 className="mb-8 text-4xl font-black text-slate-900 md:text-5xl">
                Vision
              </h2>
              <p className="text-xl leading-relaxed text-slate-600 md:text-2xl">
                {schoolIdentity.vision}
              </p>
              <div className="mt-12 flex flex-wrap gap-4 text-sm font-bold">
                <Link href="/about/mission" className="text-green-700 hover:underline">
                  Mission
                </Link>
                <span className="text-slate-300">|</span>
                <Link href="/about/values" className="text-green-700 hover:underline">
                  Core Values
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
