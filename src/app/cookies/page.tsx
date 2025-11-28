import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";

export default function CookiePolicyPage() {
  return (
    <main>
      <AnimatedIndicatorNavbar />

      <section className="bg-neutral-950 text-white">
        <div className="container mx-auto max-w-3xl py-16 md:py-20">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Cookie Policy</h1>
          <p className="mt-4 text-white/80 text-base">This website is operated by mkc.bg (MKC Ltd.). We aim to use minimal cookies. We do not use tracking cookies. Any essential cookies are strictly necessary for the site to function.</p>

          <div className="mt-6 space-y-5">
            <section>
              <h2>1. What are Cookies?</h2>
              <p>Cookies are small text files placed on your device to ensure the website works properly and securely, and to remember certain preferences.</p>
            </section>
            <section>
              <h2>2. Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Strictly Necessary Cookies</strong>: required for basic functions like page navigation and secure areas. The website cannot function properly without these cookies.</li>
                <li><strong>Preference Cookies</strong> (if used): remember your settings such as language.</li>
              </ul>
            </section>
            <section>
              <h2>3. Third-Party Cookies</h2>
              <p>We do not use third-party analytics or advertising cookies.</p>
            </section>
            <section>
              <h2>4. Managing Cookies</h2>
              <p>You can manage or delete cookies through your browser settings. Disabling strictly necessary cookies may affect site functionality.</p>
            </section>
            <section>
              <h2>5. Contact</h2>
              <p>For cookie-related questions, contact MKC Ltd. at <a href="mailto:office@mkc.bg" className="text-blue-400 hover:underline">office@mkc.bg</a>.</p>
            </section>
          </div>
        </div>
      </section>

      <NewsletterFooter />
    </main>
  );
}