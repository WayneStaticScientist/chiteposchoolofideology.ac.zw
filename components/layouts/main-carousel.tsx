"use client";
import React, { useEffect, useState } from "react";
import { Typewriter } from "../views/type-writter";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function MainCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "/slide_1.png",
      tag: "Academic Excellence",
      title: "Building the Leaders of Tomorrow",
      desc: "Nurturing a new generation of patriots committed to Zimbabwe's progress.",
    },
    {
      image:
        "/slide_2.png",
      tag: "Cultural Integrity",
      title: "Rooted in National Heritage",
      desc: "Interpreting our history to drive future economic sovereignty.",
    },
    {
      image:
        "/slide_3.png",
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
          <h1 className="lg:text-6xl text-3xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            DECOLONISING <br /> THE <Typewriter />
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-10 max-w-2xl font-light">
            "{slides[currentSlide].desc}"
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-green-500 hover:scale-105 transition-all shadow-2xl shadow-green-900/50 group">
              Enroll for {new Date().getFullYear()}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
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
  );
}
