"use client";

import {
  Award,
  Fingerprint,
  Handshake,
  Scale,
  ShieldAlert,
  Users2,
} from "lucide-react";

import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/navbar";
import { ValueTile } from "@/components/layouts/value-tile";
import { schoolIdentity } from "@/config/identity";

const valueIcons: Record<string, typeof ShieldAlert> = {
  patriotism: ShieldAlert,
  professionalism: Award,
  "gender-sensitivity": Users2,
  integrity: Scale,
  "team-work": Handshake,
};

const valueColors: Record<string, string> = {
  patriotism: "bg-green-600",
  professionalism: "bg-emerald-600",
  "gender-sensitivity": "bg-red-600",
  integrity: "bg-amber-500",
  "team-work": "bg-blue-600",
};

export default function ValuesPage() {
  const values = schoolIdentity.coreValues.map((v) => ({
    icon: valueIcons[v.key] ?? ShieldAlert,
    title: v.title,
    desc: v.description,
    colorClass: valueColors[v.key] ?? "bg-green-600",
  }));

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 font-sans selection:bg-green-600 selection:text-white">
      <NavBar activeTab="values" />

      <main>
        <section className="relative overflow-hidden bg-green-950 pt-40 pb-20">
          <div className="absolute top-0 right-0 h-full w-1/2 translate-x-20 skew-x-12 bg-green-900/30" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-green-400 backdrop-blur-md">
                <Fingerprint size={14} /> Core Values
              </div>
              <p className="mb-4 font-serif text-2xl italic text-green-200/90">
                {schoolIdentity.tagline}
              </p>
              <h1 className="mb-8 text-5xl font-black leading-[1.1] text-white md:text-7xl">
                The principles that guide us
              </h1>
              <p className="text-xl font-light leading-relaxed text-green-100/70">
                Our work is anchored in patriotism, professionalism, gender
                sensitivity, integrity, and team work — the standards we expect
                of every participant and cadre.
              </p>
            </div>
          </div>
        </section>

        <section className="-mt-12 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((v, i) => (
                <ValueTile key={i} {...v} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 px-6">
          <div className="mx-auto max-w-4xl rounded-[3rem] border border-slate-100 bg-slate-50 p-12 text-center">
            <h2 className="mb-4 text-2xl font-black text-slate-900">Our Mission</h2>
            <p className="text-lg leading-relaxed text-slate-600">{schoolIdentity.mission}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
