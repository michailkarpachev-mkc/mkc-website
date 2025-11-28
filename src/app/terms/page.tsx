import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";

export default function TermsOfServicePage() {
  return (
    <main>
      <AnimatedIndicatorNavbar />

      <section className="bg-neutral-950 text-white">
        <div className="container mx-auto max-w-3xl py-16 md:py-20">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-white/80 text-base">These Terms of Service ("Terms") govern your use of mkc.bg operated by MKC Ltd. By accessing or using the website, you agree to these Terms.</p>

          <div className="mt-6 space-y-5">
            <section>
              <h2>1. Operator</h2>
              <p>The website mkc.bg is operated by MKC Ltd. Contact: <a href="mailto:office@mkc.bg" className="text-blue-400 hover:underline">office@mkc.bg</a>.</p>
            </section>
            <section>
              <h2>2. Services</h2>
              <p>Information provided on this website is for general informational purposes regarding our consultancy and project management services. It does not constitute an offer or professional advice. Any engagement is subject to a written agreement.</p>
            </section>
            <section>
              <h2>3. User Obligations</h2>
              <p>You agree not to misuse the website, attempt unauthorized access, or engage in activities that disrupt service. You must provide accurate information when contacting us.</p>
            </section>
            <section>
              <h2>4. Intellectual Property</h2>
              <p>All content on mkc.bg, including text, graphics, and logos, is owned by MKC Ltd. or its licensors and is protected by applicable intellectual property laws.</p>
            </section>
            <section>
              <h2>5. Liability</h2>
              <p>MKC Ltd. provides the website on an "as is" basis without warranties. We are not liable for indirect or consequential damages arising from your use of the website.</p>
            </section>
            <section>
              <h2>6. Third-Party Links</h2>
              <p>Links to third-party sites are provided for convenience only. We are not responsible for their content or practices.</p>
            </section>
            <section>
              <h2>7. Changes</h2>
              <p>We may update these Terms from time to time. Continued use of the website after changes constitutes acceptance of the updated Terms.</p>
            </section>
            <section>
              <h2>8. Contact</h2>
              <p>For questions about these Terms, contact MKC Ltd. at <a href="mailto:office@mkc.bg" className="text-blue-400 hover:underline">office@mkc.bg</a>.</p>
            </section>
          </div>
        </div>
      </section>

      <NewsletterFooter />
    </main>
  );
}