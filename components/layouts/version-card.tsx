import { ArrowUpRight } from "lucide-react";

export const VisionCard = ({ icon: Icon, title, desc, delay }: any) => (
  <div
    className="relative group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-green-600/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden"
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Animated Background Gradient */}
    <div className="absolute -right-20 -top-20 w-40 h-40 bg-green-100 rounded-full blur-3xl group-hover:bg-green-200 transition-colors duration-700"></div>

    <div className="relative z-10">
      <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:bg-green-600 group-hover:rotate-[10deg] transition-all duration-500 shadow-xl group-hover:shadow-green-600/30">
        <Icon size={32} />
      </div>
      <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
        {title}
      </h4>
      <p className="text-slate-600 leading-relaxed text-lg">{desc}</p>
    </div>

    {/* Subtle indicator icon */}
    <div className="absolute bottom-8 right-8 text-slate-200 group-hover:text-green-600 group-hover:translate-x-2 transition-all duration-500">
      <ArrowUpRight size={24} />
    </div>
  </div>
);
