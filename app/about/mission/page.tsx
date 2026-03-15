"use client";
import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Target,
  Flag,
  Lightbulb,
  ShieldCheck,
  Globe,
  TrendingUp,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import NavBar from "@/components/layouts/navbar";
import { ObjectiveCard } from "@/components/layouts/objective-card";
import Footer from "@/components/layouts/footer";

/**
 * MISSION CARD COMPONENT
 */

/**
 * MAIN MISSION PAGE COMPONENT
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-green-600 selection:text-white font-sans">
      <NavBar activeTab="about" />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-green-950">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover opacity-30"
              alt="Mission Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-transparent to-green-950"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-md rounded-full text-green-400 font-bold text-xs uppercase tracking-widest mb-8 border border-green-500/30">
              <Target size={14} /> Our Mission
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Driving the <span className="text-green-500">Ideological</span>{" "}
              <br />
              Transformation
            </h1>
            <p className="text-xl text-green-100/80 max-w-3xl mx-auto leading-relaxed">
              We exist to cultivate a patriotic mindset, define our national
              interest, and equip Zimbabweans with the ideological tools for
              total economic sovereignty.
            </p>
          </div>
        </section>

        {/* The Core Mission Statement */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="bg-green-700 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 opacity-10">
                    <Target size={300} />
                  </div>
                  <div className="relative z-10">
                    <Sparkles className="text-green-400 mb-6" size={40} />
                    <h2 className="text-4xl font-black mb-6">
                      Our Core Purpose
                    </h2>
                    <p className="text-2xl font-light text-green-50 leading-relaxed italic">
                      "To decolonise the African mind and nurture a generation
                      of leaders grounded in patriotism, social justice, and the
                      unwavering pursuit of Zimbabwe's national interests."
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl font-black text-slate-900 leading-tight">
                  Defining Our Path to{" "}
                  <span className="text-green-600 underline decoration-4 underline-offset-8">
                    Sovereignty
                  </span>
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The mission of the Herbert Chitepo School of Ideology is
                  anchored in the belief that true independence starts in the
                  mind. We are dedicated to providing educational frameworks
                  that celebrate our heritage while looking forward to a
                  self-sufficient future.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {[
                    "National Consciousness",
                    "Economic Independence",
                    "Cultural Reclamation",
                    "Leadership Ethics",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <ArrowRight size={14} className="text-green-700" />
                      </div>
                      <span className="font-bold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Objectives */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-green-600 font-black tracking-widest text-sm uppercase mb-4">
                Strategic Objectives
              </p>
              <h2 className="text-4xl font-black text-slate-900">
                How We Achieve Our Mission
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ObjectiveCard
                icon={Flag}
                title="Ideological Orientation"
                desc="Providing intensive training programs designed to align every cadre with the national vision of a middle-income economy by 2030."
              />
              <ObjectiveCard
                icon={Lightbulb}
                title="Policy Research"
                desc="Engaging in deep analytical research to provide home-grown solutions for Zimbabwe's socio-economic challenges."
              />
              <ObjectiveCard
                icon={ShieldCheck}
                title="National Heritage"
                desc="Preserving and documenting the history of the liberation struggle to inspire current and future generations."
              />
              <ObjectiveCard
                icon={Globe}
                title="Continental Outreach"
                desc="Sharing our ideological framework with fellow African nations to foster continental solidarity and Pan-Africanism."
              />
              <ObjectiveCard
                icon={TrendingUp}
                title="Leadership Development"
                desc="Molding disciplined, ethical leaders who prioritize national progress over individual gain."
              />
              <ObjectiveCard
                icon={Heart}
                title="Civic Responsibility"
                desc="Encouraging active citizenship and volunteerism rooted in the love for our motherland."
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-5xl mx-auto bg-green-950 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-green-600/20 blur-[100px] rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">
              Shape the Narrative. <br />
              Join the Mission.
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
              Our mission is a collective effort. Whether you are a student,
              professional, or civil servant, there is a place for you in our
              orientation programs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button className="bg-green-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                Apply for Admission
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors">
                Contact Admissions
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
