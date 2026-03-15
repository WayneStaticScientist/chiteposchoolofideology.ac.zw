"use client";
import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Eye,
  Sun,
  Milestone,
  Compass,
  Layers,
  ShieldCheck,
  ArrowUpRight,
  Zap,
  Star,
  TrendingUp,
  Globe,
} from "lucide-react";
import NavBar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { VisionCard } from "@/components/layouts/version-card";

/**
 * VISIONARY CARD COMPONENT
 * Featuring a modern "Glass-morphic" look with hover animations
 */

/**
 * MAIN VISION PAGE COMPONENT
 */
export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-green-600 selection:text-white font-sans overflow-x-hidden">
      <NavBar activeTab="about" />

      <main>
        {/* Cinematic Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden">
          {/* Animated Glow Elements */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-green-600/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse delay-1000"></div>

          <div
            className={`max-w-7xl mx-auto px-6 relative z-10 text-center transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-2xl rounded-full text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-8 border border-white/10 shadow-2xl"></div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              A Future <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-green-600">
                Defined by Us.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              We envision an enlightened Zimbabwean society, where every citizen
              is a guardian of national sovereignty and a pioneer of economic
              prosperity.
            </p>

            {/* Decorative Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <div className="w-1 h-16 bg-gradient-to-b from-green-500 to-transparent mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Abstract Grid Background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </section>

        {/* The Vision Statement Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2 relative group">
                {/* Modern Image Card with Multi-layered shadows */}
                <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] transform transition-transform group-hover:scale-[0.98] duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                    className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    alt="Future Vision"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-950/80 via-transparent to-white/10 group-hover:opacity-0 transition-opacity duration-1000"></div>
                </div>
                {/* Floating Stat Card */}
                <div className="absolute -bottom-10 -right-10 z-20 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-50 animate-float">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-green-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-green-600/30">
                      <Zap size={32} />
                    </div>
                    <div>
                      <div className="text-4xl font-black text-slate-900">
                        100%
                      </div>
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                        Self Reliance
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-10">
                <div className="w-20 h-2 bg-green-600 rounded-full"></div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                  To be the leading <br />
                  <span className="text-green-600 italic">
                    Ideological Forge
                  </span>{" "}
                  <br />
                  in the Continent.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Our vision goes beyond the borders of Zimbabwe. We strive to
                  become the premier Pan-African center of excellence for
                  ideological training, shaping the minds of future African
                  leaders through home-grown philosophy and strategic
                  innovation.
                </p>
                <div className="space-y-6 pt-4">
                  {[
                    { label: "Total Mind Decolonisation", icon: Compass },
                    { label: "Pan-African Solidarity", icon: Globe },
                    {
                      label: "Sustained National Prosperity",
                      icon: TrendingUp,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                        <item.icon size={20} />
                      </div>
                      <span className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Pillars */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Pillars of Our Future
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                The four strategic directions that define how we build the
                Zimbabwe of tomorrow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <VisionCard
                icon={Sun}
                title="Enlightenment"
                desc="A society where every citizen understands their role in national development and rejects foreign-imposed narratives."
                delay={0}
              />
              <VisionCard
                icon={Milestone}
                title="Resilience"
                desc="Building a robust ideological foundation that remains unshaken by external economic and political pressures."
                delay={200}
              />
              <VisionCard
                icon={Layers}
                title="Inclusivity"
                desc="Ensuring that our ideological training reaches every corner of Zimbabwe, leaving no one and no place behind."
                delay={400}
              />
              <VisionCard
                icon={Star}
                title="Excellence"
                desc="Setting the gold standard for public service, leadership ethics, and patriotic governance in Africa."
                delay={600}
              />
            </div>
          </div>
        </section>

        {/* Futuristic CTA */}
        <section className="py-32 bg-white px-6">
          <div className="max-w-7xl mx-auto relative group">
            <div className="absolute inset-0 bg-green-600 rounded-[5rem] rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="relative z-10 bg-slate-900 rounded-[5rem] p-16 md:p-28 text-center text-white overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 blur-[120px] rounded-full"></div>

              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Ready to Shape <br /> the{" "}
                <span className="text-green-500 italic">Future?</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
                The journey to 2030 begins with a single step towards
                enlightenment. Apply today and become a pioneer of the new
                Zimbabwean narrative.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-12 py-5 bg-green-600 text-white rounded-3xl font-black text-xl hover:bg-green-500 hover:scale-105 transition-all shadow-xl shadow-green-600/20 active:scale-95">
                  Begin Your Journey
                </button>
                <button className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-3xl font-black text-xl hover:bg-white/10 transition-all active:scale-95">
                  Explore Projects
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Minimal Footer */}
      <Footer />

      {/* CSS for animations not easily done with Tailwind classes alone */}
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
