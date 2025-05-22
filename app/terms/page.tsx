import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | ZYBERAX",
  description: "ZYBERAX's terms and conditions, user agreement, and rules for using our products and services.",
  keywords: "terms and conditions, legal, ZYBERAX terms of service, terms of use",
};

export default function TermsAndConditions() {
  return (
    <main className="bg-[#080808] min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-light text-white mb-8 mt-12">Terms & Conditions</h1>
        <div className="w-16 h-px bg-[#7888FF] mb-12"></div>
        
        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-[#A0A0A0] mb-8">
            Last Updated: May 20, 2023
          </p>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-[#A0A0A0] mb-4">
              By accessing and using our website, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these Terms and Conditions, you must not access or use our website.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">2. Intellectual Property Rights</h2>
            <p className="text-[#A0A0A0] mb-4">
              The ZYBERAX website and its original content, features, and functionality are owned by ZYBERAX and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-[#A0A0A0] mb-4">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without prior written consent.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">3. User Accounts</h2>
            <p className="text-[#A0A0A0] mb-4">
              When you create an account with us, you guarantee that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the website.
            </p>
            <p className="text-[#A0A0A0] mb-4">
              You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">4. Products and Services</h2>
            <h3 className="text-lg font-light text-white mb-3">Product Information</h3>
            <p className="text-[#A0A0A0] mb-4">
              We strive to display as accurately as possible the colors, features, specifications, and details of the products available on our website. However, we cannot guarantee that your computer's display of any color will be accurate, as this depends on your monitor and settings.
            </p>
            <h3 className="text-lg font-light text-white mb-3">Prices</h3>
            <p className="text-[#A0A0A0] mb-4">
              Prices for products are subject to change without notice. We reserve the right at any time to modify or discontinue any product or service without notice at any time. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the service.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">5. Orders and Payments</h2>
            <p className="text-[#A0A0A0] mb-4">
              We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address.
            </p>
            <p className="text-[#A0A0A0] mb-4">
              You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">6. Shipping and Delivery</h2>
            <p className="text-[#A0A0A0] mb-4">
              Shipping and delivery times are estimates only and cannot be guaranteed. We are not liable for any delays in shipments. Risk of loss and title for items purchased from our website pass to you upon delivery of the items to the carrier.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">7. Returns and Refunds</h2>
            <p className="text-[#A0A0A0] mb-4">
              Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we cannot offer you a full refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
            </p>
            <p className="text-[#A0A0A0] mb-4">
              Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers, or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">8. Prohibited Activities</h2>
            <p className="text-[#A0A0A0] mb-4">
              You may use our website only for lawful purposes and in accordance with these Terms. You agree not to use our website:
            </p>
            <ul className="list-disc pl-6 text-[#A0A0A0] mb-4 space-y-2">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which, as determined by us, may harm the Company or users of the website or expose them to liability.</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-[#A0A0A0] mb-4">
              Your use of the website, its content, and any services or items obtained through the website is at your own risk. The website, its content, and any services or items obtained through the website are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">10. Limitation of Liability</h2>
            <p className="text-[#A0A0A0] mb-4">
              In no event will the Company, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website, any websites linked to it, any content on the website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">11. Indemnification</h2>
            <p className="text-[#A0A0A0] mb-4">
              You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the website.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">12. Governing Law</h2>
            <p className="text-[#A0A0A0] mb-4">
              These Terms and Conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">13. Changes to Terms</h2>
            <p className="text-[#A0A0A0] mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">14. Contact Us</h2>
            <p className="text-[#A0A0A0] mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-[#A0A0A0] mb-4">
              <strong className="text-[#F5F5F5]">ZYBERAX</strong><br />
              Email: hi@zyberus.in<br />
              Phone: +91 8674967492
            </p>
          </section>
          
          <div className="border-t border-[#222222] pt-8 mt-8">
            <Link href="/" className="text-[#7888FF] hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 