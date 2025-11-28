"use client"

export const NewsletterFooter = () => {
  return (
    <section className="bg-black py-10 relative">
      <div className="container mx-auto max-w-6xl px-5 md:px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Legal Links Only */}
          <nav aria-label="Legal" className="w-full">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white">
              <li>
                <a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="/gdpr" className="hover:text-orange-400 transition-colors">GDPR</a>
              </li>
            </ul>
          </nav>

          <p className="text-center text-sm text-white">
            © 2024 mkc Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};