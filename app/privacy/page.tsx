import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ZYBERAX",
  description: "Learn about ZYBERAX's privacy practices, data collection policies, and how we protect your information.",
  keywords: "privacy policy, data protection, ZYBERAX privacy",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#080808] min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-light text-white mb-8 mt-12">Privacy Policy</h1>
        <div className="w-16 h-px bg-[#7888FF] mb-12"></div>
        
        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-[#A0A0A0] mb-8">
            Last Updated: May 20, 2023
          </p>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">1. Introduction</h2>
            <p className="text-[#A0A0A0] mb-4">
              ZYBERAX ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected to ZYBERAX (collectively, the "Site").
            </p>
            <p className="text-[#A0A0A0] mb-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-light text-white mb-3">Personal Data</h3>
            <p className="text-[#A0A0A0] mb-4">
              We may collect personal identification information from users in various ways, including, but not limited to, when users visit our site, register on the site, place an order, subscribe to the newsletter, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information, and other details.
            </p>
            <h3 className="text-lg font-light text-white mb-3">Non-Personal Data</h3>
            <p className="text-[#A0A0A0] mb-4">
              We may collect non-personal identification information about users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about users' means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-[#A0A0A0] mb-4">
              We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
            </p>
            <ul className="list-disc pl-6 text-[#A0A0A0] mb-4 space-y-2">
              <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
              <li>To improve our website in order to better serve you.</li>
              <li>To allow us to better service you in responding to your customer service requests.</li>
              <li>To administer a contest, promotion, survey or other site feature.</li>
              <li>To quickly process your transactions.</li>
              <li>To ask for ratings and reviews of services or products.</li>
              <li>To follow up with you after correspondence (live chat, email or phone inquiries).</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">4. Cookies</h2>
            <p className="text-[#A0A0A0] mb-4">
              We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
            </p>
            <p className="text-[#A0A0A0] mb-4">
              You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">5. Third-Party Disclosure</h2>
            <p className="text-[#A0A0A0] mb-4">
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">6. Security</h2>
            <p className="text-[#A0A0A0] mb-4">
              We implement a variety of security measures when a user places an order, enters, submits, or accesses their information to maintain the safety of your personal information. All transactions are processed through a gateway provider and are not stored or processed on our servers.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-[#A0A0A0] mb-4">
              ZYBERAX has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-xl font-light text-white mb-4">8. Contact Us</h2>
            <p className="text-[#A0A0A0] mb-4">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
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