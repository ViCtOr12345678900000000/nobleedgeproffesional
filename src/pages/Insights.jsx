// src/pages/Insights.jsx
import { Link } from "react-router-dom";
import { FileText, ArrowRight, Download, Calendar } from "lucide-react";

const posts = [
  {
    tag: "PRODUCT • KOMPANION APP",
    title: "Kompanion App Literature",
    date: "Updated 2026",
    desc: "The main objective of the Kompanion App is to provide a reasonable level of automation of the accounting process. While speed is important, it recognizes the need for accuracy and integrity of data in the system. It is designed for book-keeping — to accept financial transactions, generate trial balance, profit and loss account, and balance sheet, with five-year financial summary and cloud backup.",
    file: "/docs/Kompanion_App_Literature.pdf",
    fileName: "Kompanion_App_Literature.pdf",
  },
  {
    tag: "LEGAL • USER AGREEMENT",
    title: "Kompanion (App User Agreement)",
    date: "Last Updated 1st January, 2026",
    desc: "Terms for subscribers to the Kompanion App. Subscribers pay in advance via Microsoft App Store, notify Noble Edge Professional Services with proof of payment, and receive a Sort Code and Subscription ID for final access. Covers subscription renewal, onboarding, and service disruption.",
    file: "/docs/KOMPANION_USER_AGREEMENT.pdf",
    fileName: "KOMPANION_USER_AGREEMENT.pdf",
  },
  {
    tag: "GOVERNANCE • POLICY",
    title: "NEPS Whistle Blowing Policy",
    date: "Policy Document",
    desc: "The Management of Noble Edge Professional Services has a duty to conduct its affairs in a responsible and transparent manner. This policy assists in investigating and, where appropriate, acting upon a complaint about violations of code of corporate governance and regulatory requirements.",
    file: "/docs/NEPS_Whistle_Blowing_Policy.pdf",
    fileName: "NEPS_Whistle_Blowing_Policy.pdf",
  },
  {
    tag: "PRIVACY • POLICY FRAMEWORK",
    title: "Noble Edge Privacy Policy Framework",
    date: "Last Updated: January 1, 2026",
    desc: "How Noble Edge Professional Services handles information, retention, correspondences and its products/services. Subscribers who collect information from their own customers are responsible for developing a privacy policy of their own. This policy is reviewed every three years or at any new development that justifies review.",
    file: "/docs/Noble_Edge_Privacy_Policy.pdf",
    fileName: "Noble_Edge_Privacy_Policy.pdf",
  },
];

export default function Insights() {
  return (
    <div className="bg-white">
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">NOBLE INSIGHTS • RESOURCE CENTER</p>
          <h1 className="font-serif-luxury text-[42px] sm:text-[56px] font-bold mt-3">Thinking, in plain language.</h1>
          <p className="text-slate-300 mt-3 max-w-[600px]">
            Official documents, policies and product literature from Noble Edge Professional Services. Download any document directly to your device.
          </p>
          {/* FIXED: Now downloads your Company Profile file from your site */}
          <a href="/docs/Profile_of_the_Organization_1.docx" download="Profile_of_the_Organization_1.docx">
            <button className="mt-6 bg-[#E9C46A] text-black px-5 py-3 text-[13px] font-semibold flex items-center gap-2">
              <Download size={15} /> Download Company Profile
            </button>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p) => (
          <div key={p.title} className="border p-6 flex flex-col hover:shadow-lg transition">
            <div className="w-[36px] h-[36px] bg-[#E9C46A] flex items-center justify-center">
              <FileText size={18} />
            </div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] mt-4">{p.tag}</p>
            <h3 className="font-serif-luxury text-[20px] font-bold mt-2 leading-snug">{p.title}</h3>
            <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
              <Calendar size={12} /> {p.date}
            </p>
            <p className="text-[14px] text-slate-600 mt-2 flex-1 leading-relaxed">{p.desc}</p>
            <a href={p.file} download={p.fileName} className="mt-5">
              <button className="w-full bg-[#0A1628] text-white px-4 py-3 text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-black transition">
                <Download size={15} /> Download Full Text
              </button>
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}