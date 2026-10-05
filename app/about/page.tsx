import React from "react";
import {
  ShieldCheck,
  Target,
  Award,
  Eye,
  CheckCircle2,
  Users,
  Zap,
  Scale,
} from "lucide-react";
import NavBar from "@/components/layouts/navbar";
import { Breadcrumb } from "@/components/layouts/breadcrump";
import { ValueCard } from "@/components/layouts/value-card";
import Footer from "@/components/layouts/footer";
import { schoolIdentity } from "@/config/identity";

/**
 * MOCK COMPONENTS
 * Since the original project has external layouts, I've consolidated
 * a matching NavBar and Footer into this single-file React component.
 */

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-green-600 selection:text-white">
      <NavBar activeTab="/about" />
      <main>
        <Breadcrumb />
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-60"></div>
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=1000"
                    alt="School Building"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                      <div className="bg-green-500 p-3 rounded-xl">
                        <Users className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-black text-2xl">
                          10,000+
                        </p>
                        <p className="text-green-300 text-xs font-bold uppercase tracking-wider">
                          Trained Cadres
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-700 font-bold text-xs uppercase tracking-widest mb-6">
                  <ShieldCheck size={14} /> Our Identity
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                  A Legacy Rooted in{" "}
                  <span className="text-green-600">Sovereignty</span>
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  The Chitepo School of Ideology is more than an educational
                  institution; it is the ideological heartbeat of Zimbabwe.
                  Named after the visionary lawyer and revolutionary leader
                  Wiltshire Pfumaindini Chitepo, we serve as a forge for
                  patriotic consciousness.
                </p>
                <p className="mb-4 text-xl italic font-medium leading-relaxed text-green-700">
                  {schoolIdentity.tagline}
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {schoolIdentity.mission}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1" size={18} />
                    <span className="font-bold text-slate-800">
                      Patriotic Training
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1" size={18} />
                    <span className="font-bold text-slate-800">
                      Policy Development
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1" size={18} />
                    <span className="font-bold text-slate-800">
                      Strategic Research
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1" size={18} />
                    <span className="font-bold text-slate-800">
                      Leadership Excellence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-700 p-12 rounded-[3rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:scale-150 transition-transform duration-700">
                  <Target size={180} />
                </div>
                <div className="relative z-10">
                  <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                    <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-black mb-6">Mission</h3>
                  <p className="text-green-50 text-xl leading-relaxed">
                    {schoolIdentity.mission}
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 p-12 rounded-[3rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:scale-150 transition-transform duration-700">
                  <Eye size={180} />
                </div>
                <div className="relative z-10">
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                    <Eye size={32} />
                  </div>
                  <h3 className="text-3xl font-black mb-6">Vision</h3>
                  <p className="text-slate-300 text-xl leading-relaxed">
                    {schoolIdentity.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-green-600 font-black tracking-widest text-sm uppercase mb-4">
                Values that Guide Us
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                Built on Foundational Principles
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolIdentity.coreValues.map((value) => {
                const icons: Record<string, typeof Zap> = {
                  patriotism: Zap,
                  professionalism: Award,
                  "gender-sensitivity": Users,
                  integrity: Scale,
                  "team-work": ShieldCheck,
                };
                const Icon = icons[value.key] ?? ShieldCheck;
                return (
                  <ValueCard
                    key={value.key}
                    icon={Icon}
                    title={value.title}
                    desc={value.description}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* History / Timeline Snippet */}
        <section className="py-24 bg-green-950 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                  A History of <br />
                  <span className="text-green-500 italic font-light">
                    Transformation
                  </span>
                </h2>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <div className="w-1 h-full bg-green-500/20"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-green-500">
                        1970s
                      </h4>
                      <p className="text-slate-400 mt-2">
                        Born in the liberation war as a means to orient cadres
                        towards the goals of independence.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <div className="w-1 h-full bg-green-500/20"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-green-500">
                        2016
                      </h4>
                      <p className="text-slate-400 mt-2">
                        Institutionalized as a formal school to provide
                        ideological training for public service.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-green-500">
                        Today
                      </h4>
                      <p className="text-slate-400 mt-2">
                        A world-class academy training thousands of leaders
                        across various sectors of the economy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="relative z-10 p-1 bg-white/5 rounded-[3.5rem] backdrop-blur-sm border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1544640808-32ca72ac7f67?auto=format&fit=crop&q=80&w=800"
                    alt="Legacy"
                    className="rounded-[3.3rem] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 h-[500px] w-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto bg-green-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-green-600/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">
              Be Part of the Future.
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-12 relative z-10">
              Join thousands of patriots in shaping the narrative of a
              prosperous, self-sufficient, and proud Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-white text-green-700 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl">
                Apply for Admission
              </button>
              <button className="bg-green-700/50 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-green-700 transition-colors">
                View Curriculum
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Mockup */}
      <Footer />
    </div>
  );
};

export default App;
