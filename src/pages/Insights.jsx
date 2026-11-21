import { Link } from "react-router-dom";
import { FileText, ArrowRight, Download } from "lucide-react";
const posts = [
  { tag: "FINANCIAL CONSULTING", title: "Investment vs Financing: Why the order matters", desc: "A project must yield enough to cover its cost of financing. How we test it before you commit." },
  { tag: "RISK • BASEL III", title: "Liquidity: Even solvent firms can fail", desc: "Working capital, Basel III, and why illiquidity traps good businesses." },
  { tag: "MANAGEMENT", title: "Prescriptive vs Facilitative Consulting", desc: "When you need an expert answer — and when you need a better process." },
  { tag: "HUMAN RESOURCES", title: "Get the first M right: Men", desc: "Money, material, machine — none of them work if people are wrong." },
  { tag: "GOVERNANCE", title: "Board Appraisal: What good looks like", desc: "Lessons from reviews at Union Bank, GTBank, Sterling and others." },
  { tag: "VALUATION", title: "Start-up & M&A Valuations, explained simply", desc: "How much equity to sell, at what price — and how to negotiate it." },
];
export default function Insights() {
  return (
    <div className="bg-white">
      <div className="bg-[#0A1628] text-white py-16"><div className="max-w-7xl mx-auto px-6"><p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">NOBLE INSIGHTS • RESOURCE CENTER</p><h1 className="font-serif-luxury text-[42px] sm:text-[56px] font-bold mt-3">Thinking, in plain language.</h1><p className="text-slate-300 mt-3 max-w-[600px]">Monthly thinking on finance, strategy & disciplined growth. No jargon. Advice you can act on this week.</p>
      <a href="https://drive.google.com/uc?export=download&id=YOUR_ID_HERE"><button className="mt-6 bg-[#E9C46A] text-black px-5 py-3 text-[13px] font-semibold flex items-center gap-2"><Download size={15}/> Download Company Profile</button></a></div></div>
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map(p => <div key={p.title} className="border p-6 flex flex-col"><div className="w-[36px] h-[36px] bg-[#E9C46A] flex items-center justify-center"><FileText size={18}/></div><p className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] mt-4">{p.tag}</p><h3 className="font-serif-luxury text-[20px] font-bold mt-2 leading-snug">{p.title}</h3><p className="text-[14px] text-slate-600 mt-2 flex-1 leading-relaxed">{p.desc}</p><Link to="/contact" className="mt-4 text-[13px] font-bold flex items-center gap-1">Discuss this <ArrowRight size={14}/></Link></div>)}
      </div>
    </div>
  );
}