import { Link } from "react-router-dom";
import { ArrowRight, Download, HardDrive, BookOpen, FileCheck } from "lucide-react";

const downloads = [
  {
    icon: <Download size={20} />,
    title: "Kompanion",
    desc: "Main accounting app. Download the Setup, then double-click it to install.",
    file: "/downloads/Kompanion_Setup.exe",
    button: "Download Kompanion",
    note: "Setup drops into your Download folder",
  },
  {
    icon: <HardDrive size={20} />,
    title: "Kompanion Backend",
    desc: "Storage tool (Kompanion Backend 10.3). Host this in your OneDrive folder for backup & restore.",
    file: "/downloads/Kompanion_Backend_10.3.zip",
    button: "Download Backend",
    note: "Move to OneDrive after install — no need to open it",
  },
  {
    icon: <BookOpen size={20} />,
    title: "App Literature",
    desc: "Full literature on how Kompanion works, its features and reports.",
    file: "/docs/Kompanion_App_Literature.pdf",
    button: "Download App Literature",
    note: "PDF • Opens in new tab",
  },
  {
    icon: <FileCheck size={20} />,
    title: "User Agreement",
    desc: "Terms and conditions for using Kompanion.",
    file: "/docs/Kompanion_User_Agreement.pdf",
    button: "Download User Agreement",
    note: "PDF • Please read before install",
  },
];

export default function DownloadPage() {
  return (
    <section className="w-full bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-16">
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">FINANCIAL & MANAGEMENT CONSULTING • NIGERIA</p>
        <h1 className="font-serif-luxury font-bold leading-[0.95] mt-4 text-[56px] sm:text-[72px] lg:text-[88px]">Download.<br/><span className="italic text-[#E9C46A]">Kompanion.</span></h1>
        <p className="text-slate-300 mt-6 max-w-[600px] leading-relaxed">Read the preamble first, then download Kompanion and the Backend. A real companion for your accounting — not just another software.</p>

        <div className="grid lg:grid-cols-2 gap-10 items-start mt-10">
          {/* LEFT - PREAMBLE */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#E9C46A]/60 px-3 py-2"><span className="w-2 h-2 rounded-full bg-[#E9C46A]"></span><span className="text-[11px] font-bold tracking-[0.15em] text-[#E9C46A]">PREAMBLE • PLEASE READ BEFORE INSTALLING</span></div>
            <div className="space-y-5 mt-6 text-slate-300 text-[14px] leading-relaxed">
              <p>For optimum performance, subscribers will need to create a new Administrator account in their PCs with <strong className="text-white">User</strong> as the name of the account. This will not be necessary if the account already uses this as the name of the Administrator in the PC. This is because Kompanion is programmed to recognize User in the network paths through which it communicates with other servers. This is mostly needed for backup and restore operations.</p>
              <p>It is from this account that the subscriber will connect to the internet to download Kompanion. A successful download will drop the Setup into the Download folder.</p>
              <p>Open the Download folder and double-click the Setup to install Kompanion. A successful installation will pin the App to the Start Menu of the PC and drop a shortcut on the Desktop for easy access by users.</p>
              <p>Subscribers will need to sign up for a cloud account in OneDrive under terms and conditions prescribed by the owners of OneDrive. They will also need to download the Setup for a storage tool in a folder (Kompanion Backend 10.3) from our website, www.nobleedgepro.com. This needs to be hosted in the OneDrive folder. To do this, after install, navigate from the C: Drive to the Program Files, then to the Kompanion Backend 0.3 folder. It should be moved or copied to the OneDrive folder. (You don’t need to open this folder, but if you do, close it again. It does not need to be open to function). This is the remote storage where Kompanion will back up the Subscriber’s data and restore therefrom.</p>
              <p>The main objective of the Kompanion App is to provide a reasonable level of automation of the accounting process. While speed is important, it recognizes the need for accuracy and integrity of data in the system.</p>
              <p>In developing the App, the psychology of the end user is taken into consideration, while at the same time paying attention to the need for compliance with relevant legislations and standards. The pop-up messages associated with the Application are designed to inform the end user of what the App is doing internally as well as the steps the end user is expected to take in order to achieve best results in the transaction processing. Support is readily available and easily accessible from almost any page the user is working on – giving the App its name “Kompanion” (as in Companion).</p>
              <p>Noble Edge Professional Services is the developer and sole owner of Kompanion. The development has taken years of intensive research and observation of other accounting packages.</p>
              <p>The software is an accounting application. Its primary purpose is book-keeping. Accordingly, it is designed to accept financial transactions into the database, generate trial balance, profit and loss account, and balance sheet. It can generate report of transactions keyed into the system for call-over, it can generate statement of account to advise customers, or transaction history for management and control purposes.</p>
              <p>The application is capable of generating five-year financial summary. It can generate each year’s financial summary with its previous year comparative figures (the fifth year financial summary has the sixth year comparative figures). To create the new year’s figures, the earliest (now the seventh year’s figures) are removed from the database.</p>
              <p>This application does not diagnose or record activities that lead to the consummation of a transaction. Rather, it is the financial implication evidenced by, for example, an invoice as proof of the transaction entered into that can be keyed into the system. Once such tickets are keyed into system, the application is programmed to generate the financial reports (trial balance, profit and loss account, balance sheet, cash flow statement, statement of value added etc.) without further human intervention except clicking the relevant command buttons.</p>
              <p>Activities leading to the consummation of a transaction may be handled by other applications, for example, invoice processing, payroll processing, inventory processing etc., however, this application provides an interface through which it can accept data from or transfer data to those other applications. It can transfer data to and receive data from Excel.</p>
              <p>The dominant feature of the application is its use of pop-up windows (or pages) which provide users with high navigation advantage and promote a high level of user friendliness.</p>
              <p>Kompanion has been developed after years of extensive research, and observation of other accounting applications. Most of its features take into account the psychology of the end user, the need for data integrity, business continuity, and as far as possible, relevant legislations and standards, among others.</p>
            </div>
          </div>

          {/* RIGHT - DOWNLOADS */}
          <div className="bg-[#122A44] border border-white/10 p-6 sm:p-7 relative">
            <div className="absolute top-6 right-6 w-[20px] h-[20px] bg-[#E9C46A] rotate-45 rounded-[3px]"></div>
            <p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">THE NOBLE EDGE</p>
            <h2 className="font-serif-luxury text-[26px] sm:text-[30px] leading-tight font-semibold mt-3">Get Kompanion.<br/>Start with evidence.</h2>
            <div className="space-y-3 mt-6">
              {downloads.map((item) => (
                <div key={item.title} className="bg-[#1A3552] p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-[#E9C46A] mt-1">{item.icon}</div>
                    <div className="flex-1">
                      <p className="font-bold text-[14px]">{item.title}</p>
                      <p className="text-[13px] text-slate-300 mt-1">{item.desc}</p>
                      <p className="text-[11px] text-slate-400 mt-2">{item.note}</p>
                    </div>
                  </div>
                  <a href={item.file} download><button className="w-full mt-4 bg-[#E9C46A] text-black text-[13px] font-semibold px-5 py-3 flex items-center justify-center gap-2">{item.button} <ArrowRight size={15} /></button></a>
                </div>
              ))}
            </div>
            <div className="bg-[#E9C46A] text-black p-4 mt-3 flex items-center justify-between gap-3">
              <div><p className="font-bold text-[14px]">Need help installing?</p><p className="text-[12px] opacity-80">A real conversation, not a sales call.</p></div>
              <Link to="/contact"><button className="bg-[#0A1628] text-white text-[12px] font-semibold px-3 py-2 flex items-center gap-1">Book <ArrowRight size={13} /></button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}