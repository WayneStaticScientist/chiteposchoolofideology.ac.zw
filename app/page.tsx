"use client";
import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Globe,
  ExternalLink,
  Award,
  Quote,
  ArrowRight,
  Target,
  ChevronLeft,
} from "lucide-react";
import { Typewriter } from "@/components/views/type-writter";
import NavBar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    setLoading(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-green-600 selection:text-white">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <NavBar activeTab={"/"} />
      <main>
        <HomeView setActiveTab={undefined} />
      </main>
      <Footer />
    </div>
  );
};

// --- Sub-Views ---

const HomeView = ({ setActiveTab }: { setActiveTab: any }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
      tag: "Academic Excellence",
      title: "Building the Leaders of Tomorrow",
      desc: "Nurturing a new generation of patriots committed to Zimbabwe's progress.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000",
      tag: "Cultural Integrity",
      title: "Rooted in National Heritage",
      desc: "Interpreting our history to drive future economic sovereignty.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523050335102-c3250908b30f?auto=format&fit=crop&q=80&w=2000",
      tag: "Social Justice",
      title: "Championing National Values",
      desc: "Committed to the constitutional values of unity, freedom, and equality.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Refined Hero with Carousel */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
        {/* Background Images Layer */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${index === currentSlide ? "scale-110" : "scale-100"}`}
            />
          </div>
        ))}

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-md border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
              <Award size={16} /> {slides[currentSlide].tag}
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              DECOLONISING <br /> THE <Typewriter />
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-10 max-w-2xl font-light">
              "{slides[currentSlide].desc}"
            </p>

            <div className="flex flex-wrap gap-5">
              <button
                onClick={() => setActiveTab("apply")}
                className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-green-500 hover:scale-105 transition-all shadow-2xl shadow-green-900/50 group"
              >
                Enroll for 2024{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all"
              >
                Our Legacy
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-12 left-6 right-6 z-30 flex justify-between items-end max-w-7xl mx-auto px-6">
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? "w-12 bg-green-500" : "w-4 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + slides.length) % slides.length,
                )
              }
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % slides.length)
              }
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Floating Metrics */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block animate-in slide-in-from-right-20 duration-1000">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 text-white text-center w-32">
              <p className="text-3xl font-black text-green-500">98%</p>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">
                Success
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 text-white text-center w-32">
              <p className="text-3xl font-black text-green-500">50+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">
                Faculty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from the Principal Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-green-100 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative h-[600px] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
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
            <button
              onClick={() => setActiveTab("apply")}
              className="bg-white text-green-900 px-12 py-6 rounded-2xl font-black text-xl hover:bg-green-50 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              Enroll Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Simplified views for the other tabs
const AboutView = () => (
  <div className="pt-32 pb-24 bg-white animate-in slide-in-from-bottom-10 duration-700">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-6xl font-black text-green-950 mb-12 tracking-tighter">
        Our Resolute Purpose
      </h2>
      <div className="prose prose-xl prose-slate">
        <p className="text-2xl text-slate-600 leading-relaxed mb-10">
          The Herbert Chitepo School of Ideology is not just an institution; it
          is a{" "}
          <span className="text-green-700 font-bold underline">
            home-grown solution
          </span>
          . We believe in interpreting the nation’s history, present, and future
          to drive economic prosperity.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <Target className="text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-slate-500">
              Shaping the minds of tomorrow’s leaders and driving progress
              through ideological clarity.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <Award className="text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <p className="text-slate-500">
              Unity, Freedom, Equality, Peace, and Justice as enshrined in the
              Constitution.
            </p>
          </div>
        </div>
        <p className="text-lg text-slate-500 italic border-l-4 border-green-600 pl-8 py-4 bg-green-50/50 rounded-r-2xl">
          "No amount of slander will derail the programmes of the school of
          ideology, which is steadfastly committed to upholding the values and
          principles of Zimbabwe."
        </p>
      </div>
    </div>
  </div>
);

const CurriculumView = () => (
  <div className="pt-32 pb-24 bg-slate-50 animate-in fade-in duration-500">
    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
      <h2 className="text-5xl font-black text-slate-900 mb-6">
        Course Offerings
      </h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-lg">
        Our academic framework is built upon four primary streams of study
        designed to provide comprehensive ideological orientation.
      </p>
    </div>
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
      {[
        {
          code: "IDE101",
          title: "Nationalism & History",
          desc: "Understanding the liberation struggle and the path to sovereignty.",
        },
        {
          code: "IDE204",
          title: "Constitutionalism",
          desc: "A deep dive into the preamble and legal frameworks of Zimbabwe.",
        },
        {
          code: "IDE302",
          title: "Macro-Economic Sovereignty",
          desc: "Strategies for home-grown economic prosperity and industrialization.",
        },
        {
          code: "IDE405",
          title: "Leadership & Patriotism",
          desc: "Practical ethics for public servants and community leaders.",
        },
      ].map((course) => (
        <div
          key={course.code}
          className="bg-white p-8 rounded-[2rem] flex gap-8 items-center border border-slate-200 hover:border-green-300 transition-colors group"
        >
          <div className="text-6xl font-black text-slate-100 group-hover:text-green-50 transition-colors uppercase">
            {course.code}
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900">
              {course.title}
            </h3>
            <p className="text-slate-500">{course.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ApplyView = () => (
  <div className="pt-32 pb-24 bg-white animate-in slide-in-from-right-10 duration-500">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-black text-green-950 mb-8">
            Apply for Admission
          </h2>
          <p className="text-slate-500 mb-8 text-lg">
            Join the school that remains a beacon of hope for the nation's
            future. Our application process is rigorous but rewarding.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">
                1
              </div>
              <p className="font-bold text-slate-700 pt-1">
                Submit Application Form
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">
                2
              </div>
              <p className="font-bold text-slate-700 pt-1">
                Initial Ideological Interview
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">
                3
              </div>
              <p className="font-bold text-slate-700 pt-1">
                Selection & Orientation
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                Full Name
              </label>
              <input
                className="w-full bg-white border border-slate-200 px-5 py-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                Contact Email
              </label>
              <input
                className="w-full bg-white border border-slate-200 px-5 py-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                Select Course
              </label>
              <select className="w-full bg-white border border-slate-200 px-5 py-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none">
                <option>Basic Orientation Course</option>
                <option>Leadership Executive Programme</option>
              </select>
            </div>
            <button className="w-full bg-green-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-all shadow-lg">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const PortalView = () => (
  <div className="pt-32 pb-24 bg-slate-900 min-h-screen flex items-center animate-in zoom-in-95 duration-500">
    <div className="max-w-md mx-auto w-full px-6">
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center">
        <div className="w-20 h-20 bg-green-100 text-green-700 rounded-3xl flex items-center justify-center mx-auto mb-8 -rotate-6">
          <ShieldCheck size={40} />
        </div>
        <h2 className="text-3xl font-black text-slate-950 mb-2">
          Student Access
        </h2>
        <p className="text-slate-400 mb-8">
          Secure login for registered cadres.
        </p>
        <div className="space-y-4">
          <input
            className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Student Number"
          />
          <input
            className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-green-500"
            type="password"
            placeholder="••••••••"
          />
          <button className="w-full bg-green-700 text-white py-4 rounded-2xl font-black text-lg hover:bg-green-800 transition-all">
            Enter Portal
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default App;
