import { services } from "../data/content";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <div className="bg-white">
      <div className="bg-[#0A1628] text-white py-16"><div className="max-w-7xl mx-auto px-6"><p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">OUR SERVICES</p><h1 className="font-serif-luxury text-[42px] sm:text-[56px] font-bold mt-3">What we do, in detail.</h1><p className="text-slate-300 mt-3 max-w-[600px]">Passion for excellence, competence & commitment — building long-standing relationships.</p></div></div>
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {services.map(s => (
          <div key={s.id} id={s.id} className="grid lg:grid-cols-2 gap-8 border-b pb-12">
            <div><p className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880]">{s.tag}</p><h2 className="font-serif-luxury text-[32px] font-bold mt-2">{s.title}</h2><p className="text-slate-600 mt-3 leading-relaxed">{s.desc}</p>
            <Link to="/contact"><button className="mt-5 bg-[#0A1628] text-white px-5 py-3 text-[13px] font-semibold flex items-center gap-2">Discuss this service <ArrowRight size={15}/></button></Link></div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-[#FFFBF0] p-5"><h3 className="font-bold text-[14px]">What we help with</h3><ul className="mt-3 space-y-2">{s.points.map(p => <li key={p} className="flex gap-2 text-[13px] text-slate-600"><Check size={15} className="text-[#C5A880] shrink-0 mt-0.5"/>{p}</li>)}</ul></div>
              <div className="bg-[#0A1628] text-white p-5"><h3 className="font-bold text-[14px]">Our methodology</h3><ul className="mt-3 space-y-2">{s.methodology.map(p => <li key={p} className="flex gap-2 text-[13px] text-slate-300"><Check size={15} className="text-[#E9C46A] shrink-0 mt-0.5"/>{p}</li>)}</ul></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}