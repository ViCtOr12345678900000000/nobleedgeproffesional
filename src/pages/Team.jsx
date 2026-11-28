import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Award, ArrowRight, Mail } from "lucide-react";
import { leaders } from "../data/content";

export default function Team() {
  const founder = leaders[0];

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="bg-[#0A1628] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#C5A880]">OUR TEAM</p>
          <h1 className="font-serif-luxury text-[38px] sm:text-[52px] font-bold mt-3 leading-tight">
            Led by experience.<br />
            <span className="italic text-[#C5A880]">Built on trust.</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-14 items-start">

          {/* LEFT — ROUNDED PROFILE CARD */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#FFFBF0] border border-[#C5A880]/30 p-8 text-center rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <div className="w-[110px] h-[110px] mx-auto rounded-full bg-[#0A1628] text-[#E9C46A] flex items-center justify-center text-[36px] font-bold font-serif-luxury ring-4 ring-[#C5A880]/30">
                {founder.initials}
              </div>
              <h2 className="font-serif-luxury text-[26px] font-bold leading-tight mt-5">{founder.name}</h2>
              <p className="text-[13px] font-semibold text-[#C5A880] mt-1">{founder.role}</p>
              <p className="text-[13px] text-slate-600 leading-relaxed mt-4">{founder.shortBio}</p>

              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {["FCA, ICAN", "PhD Banking & Finance", "MBA", "ANIM", "ACTI"].map(c => (
                  <span key={c} className="text-[11px] font-semibold bg-white border rounded-full px-3 py-1">{c}</span>
                ))}
              </div>

              <div className="bg-[#0A1628] text-white p-4 mt-6 text-left flex gap-3 rounded-2xl">
                <Award className="text-[#E9C46A] shrink-0" size={20} />
                <p className="text-[13px] leading-relaxed">{founder.highlight}</p>
              </div>

              <Link to="/contact" className="mt-6 bg-[#0A1628] text-white w-full py-3.5 text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-[#C5A880] hover:text-black transition rounded-full">
                Work With Dr. Okorie <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* RIGHT — STORY */}
          <div>
            <h3 className="font-serif-luxury text-[28px] font-bold">The Founder's Profile</h3>
            <div className="space-y-5 mt-5">
              {founder.story.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.85] text-slate-700">{p}</p>
              ))}
            </div>

            {/* EDUCATION + CAREER — ROUNDED CARDS */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="border p-6 rounded-2xl bg-white shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-[#FFFBF0] rounded-full flex items-center justify-center">
                    <GraduationCap className="text-[#C5A880]" size={18} />
                  </div>
                  <h4 className="font-bold text-[15px]">Education</h4>
                </div>
                <ul className="mt-4 space-y-3">
                  {founder.education.map(e => (
                    <li key={e} className="text-[14px] text-slate-700 leading-relaxed flex gap-2">
                      <span className="text-[#C5A880] font-bold">—</span> {e}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border p-6 rounded-2xl bg-white shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-[#FFFBF0] rounded-full flex items-center justify-center">
                    <Briefcase className="text-[#C5A880]" size={18} />
                  </div>
                  <h4 className="font-bold text-[15px]">Career</h4>
                </div>
                <ul className="mt-4 space-y-3">
                  {founder.career.map(c => (
                    <li key={c} className="text-[14px] text-slate-700 leading-relaxed flex gap-2">
                      <span className="text-[#C5A880] font-bold">—</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BOARD APPRAISALS — ROUNDED PILLS */}
            <div className="mt-10">
              <h4 className="font-bold text-[17px]">Board Appraisal & Corporate Governance Reviews Led</h4>
              <p className="text-[13px] text-slate-500 mt-1">In a team leadership capacity at J.K. Randle International and Noble Edge.</p>
              <div className="grid sm:grid-cols-2 gap-3 mt-5">
                {founder.boards.map(b => (
                  <div key={b} className="bg-[#FFFBF0] border border-[#C5A880]/20 px-4 py-3.5 text-[13.5px] font-medium text-slate-700 rounded-xl">
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA — ROUNDED */}
            <div className="bg-[#0A1628] text-white p-8 mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-[24px]">
              <div>
                <h4 className="font-serif-luxury text-[24px] font-bold">Have a board, audit or strategy question?</h4>
                <p className="text-[13px] text-slate-300 mt-1">Start with a confidential consultation.</p>
              </div>
              <Link to="/contact" className="bg-[#E9C46A] text-black px-6 py-3 text-[13px] font-semibold flex items-center gap-2 shrink-0 hover:bg-white transition rounded-full">
                <Mail size={15} /> Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}