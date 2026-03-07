import { ChevronRight, Home } from "lucide-react";

export const Breadcrumb = () => {
  return (
    <div className="relative pt-40 pb-24 overflow-hidden bg-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <nav className="flex items-center gap-2 text-green-400/80 mb-6 animate-in fade-in slide-in-from-left duration-700">
          <Home size={14} />
          <a
            href="#"
            className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
          >
            Home
          </a>
          <ChevronRight size={14} />
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            About Us
          </span>
        </nav>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
          Pioneering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Ideological
          </span>{" "}
          Excellence
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed animate-in fade-in duration-1000 delay-200">
          Tracing our roots from the liberation struggle to the modern center
          for National Strategic Thought and Patriotic Leadership.
        </p>
      </div>
    </div>
  );
};
