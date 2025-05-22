import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ZYBERAX",
  description: "Find answers to common questions about ZYBERAX products, shipping, returns, and more.",
  keywords: "FAQ, frequently asked questions, zyberax help, shipping info, return policy",
};

export default function FAQPage() {
  return (
    <main className="bg-[#080808] min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-light text-white mb-8 mt-12">Frequently Asked Questions</h1>
        <div className="w-16 h-px bg-[#7888FF] mb-12"></div>
        
        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-[#A0A0A0] mb-12">
            Find answers to the most commonly asked questions about our products, services, and policies. 
            If you don't see your question answered here, please <Link href="/contact" className="text-[#7888FF] hover:underline">contact us</Link>.
          </p>
          
          {/* PRODUCTS FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-light text-white mb-8 pb-2 border-b border-[#222222]">Products</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">What materials do you use in your clothing?</h3>
                <p className="text-[#A0A0A0]">
                  We use a blend of premium fabrics selected for both comfort and durability. Our signature pieces feature technical fabrics with moisture-wicking properties, breathable meshes, and sustainable blends. Each product page contains detailed information about the specific materials used in that item.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">How do I find my size?</h3>
                <p className="text-[#A0A0A0]">
                  We provide detailed size guides on each product page. Our sizes generally run true to standard sizing, but we recommend checking the measurements provided to ensure the best fit. If you're between sizes, we typically recommend sizing up for a more comfortable fit.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">Are your products sustainable?</h3>
                <p className="text-[#A0A0A0]">
                  Sustainability is a core value at Zyberus Private Limited. We're committed to minimizing our environmental impact through responsible material sourcing, ethical manufacturing processes, and recyclable packaging. We're continuously improving our practices and increasing the percentage of sustainable materials in our collections.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">How should I care for my ZYBERAX items?</h3>
                <p className="text-[#A0A0A0]">
                  Each item comes with specific care instructions on the label. Generally, we recommend machine washing in cold water with similar colors and tumble drying on low heat. For technical fabrics and special pieces, hand washing or dry cleaning may be recommended to maintain their quality and appearance.
                </p>
              </div>
            </div>
          </section>
          
          {/* ORDERS & SHIPPING FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-light text-white mb-8 pb-2 border-b border-[#222222]">Orders & Shipping</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">How long will it take to receive my order?</h3>
                <p className="text-[#A0A0A0]">
                  Domestic orders (within India) are typically processed within 1-2 business days and delivered within 3-5 business days. International shipping times vary by location, generally taking 7-14 business days after processing. You'll receive a tracking number when your order ships so you can monitor its progress.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">Do you ship internationally?</h3>
                <p className="text-[#A0A0A0]">
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Customs duties and taxes may apply for international orders and are the responsibility of the customer. These fees are not included in our shipping charges and will be collected by the delivery carrier.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">How can I track my order?</h3>
                <p className="text-[#A0A0A0]">
                  Once your order ships, you'll receive an email with a tracking number and link. You can also track your order by logging into your account on our website and viewing your order history. If you have any issues tracking your order, please contact our customer service team.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">Can I modify or cancel my order?</h3>
                <p className="text-[#A0A0A0]">
                  Orders can be modified or canceled within 2 hours of placement. After that time, our fulfillment process begins and we cannot guarantee changes can be made. Please contact our customer service team immediately if you need to make changes to your order. Once an order has shipped, it cannot be canceled.
                </p>
              </div>
            </div>
          </section>
          
          {/* RETURNS & EXCHANGES FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-light text-white mb-8 pb-2 border-b border-[#222222]">Returns & Exchanges</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">What is your return policy?</h3>
                <p className="text-[#A0A0A0]">
                  We offer a 30-day return policy for unworn items in original condition with tags attached. Returns must be initiated within 30 days of delivery. Sale items marked as final sale are not eligible for return. Please note that return shipping costs are the responsibility of the customer unless the item is defective or we made an error.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">How do I initiate a return or exchange?</h3>
                <p className="text-[#A0A0A0]">
                  To initiate a return or exchange, log into your account, go to your order history, and select the "Return or Exchange" option for the relevant order. Follow the instructions to generate a return authorization and shipping label. You can also contact our customer service team for assistance with returns or exchanges.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">How long does it take to process a return?</h3>
                <p className="text-[#A0A0A0]">
                  Once we receive your return, it typically takes 3-5 business days to inspect and process. Refunds are issued to the original payment method and may take an additional 2-10 business days to appear on your statement, depending on your financial institution. For exchanges, once the return is processed, the new item will be shipped with standard shipping times.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">What if I received a defective item?</h3>
                <p className="text-[#A0A0A0]">
                  If you receive a defective item, please contact our customer service team immediately with photos of the defect. We'll promptly arrange for a replacement or refund, including covering return shipping costs. Defective items should be reported within 7 days of receipt for the best resolution.
                </p>
              </div>
            </div>
          </section>
          
          {/* ACCOUNT & PAYMENT FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-light text-white mb-8 pb-2 border-b border-[#222222]">Account & Payment</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">What payment methods do you accept?</h3>
                <p className="text-[#A0A0A0]">
                  We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and various digital wallets including Apple Pay and Google Pay. For customers in India, we also support UPI payments and net banking.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">Is my payment information secure?</h3>
                <p className="text-[#A0A0A0]">
                  Yes, we use industry-standard SSL encryption to protect your payment information. We do not store complete credit card details on our servers. All payment processing is handled by secure, PCI-compliant payment processors. Your security is our top priority.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">Do I need to create an account to make a purchase?</h3>
                <p className="text-[#A0A0A0]">
                  While creating an account is recommended for the best experience, we also offer a guest checkout option. Creating an account allows you to track orders, save favorite items, and complete future purchases more quickly.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">How can I update my account information?</h3>
                <p className="text-[#A0A0A0]">
                  You can update your account information by logging into your account and navigating to the "Account Settings" or "Profile" section. There you can modify your contact information, shipping addresses, payment methods, and communication preferences.
                </p>
              </div>
            </div>
          </section>
          
          {/* MISCELLANEOUS FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-light text-white mb-8 pb-2 border-b border-[#222222]">Other Information</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">Do you have physical stores?</h3>
                <p className="text-[#A0A0A0]">
                  Currently, we operate exclusively online. However, we occasionally host pop-up shops and participate in fashion events. Follow us on social media or subscribe to our newsletter to stay informed about any in-person shopping opportunities.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">How can I collaborate with ZYBERAX?</h3>
                <p className="text-[#A0A0A0]">
                  We're always open to collaborations with like-minded creators, influencers, and brands. If you're interested in collaborating, please email us at hi@zyberus.in with details about your proposal, audience, and vision for the partnership.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">Are you hiring?</h3>
                <p className="text-[#A0A0A0]">
                  We're always looking for talented individuals to join our team. Visit the Careers section of our website to see current openings, or send your resume to careers@zyberus.in if you think you'd be a good fit for our company.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl font-light text-white mb-2">How can I stay updated on new releases?</h3>
                <p className="text-[#A0A0A0]">
                  The best way to stay informed about new releases, restocks, and exclusive offers is to subscribe to our newsletter. You can also follow us on social media platforms where we regularly post updates and behind-the-scenes content.
                </p>
              </div>
            </div>
          </section>
          
          <div className="mt-16 p-8 bg-[#0A0A0A] border border-[#222222] rounded-sm">
            <h3 className="text-xl font-light text-white mb-4">Still have questions?</h3>
            <p className="text-[#A0A0A0] mb-6">
              Our customer service team is here to help. Contact us through any of the following channels:
            </p>
            <ul className="space-y-2 text-[#A0A0A0]">
              <li>Email: <a href="mailto:hi@zyberus.in" className="text-[#7888FF] hover:underline">hi@zyberus.in</a></li>
              <li>Phone: +91 8674967492</li>
              <li>Hours: Monday-Friday, 9am-6pm IST</li>
              <li><Link href="/contact" className="text-[#7888FF] hover:underline">Contact Form</Link></li>
            </ul>
          </div>
          
          <div className="border-t border-[#222222] pt-8 mt-16">
            <Link href="/" className="text-[#7888FF] hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 