"use client";

import { ArrowRight, Target } from "lucide-react";
import Link from "next/link";

import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/navbar";
import { schoolIdentity } from "@/config/identity";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-green-600 selection:text-white font-sans">
      <NavBar activeTab="about" />
      <main>
        <section className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-green-950">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
              className="h-full w-full object-cover opacity-30"
              alt="Mission Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-transparent to-green-950" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-green-400 backdrop-blur-md">
              <Target size={14} /> Our Mission
            </div>
            <p className="mb-4 font-serif text-2xl italic text-green-200/90 md:text-3xl">
              {schoolIdentity.tagline}
            </p>
            <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
              Chitepo School of Ideology
            </h1>
          </div>
        </section>

        <section className="relative bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-[3.5rem] bg-green-700 p-12 text-white shadow-2xl md:p-16">
                <div className="absolute -right-10 -top-10 opacity-10">
                  <Target size={300} />
                </div>
                <div className="relative z-10">
                  <h2 className="mb-6 text-3xl font-black md:text-4xl">Mission</h2>
                  <p className="text-xl font-light leading-relaxed text-green-50 md:text-2xl">
                    {schoolIdentity.mission}
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <Link
                  href="/about/vision"
                  className="group rounded-3xl border border-slate-200 p-8 transition-colors hover:border-green-200 hover:bg-green-50/50"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-green-600">
                    Vision
                  </p>
                  <p className="mt-3 text-slate-600 leading-relaxed line-clamp-4">
                    {schoolIdentity.vision}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-700">
                    Read vision <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/about/values"
                  className="group rounded-3xl border border-slate-200 p-8 transition-colors hover:border-green-200 hover:bg-green-50/50"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-green-600">
                    Core Values
                  </p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {schoolIdentity.coreValues.map((v) => v.title).join(" · ")}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-700">
                    View values <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
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
