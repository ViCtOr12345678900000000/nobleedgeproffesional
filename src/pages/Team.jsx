// src/pages/Team.jsx
import { leaders } from "../data/content";
import { Award, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Team() {
  // Show ONLY the founder - not all partners
  const founder = leaders.find((l) => 
    l.role.toLowerCase().includes("founder") || 
    l.role.toLowerCase().includes("chief executive") ||
    l.role.toLowerCase().includes("ceo")
  ) || leaders[0];

  return (
    <div className="bg-white">
      {/* Header - Changed to Founder */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">OUR FOUNDER</p>
          <h1 className="font-serif-luxury text-[42px] sm:text-[56px] font-bold mt-3">
            Our Founder.
          </h1>
          <p className="text-slate-300 mt-3 max-w-[600px]">
            Led by the founder, backed by a large pool of local & international collaborating associates — carefully selected for knowledge, integrity & objectivity.
          </p>
        </div>
      </div>

      {/* Founder Card - Single, Centered */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="border p-7 flex flex-col">
          <div className="flex items-center gap-4">
            <div className="w-[72px] h-[72px] bg-[#0A1628] text-[#E9C46A] flex items-center justify-center font-serif-luxury text-[24px] font-bold">
              {founder.initials}
            </div>
            <div>
              <h2 className="font-serif-luxury text-[28px] font-bold leading-tight">{founder.name}</h2>
              <p className="text-[13px] font-bold text-[#C5A880] mt-1">{founder.role}</p>
            </div>
          </div>

          <p className="text-[12px] text-slate-500 mt-4">{founder.creds}</p>
          <p className="text-[14px] text-slate-600 leading-relaxed mt-3 flex-1">{founder.bio}</p>

          <div className="bg-[#FFFBF0] p-4 mt-4 flex gap-2">
            <Award size={18} className="text-[#C5A880] shrink-0" />
            <p className="text-[13px] font-medium">{founder.highlight}</p>
          </div>

          {founder.email && (
            <a href={`mailto:${founder.email}`} className="mt-4 text-[13px] font-bold flex items-center gap-2 text-[#0A1628]">
              <Mail size={15} /> {founder.email}
            </a>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-14">
        <div className="bg-[#0A1628] text-white p-7 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
          <div>
            <h3 className="font-serif-luxury text-[24px] font-bold">Work with the founder directly.</h3>
            <p className="text-slate-300 text-[14px] mt-1">Quick founder response — no layers, no hand-offs.</p>
          </div>
          <Link to="/contact">
            <button className="bg-[#E9C46A] text-black px-5 py-3 text-[13px] font-semibold">Book a Consultation</button>
          </Link>
        </div>
      </div>
    </div>
  );
}