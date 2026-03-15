export const ValueTile = ({ icon: Icon, title, desc, colorClass }: any) => (
  <div
    className={`relative overflow-hidden group p-10 rounded-[3rem] border border-slate-100 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
  >
    <div
      className={`absolute top-0 left-0 w-2 h-full ${colorClass} transition-all duration-500 group-hover:w-full group-hover:opacity-5`}
    ></div>

    <div className="relative z-10">
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg bg-slate-50 text-slate-900 group-hover:bg-green-600 group-hover:text-white`}
      >
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-lg">{desc}</p>
    </div>
  </div>
);
