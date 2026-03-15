export const ObjectiveCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-500">
      <Icon size={28} />
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-4">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);
