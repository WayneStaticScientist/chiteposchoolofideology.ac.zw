"use client";

import {
  ArrowRight,
  Flag,
  Globe,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/navbar";
import { ObjectiveCard } from "@/components/layouts/objective-card";
import { enrollUrl, schoolContact, schoolIdentity } from "@/config/identity";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-600 selection:text-white">
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
            <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
              Driving <span className="text-green-500">Ideological</span>{" "}
              Excellence
            </h1>
            <p className="mx-auto mb-2 max-w-3xl font-serif text-2xl italic text-green-200/90">
              {schoolIdentity.tagline}
            </p>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-green-100/80">
              {schoolIdentity.mission}
            </p>
          </div>
        </section>

        <section className="relative bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              <div>
                <div className="relative overflow-hidden rounded-[3.5rem] bg-green-700 p-12 text-white shadow-2xl">
                  <div className="absolute -right-10 -top-10 opacity-10">
                    <Target size={300} />
                  </div>
                  <div className="relative z-10">
                    <Sparkles className="mb-6 text-green-400" size={40} />
                    <h2 className="mb-6 text-4xl font-black">Mission</h2>
                    <p className="text-xl font-light italic leading-relaxed text-green-50 md:text-2xl">
                      &ldquo;{schoolIdentity.mission}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl font-black leading-tight text-slate-900">
                  Built on our{" "}
                  <span className="text-green-600 underline decoration-4 underline-offset-8">
                    core values
                  </span>
                </h3>
                <p className="text-lg leading-relaxed text-slate-600">
                  Every programme at {schoolIdentity.name} serves this mission —
                  from orientation and training to leadership development for
                  the Party and Government.
                </p>
                <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  {schoolIdentity.coreValues.map((item) => (
                    <div key={item.key} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                        <ArrowRight size={14} className="text-green-700" />
                      </div>
                      <span className="font-bold text-slate-800">{item.title}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/about/vision"
                    className="text-sm font-bold text-green-700 hover:underline"
                  >
                    Read our vision →
                  </Link>
                  <Link
                    href="/about/values"
                    className="text-sm font-bold text-green-700 hover:underline"
                  >
                    Explore core values →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-4 text-sm font-black uppercase tracking-widest text-green-600">
                Strategic Objectives
              </p>
              <h2 className="text-4xl font-black text-slate-900">
                How We Achieve Our Mission
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ObjectiveCard
                icon={Flag}
                title="Ideological Orientation"
                desc="Training cadres with the correct Party Ideological orientation for national development."
              />
              <ObjectiveCard
                icon={Lightbulb}
                title="Skills for the Nation"
                desc="Equipping participants with practical skills to meet the dynamic needs of Zimbabwe."
              />
              <ObjectiveCard
                icon={ShieldCheck}
                title="Patriotic Leadership"
                desc="Developing competent, patriotic leaders for the Party, Government, and society."
              />
              <ObjectiveCard
                icon={Globe}
                title="Economic Sovereignty"
                desc="Supporting intellectual excellence in Zimbabwe’s economic development as a sovereign state."
              />
              <ObjectiveCard
                icon={TrendingUp}
                title="Future Development"
                desc="Preparing participants to lead social and economic development efforts."
              />
              <ObjectiveCard
                icon={Heart}
                title="Values in Practice"
                desc="Living professionalism, integrity, gender sensitivity, and team work every day."
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[4rem] bg-green-950 p-12 text-center text-white shadow-2xl md:p-24">
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-green-600/20 blur-[100px]" />
            <h2 className="relative z-10 mb-8 text-4xl font-black md:text-5xl">
              Shape the Narrative. <br />
              Join the Mission.
            </h2>
            <p className="relative z-10 mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-slate-300">
              {schoolIdentity.mission}
            </p>
            <div className="relative z-10 flex flex-wrap justify-center gap-6">
              <a
                href={enrollUrl}
                className="rounded-2xl bg-green-600 px-10 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
              >
                Apply for Admission
              </a>
              <a
                href={`tel:${schoolContact.phoneTel}`}
                className="rounded-2xl border border-white/20 bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Contact Admissions
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
