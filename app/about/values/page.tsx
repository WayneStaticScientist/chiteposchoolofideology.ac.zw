"use client";

import {
  Anchor,
  Award,
  Fingerprint,
  Handshake,
  HeartHandshake,
  Scale,
  ShieldAlert,
  Users2,
} from "lucide-react";
import Link from "next/link";

import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/navbar";
import { ValueTile } from "@/components/layouts/value-tile";
import { enrollUrl, schoolIdentity } from "@/config/identity";

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
              <h1 className="mb-8 text-5xl font-black leading-[1.1] text-white md:text-7xl">
                The Principles that{" "}
                <span className="text-green-500 underline decoration-green-500/30">
                  Anchor Us.
                </span>
              </h1>
              <p className="mb-4 font-serif text-2xl italic text-green-200/90">
                {schoolIdentity.tagline}
              </p>
              <p className="text-xl font-light leading-relaxed text-green-100/70">
                Values are the compass by which we navigate nation-building. These
                five pillars define our character at {schoolIdentity.name}.
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

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-[4rem] bg-slate-900">
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center p-12 md:p-20">
                  <HeartHandshake className="mb-8 text-green-500" size={64} />
                  <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl">
                    Living our <br />
                    <span className="text-green-500">mission</span>
                  </h2>
                  <p className="mb-8 text-xl leading-relaxed text-slate-400">
                    {schoolIdentity.mission}
                  </p>
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-green-500">
                      <Anchor size={20} className="text-green-500" />
                    </div>
                    <span className="text-lg font-bold">
                      Guided by team work & integrity
                    </span>
                  </div>
                </div>
                <div className="relative min-h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition-all duration-1000 hover:grayscale-0"
                    alt="Community"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-8 text-4xl font-black text-slate-900">
              A Pledge of Excellence
            </h2>
            <div className="relative rounded-[3rem] border border-slate-100 bg-white p-12 shadow-xl">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-6 py-2 text-sm font-black uppercase tracking-widest text-white">
                Our Commitment
              </div>
              <p className="text-2xl italic leading-relaxed text-slate-600">
                &ldquo;We commit to live these values daily — patriotism,
                professionalism, gender sensitivity, integrity, and team work —
                in service of the Zimbabwean nation.&rdquo;
              </p>
            </div>
            <p className="mt-8 text-slate-500">
              <Link href="/about/vision" className="font-bold text-green-700 hover:underline">
                Vision
              </Link>
              {" · "}
              <Link href="/about/mission" className="font-bold text-green-700 hover:underline">
                Mission
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-green-600 p-12 text-center text-white shadow-2xl md:p-24">
            <h2 className="relative z-10 mb-8 text-4xl font-black md:text-6xl">
              Live the Values.
            </h2>
            <p className="relative z-10 mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-green-100">
              Ideology is not just studied; it is lived. Start your transformation
              today and become a value-driven cadre.
            </p>
            <a
              href={enrollUrl}
              className="relative z-10 inline-block rounded-2xl bg-white px-12 py-5 text-xl font-black text-green-700 shadow-xl transition-transform hover:scale-105"
            >
              Apply for Enrollment
            </a>
            <div
              className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
