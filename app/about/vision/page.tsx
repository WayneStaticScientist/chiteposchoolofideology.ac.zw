"use client";

import { useEffect, useState } from "react";
import {
  Compass,
  Eye,
  Globe,
  Layers,
  Milestone,
  Star,
  Sun,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";

import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/navbar";
import { VisionCard } from "@/components/layouts/version-card";
import { enrollUrl, schoolIdentity } from "@/config/identity";

export default function VisionPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans selection:bg-green-600 selection:text-white">
      <NavBar activeTab="about" />

      <main>
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-950">
          <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] animate-pulse rounded-full bg-green-600/20 blur-[150px]" />
          <div className="absolute bottom-1/4 -right-20 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-600/10 blur-[150px] delay-1000" />

          <div
            className={`relative z-10 mx-auto max-w-7xl px-6 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.3em] text-green-400 backdrop-blur-2xl">
              <Eye size={14} /> Our Vision
            </div>
            <h1 className="mb-8 text-6xl font-black leading-[0.9] tracking-tighter text-white md:text-8xl">
              A Future <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-600 bg-clip-text text-transparent">
                Defined by Us.
              </span>
            </h1>
            <p className="mx-auto mb-4 max-w-3xl font-serif text-2xl italic text-green-200/90">
              {schoolIdentity.tagline}
            </p>
            <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-slate-400 md:text-2xl">
              {schoolIdentity.vision}
            </p>
            <div className="mt-16 animate-bounce">
              <div className="mx-auto h-16 w-1 rounded-full bg-gradient-to-b from-green-500 to-transparent" />
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </section>

        <section className="bg-white py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center gap-24 lg:flex-row">
              <div className="group relative lg:w-1/2">
                <div className="relative z-10 overflow-hidden rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] transition-transform duration-700 group-hover:scale-[0.98]">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                    className="h-[600px] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                    alt="Future Vision"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-950/80 via-transparent to-white/10 transition-opacity duration-1000 group-hover:opacity-0" />
                </div>
                <div className="animate-float absolute -bottom-10 -right-10 z-20 rounded-[3rem] border border-slate-50 bg-white p-10 shadow-2xl">
                  <div className="flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-green-600 text-white shadow-lg shadow-green-600/30">
                      <Zap size={32} />
                    </div>
                    <div>
                      <div className="text-4xl font-black text-slate-900">2030</div>
                      <div className="text-sm font-bold uppercase tracking-widest text-slate-500">
                        National Vision
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-10 lg:w-1/2">
                <div className="h-2 w-20 rounded-full bg-green-600" />
                <h2 className="text-5xl font-black leading-tight text-slate-900 md:text-6xl">
                  Our <span className="italic text-green-600">Vision</span>
                </h2>
                <p className="text-xl leading-relaxed text-slate-600">
                  {schoolIdentity.vision}
                </p>
                <div className="space-y-6 pt-4">
                  {[
                    { label: schoolIdentity.tagline, icon: Compass },
                    { label: "Party & Government leadership", icon: Globe },
                    { label: "Economic development excellence", icon: TrendingUp },
                  ].map((item, idx) => (
                    <div key={idx} className="group flex cursor-pointer items-center gap-4">
                      <div className="rounded-xl bg-green-50 p-3 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                        <item.icon size={20} />
                      </div>
                      <span className="text-xl font-bold text-slate-800 transition-colors group-hover:text-green-600">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 text-sm font-bold">
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
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-50 py-32">
          <div className="absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-white to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-24 max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-black text-slate-900 md:text-5xl">
                Pillars of Our Future
              </h2>
              <p className="text-lg font-medium text-slate-500">
                Strategic directions that support our vision for Zimbabwe.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <VisionCard
                icon={Sun}
                title="Ideological Excellence"
                desc="Being the hub of intellectual Party Ideological Excellence in national economic development."
                delay={0}
              />
              <VisionCard
                icon={Milestone}
                title="Sovereign Development"
                desc="Advancing Zimbabwe as a sovereign state through trained, patriotic cadres."
                delay={200}
              />
              <VisionCard
                icon={Layers}
                title="Inclusive Participation"
                desc="Gender sensitivity, integrity, and team work across Party and Government."
                delay={400}
              />
              <VisionCard
                icon={Star}
                title="Leadership Pipeline"
                desc="Preparing participants to lead future social and economic development efforts."
                delay={600}
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-32">
          <div className="group relative mx-auto max-w-7xl">
            <div className="absolute inset-0 rotate-1 rounded-[5rem] bg-green-600 transition-transform duration-700 group-hover:rotate-0" />
            <div className="relative z-10 overflow-hidden rounded-[5rem] bg-slate-900 p-16 text-center text-white shadow-2xl md:p-28">
              <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-green-500/20 blur-[120px]" />
              <h2 className="relative z-10 mb-8 text-5xl font-black leading-tight md:text-7xl">
                Ready to Shape <br /> the{" "}
                <span className="italic text-green-500">Future?</span>
              </h2>
              <p className="relative z-10 mx-auto mb-12 max-w-2xl text-xl font-light text-slate-400">
                Begin your journey with {schoolIdentity.name}. Enrollment is open
                for cadres committed to our mission and vision.
              </p>
              <div className="relative z-10 flex flex-col justify-center gap-6 sm:flex-row">
                <a
                  href={enrollUrl}
                  className="rounded-3xl bg-green-600 px-12 py-5 text-xl font-black text-white shadow-xl shadow-green-600/20 transition-all hover:scale-105 hover:bg-green-500 active:scale-95"
                >
                  Begin Your Journey
                </a>
                <Link
                  href="/about/mission"
                  className="rounded-3xl border border-white/10 bg-white/5 px-12 py-5 text-xl font-black text-white transition-all hover:bg-white/10 active:scale-95"
                >
                  Read Our Mission
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
