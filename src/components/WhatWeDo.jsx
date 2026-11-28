// WhatWeDo.jsx
import { Link } from "react-router-dom";
import { TrendingUp, BarChart3, Users, ArrowUpRight } from "lucide-react";
import { services } from "../data/content";
const icons = { TrendingUp, BarChart3, Users };

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#0A1628] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A] text-center">WHAT WE DO</p>
        <h2 className="font-serif-luxury text-white text-center text-[36px] sm:text-[44px] font-bold mt-3">Financial, Management & Human Resource Consulting</h2>
        <p className="text-slate-400 text-center mt-3 max-w-[600px] mx-auto">Three practices. One goal — to understand your business & industry, then arrange our services to suit your needs.</p>
        <div className="grid md:grid-cols-3 gap-5 mt-10 ">
          {services.map(s => { const Icon = icons[s.icon]; return (
            <div key={s.id} className="bg-[#FFFBF0] p-6 flex flex-col min-h-[280px] rounded-sm">
              <div className="flex justify-between"><div className="w-[38px] h-[38px] bg-[#E9C46A] flex items-center justify-center rounded-full"><Icon size={20}/></div><span className="text-[10px] font-bold tracking-[0.15em] text-[#C5A880] ">{s.tag}</span></div>
              <h3 className="font-serif-luxury text-[22px] font-bold mt-5">{s.title}</h3>
              <p className="text-[14px] text-slate-600 mt-2 flex-1 leading-relaxed">{s.desc}</p>
              <ul className="text-[13px] text-slate-600 space-y-1 mt-3">{s.points.slice(0,3).map(p => <li key={p}>• {p}</li>)}</ul>
              
            </div>);})}
        </div>
      </div>
    </section>
  );
}