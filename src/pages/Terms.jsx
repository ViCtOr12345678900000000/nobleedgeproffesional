import { FileText, Shield, Scale, Mail, Download } from "lucide-react";

export default function Terms() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">LEGAL</p>
          <h1 className="font-serif-luxury text-[42px] sm:text-[56px] font-bold mt-3 leading-tight">
            Terms &amp; <span className="italic text-[#E9C46A]">User Agreement</span>
          </h1>
          <p className="text-slate-300 text-[14px] mt-4 max-w-2xl leading-relaxed">
            Terms for nobleedgepro.com and the Kompanion App User Agreement. Please read carefully before using this website or subscribing to Kompanion.
          </p>
          <p className="text-[12px] text-slate-400 mt-4">Last Updated: 1st January, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* QUICK NAV */}
        <div className="bg-[#FFFBF0] border border-[#E9C46A]/40 p-5 mb-10">
          <h3 className="font-bold text-[13px] tracking-widest">ON THIS PAGE</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <a href="#website-terms" className="text-[12px] bg-white border px-3 py-1.5 hover:border-[#C5A880]">Part A: Website Terms</a>
            <a href="#kompanion" className="text-[12px] bg-white border px-3 py-1.5 hover:border-[#C5A880]">Part B: Kompanion User Agreement</a>
            <a href="#general" className="text-[12px] bg-white border px-3 py-1.5 hover:border-[#C5A880]">Part C: General</a>
          </div>
          <a href="/KOMPANION_USER_AGREEMENT.pdf" download className="inline-flex items-center gap-2 mt-4 text-[13px] font-semibold text-[#0A1628] underline underline-offset-4">
            <Download size={15} /> Download Kompanion User Agreement (PDF)
          </a>
        </div>

        {/* ============ PART A: WEBSITE TERMS ============ */}
        <section id="website-terms" className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="text-[#C5A880]" size={20} />
            <h2 className="font-serif-luxury text-[28px] font-bold">Part A — Website Terms of Use</h2>
          </div>
          <div className="space-y-4 text-[14px] leading-relaxed text-slate-700">
            <p><strong>A.1 Acceptance.</strong> By accessing nobleedgepro.com (the "Website"), you agree to be bound by these Terms. If you do not agree, please do not use this Website.</p>
            <p><strong>A.2 Purpose.</strong> This Website provides general information about Noble Edge Professional Services. Content is for informational purposes only and does not constitute professional, financial, legal, or investment advice.</p>
            <p><strong>A.3 No Professional Relationship.</strong> Viewing this Website or contacting us through the contact form does not create a client, advisory, or fiduciary relationship. Such a relationship is only created upon signing an Engagement Planning Memorandum (EPM) or formal engagement letter.</p>
            <p><strong>A.4 Accuracy.</strong> While we strive for accuracy, we do not warrant that information on this Website is complete, current, or error-free. We may update content without notice.</p>
            <p><strong>A.5 Prohibited Use.</strong> You agree not to misuse this Website, attempt to gain unauthorised access, copy or scrape content for commercial use, or use the contact form to send spam, abusive, or unlawful messages.</p>
            <p><strong>A.6 Intellectual Property.</strong> All content on this Website — including text, logo, designs, and branding — is the property of Noble Edge Professional Services and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use our logo or content without prior written permission.</p>
            <p><strong>A.7 Privacy &amp; Data.</strong> When you submit the contact form, we collect your name, email, company, and message solely to respond to your enquiry. We do not sell your data.</p>
          </div>
        </section>

        {/* ============ PART B: KOMPANION AGREEMENT - VERBATIM ============ */}
        <section id="kompanion" className="mb-12 border-t pt-10">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="text-[#C5A880]" size={20} />
            <h2 className="font-serif-luxury text-[28px] font-bold">Part B — Kompanion (App User Agreement)</h2>
          </div>
          <p className="text-[13px] text-slate-500 mb-8">NOBLE EDGE PROFESSIONAL SERVICES — Last Updated 1st January, 2026</p>

          {/* 1.0 Overview */}
          <h3 className="font-bold text-[18px] mt-8 mb-2">1.0 Overview</h3>
          <div className="space-y-4 text-[14px] leading-relaxed text-slate-700">
            <p>Noble Edge Professional Services, a Consulting firm registered under the Corporate Affairs Commission of Nigeria with registration No. BN 2180354, is the developer and sole owner of the Kompanion App. Please read the following terms and conditions of purchase of Kompanion subscriptions carefully before using Kompanion App or buying Kompanion subscriptions. By using Kompanion App and by agreeing to purchase a subscription for the App, you declare that you have read, understood and accepted these terms and conditions. If you do not agree with these terms and conditions, please do not use the Kompanion App.</p>
            <p className="italic">You may read this Agreement in conjunction with the Kompanion App Literature, our Privacy Policy, and Whistle Blowing Policy all of which are available on our website, www.nobleedgepro.com, in order to gain a holistic view of what you are subscribing to.</p>
          </div>

          {/* 2. Availability */}
          <h3 className="font-bold text-[18px] mt-8 mb-2">2. Availability</h3>
          <div className="space-y-4 text-[14px] leading-relaxed text-slate-700">
            <p>The only legitimate channel for making Kompanion available to prospective subscribers is through download from Microsoft App Store. Subscribers who may want to download it from our website, www.nobleedgepro.com, will be automatically re-directed to the Microsoft App Store.</p>
            <p>Kompanion is covered by a copy right protection, therefore, the App purchased or subscribed to is only for use by the subscriber/customer and should not be shared, transferred, resold or in any other way, redistributed to third parties other than the subscriber/customer. Noble Edge Professional Services reserves the right to suspend and/or terminate any purchase of subscription in such event, and may seek redress if it is reasonably believed that a damage or loss has been suffered by the firm.</p>
          </div>

          {/* 3. Subscription */}
          <h3 className="font-bold text-[18px] mt-8 mb-2">3. Subscription</h3>
          <div className="space-y-4 text-[14px] leading-relaxed text-slate-700">
            <p>A subscriber may profile himself/herself to monthly, quarterly, biannual, or annual subscription band. The subscriber can change from one subscription band to another if he/she so desires.</p>
            <p>Payment relates directly to the Kompanion App subscription and all additional purchases and product features that fall under this subscription. A description of the subscription being purchased, the price of the subscription and the duration of the subscription are stated at the time of purchase. Subscribers shall pay the subscription in advance to Microsoft App Store to gain a primary level of access, and notify Noble Edge Professional Services with a proof of such payment. Noble Edge Professional Services will send a Sort Code and Subscription ID to the subscriber (useable only once) for a second and final level of access to the App.</p>
            <p>Ten days to the expiry of the subscription, the App will notify the subscriber of the expiry date and the number of days to that date. The notification continues everyday till the expiry date. Once notified, a subscriber may renew the subscription without losing any day in the existing subscription period. The App will automatically lock out the subscriber if subscription is not renewed till the expiry date.</p>
            <p>Noble Edge Professional Services reserves the right to change these Terms and Conditions, including the subscription prices in line with changing economic and other realities. Reasonable notice will be given to subscribers before such change will take effect. Subscribers reserve the right to change your login details to suit your organizational policy whether for security or any other reason.</p>
          </div>

          {/* 4. Service Disruption */}
          <h3 className="font-bold text-[18px] mt-8 mb-2">4. Service Disruption</h3>
          <div className="space-y-4 text-[14px] leading-relaxed text-slate-700">
            <p>Noble Edge Professional Services does not guarantee un-interruption of service and cannot be held liable for any downtime ('downtime' meaning periods of unavailability or limited availability of the Kompanion App where online services are involved) or difficulties in accessing the service, which can occur occasionally for updates and maintenance. Furthermore, Noble Edge Professional Services is not liable for any downtime caused by third party service providers, internet providers etc. or for downtime caused by Force Majeure.</p>
            <p>Noble Edge Professional Services will not be held liable for damage or loss occasioned by use of any version of the Kompanion App not certified for use.</p>
          </div>

          {/* 5.0 Onboarding */}
          <h3 className="font-bold text-[18px] mt-8 mb-2">5.0 Onboarding</h3>
          <div className="space-y-4 text-[14px] leading-relaxed text-slate-700">
            <ul className="list-disc pl-5 space-y-3">
              <li>Subscribers will need to create an Administrator account in their PCs with <strong>User</strong> as the name of the account. This will not be necessary if the Administrator already uses this as the name of the Administrator in the PC. This is because Kompanion is programmed to recognize <strong>User</strong> in the network paths through which it communicates with other servers. The account that has <strong>User</strong> as its name is where the App should be downloaded and installed.</li>
              <li>Subscribers will need to sign up for a cloud account in <strong>OneDrive</strong> under terms and conditions prescribed by the owners of OneDrive. They will also need to download a storage tool in a folder (<strong>Kompanion Backend 10.3</strong>) from our website, www.nobleedgepro.com. This needs to be hosted in the OneDrive folder. (You don't need to open this folder, but if you do, close it again. It does not need to be open to function). This is the remote storage where Kompanion will back up the Subscribers data.</li>
              <li>There is sufficient flexibility in account numbering and nomenclature. Subscribers can adopt their own account numbering and naming depending on the nature of their business and industry. However, Suspense Account, Criticized Account, and Criticized Operation Account should not be changed even though their numbers can be changed. The Application recognizes these account names for their specialized functions.</li>
            </ul>
            <p>Subscribers who want to adopt the Developer's account numbering structure can edit the account names if they want to. To edit the account names, logon to the Admin Panel, double-click the UID to display and unlock hidden functions and control. Right-click the "Manage Database" button, select the "Edit Account Info" from the dropdown menu, and follow further promptings.</p>
            <p>Subscribers who want to change the account numbering structure can logon to the Admin Panel and double-click the UID to display and unlock hidden functions and controls. To change the account numbering structure, right-click the "Client Kick-off Tasks" button, select the "Update Account Grouping" option from the dropdown menu to open the Account Grouping Update page. Double-click the UID to display and unlock hidden functions and controls, then edit the account numbering structure. Create new ledger accounts that align with the new account numbering structure. The existing accounts should be archived, deleted from the archive and ultimately deleted from the Index file.</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Accounts migrated to the system during onboarding remain blocked for 48 hours for system validation and security reasons. After the 48 hours, the system will automatically unblock them. Accounts created after onboarding will also require 48 hours for system validation, after which the System Admin can login to the Admin Panel to unblock them manually.</li>
            </ul>
          </div>

          {/* 6. Declarations */}
          <h3 className="font-bold text-[18px] mt-8 mb-2">6. Declarations</h3>
          <ol className="list-[lower-roman] pl-6 space-y-3 text-[14px] leading-relaxed text-slate-700">
            <li>Subscriber hereby agrees that he/she will only use the App strictly in accordance with these Terms and Conditions and specifically that he/she will provide accurate and complete information in connection with establishing their subscription.</li>
            <li>Subscriber hereby agrees to update his/her information with Noble Edge Professional Services when required to do so.</li>
            <li>Subscriber hereby agrees that Noble Edge Professional Services cannot be held liable by the subscriber or any third party for direct or indirect financial loss, including, but not limited to, in the event of downtime.</li>
            <li>Subscriber hereby agrees that Noble Edge Professional Services cannot be held liable for misuse of his/her password, whether caused by his/her negligence, or by the password or by the Kompanion App being hacked.</li>
            <li>Subscriber hereby agrees that Noble Edge Professional Services cannot be held directly or indirectly liable for any loss of any kind in connection with terminating the Kompanion App subscription.</li>
            <li>Subscriber hereby agrees that Noble Edge Professional Services cannot be held liable for any loss of any kind in the event that the Kompanion App is partly or wholly unavailable.</li>
          </ol>

          {/* 7. Complaints */}
          <h3 className="font-bold text-[18px] mt-8 mb-2">7. Complaints</h3>
          <div className="space-y-4 text-[14px] leading-relaxed text-slate-700">
            <p>All inquiries will be forwarded to our Customer Service Unit at <strong>customerservice@nobleedgepro.com</strong>. Please allow up to 3 working days for a reply, especially in respect of technical issues.</p>
            <p>You can also send your complaint to <strong>technicalservice@nobleedgepro.com</strong> if you are not satisfied with the response made by our Customer Service Unit. Please resend your complaint and include the response from our Customer Service Unit and the reason why you disagree with the response of the Unit.</p>
            <p>To maintain a track of the issue, we encourage you to send your complaint from the same e-mail address as you used to contact our Customer Service Unit.</p>
            <p>Please note that only cases that have already been dealt with by our Customer Service Unit will be entertained by our Technical Service Unit.</p>
          </div>

          <div className="mt-8 bg-[#FFFBF0] border p-5">
            <p className="text-[14px] font-semibold">For and on behalf of:</p>
            <p className="text-[14px] font-bold mt-1">NOBLE EDGE PROFESSIONAL SERVICES</p>
            <p className="text-[14px] font-bold mt-3">DR. S. O. OKORIE</p>
            <p className="text-[13px] text-slate-600">CHIEF EXECUTIVE OFFICER</p>
            <p className="text-[13px] text-slate-600">+2348035116452</p>
          </div>
        </section>

        {/* ============ PART C: GENERAL ============ */}
        <section id="general" className="mb-10 border-t pt-10">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="text-[#C5A880]" size={20} />
            <h2 className="font-serif-luxury text-[28px] font-bold">Part C — General</h2>
          </div>
          <div className="space-y-4 text-[14px] leading-relaxed text-slate-700">
            <p><strong>C.1 Services &amp; Engagement.</strong> All consulting services are provided subject to a signed Engagement Planning Memorandum (EPM) or engagement letter, which will set out scope, deliverables, timelines, fees, and responsibilities.</p>
            <p><strong>C.2 Confidentiality.</strong> We sign annual statements of independence, conflict of interest &amp; confidentiality. Client information shared during an engagement will be treated as confidential and will not be disclosed except as required by law or with your consent.</p>
            <p><strong>C.3 Disclaimer &amp; Limitation of Liability.</strong> This Website is provided "as is" without warranties of any kind. To the fullest extent permitted by law, Noble Edge Professional Services shall not be liable for any indirect, incidental, or consequential loss arising from use of this Website or reliance on its content.</p>
            <p><strong>C.4 Governing Law.</strong> These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute shall be subject to the jurisdiction of the courts in Lagos State, Nigeria.</p>
            <p><strong>C.5 Changes.</strong> We may update these Terms from time to time. The updated version will be posted on this page with a revised Last Updated date. Continued use of the Website or Kompanion after changes constitutes acceptance.</p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t pt-10">
          <h2 className="font-serif-luxury text-[26px] font-bold mb-3">Contact Us</h2>
          <div className="flex items-start gap-3 bg-[#FFFBF0] p-5">
            <Mail className="text-[#C5A880] mt-0.5" size={18} />
            <p className="text-[14px] text-slate-700 leading-relaxed">For questions about these Terms, contact us at <strong>fornoble2@gmail.com</strong> / <strong>customerservice@nobleedgepro.com</strong> or <strong>+234 803 511 6452</strong>.<br/>Noble Edge Professional Services — Lagos Mainland, Nigeria. RC No. BN 2180354.</p>
          </div>
        </section>

        <p className="text-[12px] text-slate-500 mt-10 text-center">© 2026 Noble Edge Professional Services. All rights reserved.</p>
      </div>
    </div>
  );
}