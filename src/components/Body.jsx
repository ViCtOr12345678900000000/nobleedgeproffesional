import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Body() {
  return (
    <section className="w-full bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">FINANCIAL & MANAGEMENT CONSULTING • NIGERIA</p>
          <h1 className="font-serif-luxury font-bold leading-[0.95] mt-4 text-[56px] sm:text-[72px] lg:text-[88px]">Clarity.<br/>Strategy.<br/><span className="italic text-[#E9C46A]">Growth.</span></h1>
          <p className="text-slate-300 mt-6 max-w-[500px] leading-relaxed">Registered in Nigeria under CAMA. We advise companies & governments on debt or equity — private placement, public offers, rights issues — and help them implement corporate & organisational best practices.</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link to="/contact"><button className="bg-[#E9C46A] text-black text-[13px] font-semibold px-5 py-3 flex items-center gap-2">Book a Consultation <ArrowRight size={15}/></button></Link>
            <Link to="/services"><button className="border border-slate-500 px-5 py-3 text-[13px] font-semibold">Explore Services</button></Link>
          </div>
          <div className="border-t border-slate-700 mt-10 pt-6">
            <div className="inline-flex items-center gap-2 border border-[#E9C46A]/60 px-3 py-2"><span className="w-2 h-2 rounded-full bg-[#E9C46A]"></span><span className="text-[11px] font-bold tracking-[0.15em] text-[#E9C46A]">TRUSTED • INDEPENDENT • CONFIDENTIAL</span></div>
            <p className="text-[13px] text-slate-400 mt-3">Small enough for personal service. Large enough for specialist expertise.</p>
          </div>
        </div>
        <div className="bg-[#122A44] border border-white/10 p-6 sm:p-7 relative">
          <div className="absolute top-6 right-6 w-[20px] h-[20px] bg-[#E9C46A] rotate-45 rounded-[3px]"></div>
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">THE NOBLE EDGE</p>
          <h2 className="font-serif-luxury text-[26px] sm:text-[30px] leading-tight font-semibold mt-3">Decisions made with evidence. Growth built to last.</h2>
          <div className="space-y-3 mt-6">
            <div className="bg-[#1A3552] p-4"><p className="font-bold text-[14px]">Our Mission</p><p className="text-[13px] text-slate-300 mt-1">“To serve our clients with the passion for excellence and the flexibility to add value.”</p></div>
            <div className="bg-[#1A3552] p-4"><p className="font-bold text-[14px]">Our Vision</p><p className="text-[13px] text-slate-300 mt-1">“To be the firm of first choice for our clients.”</p></div>
          </div>
          <div className="bg-[#E9C46A] text-black p-4 mt-3 flex items-center justify-between gap-3">
            <div><p className="font-bold text-[14px]">Confidential consultation</p><p className="text-[12px] opacity-80">A real conversation, not a sales call.</p></div>
            <Link to="/contact"><button className="bg-[#0A1628] text-white text-[12px] font-semibold px-3 py-2 flex items-center gap-1">Book <ArrowRight size={13}/></button></Link>
          </div>
          <p className="text-[13px] text-slate-300 mt-4">Every little difference counts. We deliver change by integrating small changes — new systems, policies, processes — that show up in your accounting figures.</p>
          <div className="bg-white text-black p-3 mt-5 max-w-[280px]"><p className="text-[10px] font-bold tracking-[0.25em] text-[#C5A880]">NIGERIA • EST. EXCELLENCE</p><p className="text-[13px] font-semibold mt-1">Independent. Accountable. Precise.</p></div>
        </div>
      </div>
    </section>
  );
}