import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <AnimatedIndicatorNavbar />

      <section className="bg-neutral-950 text-white">
        <div className="container mx-auto max-w-3xl py-16 md:py-20">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-white/80 text-base">This website is operated by mkc.bg (MKC Ltd.). We do not collect personal data other than the email you provide via the contact form, which is used solely to respond to your inquiry.</p>

          <div className="mt-6 space-y-5">
            <section>
              <h2>1. Data Controller</h2>
              <p>MKC Ltd. ("mkc.bg") acts as the data controller. Contact: <a href="mailto:office@mkc.bg" className="text-blue-400 hover:underline">office@mkc.bg</a>.</p>
            </section>
            <section>
              <h2>2. Personal Data We Process</h2>
              <p>We process only the information you submit through the contact form: name, email, and your message. Optional fields (phone, company, interest) are processed only if provided.</p>
            </section>
            <section>
              <h2>3. Purpose and Legal Basis</h2>
              <p>Purpose: to respond to your inquiry and maintain basic correspondence. Legal basis: our legitimate interests and/or your request prior to entering into a contract (GDPR Art. 6(1)(b)/(f)).</p>
            </section>
            <section>
              <h2>4. Retention</h2>
              <p>We retain inquiry emails and records only as long as needed to resolve your request, and to maintain basic business records, after which they are deleted.</p>
            </section>
            <section>
              <h2>5. Sharing</h2>
              <p>We do not sell your data. We may use standard service providers to operate this website (e.g., hosting, email), bound by confidentiality and data processing agreements.</p>
            </section>
            <section>
              <h2>6. Your Rights</h2>
              <p>You may request access, rectification, or deletion of your data; object to processing; and lodge a complaint with your local supervisory authority. To exercise rights, email <a href="mailto:office@mkc.bg" className="text-blue-400 hover:underline">office@mkc.bg</a>.</p>
            </section>
            <section>
              <h2>7. Cookies</h2>
              <p>We do not use tracking cookies. Essential cookies, if any, are strictly necessary for the site to function. See our Cookie Policy for details.</p>
            </section>
            <section>
              <h2>8. Contact</h2>
              <p>For privacy questions, contact MKC Ltd. at <a href="mailto:office@mkc.bg" className="text-blue-400 hover:underline">office@mkc.bg</a>.</p>
            </section>
          </div>
        </div>
      </section>

      <NewsletterFooter />
    </main>
  );
}