import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="bg-white">
      <div className="bg-[#0A1628] text-white py-16"><div className="max-w-7xl mx-auto px-6"><p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">ABOUT NOBLE EDGE</p><h1 className="font-serif-luxury text-[42px] sm:text-[56px] font-bold leading-tight mt-3">Small enough for personal service.<br/><span className="italic text-[#E9C46A]">Large enough for expertise.</span></h1><p className="text-slate-300 mt-4 max-w-[600px]">Registered in Nigeria under the Companies & Allied Matters Act 1990 (as amended). We combine structured consulting with subject-matter expertise to implement corporate & organisational best practices.</p></div></div>
      <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10">
        <div className="bg-[#FFFBF0] p-7"><p className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880]">OUR MISSION</p><p className="font-serif-luxury text-[24px] font-bold mt-3 leading-snug">“To serve our clients with the passion for excellence and the flexibility to add value.”</p><p className="text-slate-600 mt-4 leading-relaxed">Every business is unique, on its own merit. We start by understanding your goals, strategies, procedures — and your industry, however big or small.</p></div>
        <div className="bg-[#0A1628] text-white p-7"><p className="text-[11px] font-bold tracking-[0.25em] text-[#E9C46A]">OUR VISION</p><p className="font-serif-luxury text-[24px] font-bold mt-3">“To be the firm of first choice for our clients.”</p><p className="text-slate-300 mt-4 leading-relaxed">Our growth has been organic. We develop to cater for clients' needs whenever required — not to grow for size alone.</p></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="font-serif-luxury text-[30px] font-bold">How we work</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {[
            ["1. Understand", "We examine your goals, industry & procedures. Close, personal attention."],
            ["2. Design", "We arrange services to suit your needs — prescriptive or facilitative, as needed."],
            ["3. Deliver & Review", "Engagement Planning Memoranda, partner review, working papers reviewed before sign-off."]
          ].map(([t,d]) => <div key={t} className="border p-6"><h3 className="font-bold">{t}</h3><p className="text-[14px] text-slate-600 mt-2 leading-relaxed">{d}</p></div>)}
        </div>
        <div className="bg-[#FFFBF0] p-7 mt-8"><h3 className="font-bold">Our Organisational Structure</h3><p className="text-[14px] text-slate-600 mt-2 leading-relaxed">MP/CEO → Client Service Partner (with T&Q Control) → Senior Consultants → Group Heads: Audit, Financial Services, IT Services, Management Services, HR, R&D. All engagements under overall control of the Managing Partner/CEO.</p><Link to="/team" className="text-[13px] font-bold mt-4 inline-block underline">Meet the leadership →</Link></div>
      </div>
    </div>
  );
}