"use client";
import React, { useState, useEffect } from "react";
import {
  MapPin,
  ShieldCheck,
  Globe,
  Award,
  Quote,
  ArrowRight,
} from "lucide-react";
import NavBar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import MainCarousel from "@/components/layouts/main-carousel";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  // SEO Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Herbert Chitepo School of Ideology",
    alternateName: "Chitepo School of Ideology",
    address: {
      "@type": "PostalAddress",
      streetAddress: "53F3+QH7, Simon Muzenda St",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
    telephone: "+27618046523",
    description:
      "Nurturing a new generation of patriots and leaders, committed to upholding the values of Zimbabwe's Constitution.",
    url: "https://chiteposchool.ac.zw",
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-950 z-[200] flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 animate-pulse"></div>
          <ShieldCheck className="w-20 h-20 text-green-500 relative z-10 animate-bounce" />
        </div>
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 animate-progress origin-left"></div>
        </div>
        <p className="mt-6 text-green-500 font-bold tracking-[0.3em] text-xs uppercase animate-pulse">
          Decolonising the Mind
        </p>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes progress {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
          .animate-progress { animation: progress 2s ease-in-out infinite; }
        `,
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-slate-50 font-sans text-slate-900 selection:bg-green-600 selection:text-white">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <NavBar activeTab={"/"} />
      <main>
        <HomeView />
      </main>
      <Footer />
    </div>
  );
};

// --- Sub-Views ---

const HomeView = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Refined Hero with Carousel */}
      <MainCarousel />
      {/* Message from the Principal Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-green-100 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative h-[600px] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="/assets/chitepo.jpg"
                  alt="Principal"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent">
                  <p className="text-white font-black text-3xl">
                    Herbert Chitepo
                  </p>
                  <p className="text-green-400 font-bold tracking-widest text-xs uppercase">
                    Foundational Visionary
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Quote size={80} className="text-green-100 mb-6" />
              <h2 className="text-5xl font-black text-green-950 mb-8 leading-tight">
                Shaping the Minds of Tomorrow.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a beacon of hope for the nation’s future, the school will
                continue to thrive, shaping the minds of tomorrow’s leaders and
                driving progress in Zimbabwe. No amount of slander will derail
                our mission.
              </p>
              <div className="space-y-6">
                {[
                  {
                    label: "Patriotism",
                    desc: "Nurturing a deep-rooted love for our heritage.",
                  },
                  {
                    label: "Ideological Clarity",
                    desc: "Interpreting our history to drive prosperity.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:border-green-200 transition-colors"
                  >
                    <div className="bg-green-100 p-3 rounded-xl text-green-700 h-fit">
                      <ShieldCheck />
                    </div>
                    <div>
                      <h4 className="font-black text-green-950">
                        {item.label}
                      </h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Curriculum Highlight Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-900 -skew-x-12 translate-x-1/2 opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-green-600 font-black tracking-widest text-sm uppercase mb-4">
              Educational Pillars
            </p>
            <h2 className="text-5xl font-black text-slate-950 mb-6">
              Home-grown Solutions for Global Excellence.
            </h2>
            <p className="text-slate-500 text-lg">
              Our curriculum interprets the nation's past, present, and future
              to drive economic prosperity through sovereign knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "National Heritage",
                icon: <Award />,
                color: "bg-blue-50 text-blue-600",
              },
              {
                title: "Economic Governance",
                icon: <Globe />,
                color: "bg-green-50 text-green-600",
              },
              {
                title: "Social Justice",
                icon: <ShieldCheck />,
                color: "bg-orange-50 text-orange-600",
              },
            ].map((course, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div
                  className={`${course.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                >
                  {course.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-4">
                  {course.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Comprehensive modules designed to empower citizens with
                  critical ideological tools for nation building.
                </p>
                <button className="flex items-center gap-2 font-bold text-green-700 hover:gap-4 transition-all">
                  Course Details <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* News & Events Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black text-slate-950">
                Campus Buzz
              </h2>
              <p className="text-slate-500 mt-2">
                Latest updates from the frontlines of ideological excellence.
              </p>
            </div>
            <button className="bg-slate-100 hover:bg-slate-200 px-6 py-3 rounded-xl font-bold transition-colors">
              View All Events
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                date: "Oct 15",
                title: "Decolonising the Mind Symposium 2024",
                type: "Symposium",
              },
              {
                date: "Nov 02",
                title: "New Cadre Graduation Ceremony",
                type: "Ceremony",
              },
              {
                date: "Dec 12",
                title: "National Development Strategy Workshop",
                type: "Workshop",
              },
            ].map((event, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-64 bg-slate-100 rounded-3xl mb-6 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg text-xs font-black shadow-sm">
                    {event.type}
                  </div>
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-green-900/0 transition-colors"></div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-center">
                    <p className="text-green-600 font-black text-xl leading-none">
                      {event.date.split(" ")[1]}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {event.date.split(" ")[0]}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-slate-950 leading-tight group-hover:text-green-700 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-slate-500 text-sm mt-2 flex items-center gap-2">
                      <MapPin size={12} /> Harare Main Campus
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action Wrapper */}
      <section className="mx-6 mb-12">
        <div className="max-w-7xl mx-auto bg-green-700 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center text-white shadow-3xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Ready to serve your nation?
            </h2>
            <p className="text-xl text-green-100/80 mb-12 max-w-2xl mx-auto font-light">
              Join the ranks of Zimbabwe's most dedicated future leaders.
              Enrollment for the Summer cohort is now open.
            </p>
            <button className="bg-white text-green-900 px-12 py-6 rounded-2xl font-black text-xl hover:bg-green-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
              Enroll Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
