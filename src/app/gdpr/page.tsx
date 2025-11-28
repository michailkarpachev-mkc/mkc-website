export default function GDPRPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto max-w-3xl py-16 md:py-20">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">GDPR Compliance</h1>
        <p className="mt-4 text-muted">
          This page explains how mkc.bg ("MKC Ltd.", "we", "us", "our") complies with the General Data Protection
          Regulation (GDPR) (EU) 2016/679.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Data Controller</h2>
        <p className="mt-2 text-muted">
          MKC Ltd. (mkc.bg) acts as the data controller for any personal data you provide to us. For any inquiries
          regarding data protection, please contact us at: <a href="mailto:office@mkc.bg" className="text-accent underline underline-offset-4">office@mkc.bg</a>.
        </p>

        <h2 className="mt-10 text-xl font-semibold">What data we collect</h2>
        <p className="mt-2 text-muted">
          We do not collect personal data while you browse this website. The only personal data we collect is the
          email address (and optional details you choose to provide) when you submit our contact form.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Purpose and legal basis</h2>
        <p className="mt-2 text-muted">
          We process the data you submit via the contact form solely for the purpose of responding to your inquiry.
          The legal basis is our legitimate interest in providing customer support and/or taking steps at your
          request prior to entering into a contract (GDPR Art. 6(1)(f) and 6(1)(b)).
        </p>

        <h2 className="mt-10 text-xl font-semibold">Data retention</h2>
        <p className="mt-2 text-muted">
          We keep contact form submissions only as long as necessary to handle your inquiry and for record-keeping
          consistent with our legitimate interests and legal obligations.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Your rights</h2>
        <ul className="mt-2 list-disc pl-6 text-muted space-y-1">
          <li>Access your personal data</li>
          <li>Request rectification or erasure</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
          <li>Lodge a complaint with your local supervisory authority</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold">Data sharing</h2>
        <p className="mt-2 text-muted">
          We do not sell your personal data. We may share it only with service providers strictly necessary to
          operate the website or respond to your inquiry, under appropriate data processing agreements.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Cookies and tracking</h2>
        <p className="mt-2 text-muted">
          This website does not use cookies for tracking or analytics beyond what is strictly necessary for basic
          functionality. For more details, see our <a href="/cookies" className="text-accent underline underline-offset-4">Cookie Policy</a>.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-muted">
          If you have questions about this notice or wish to exercise your rights, contact us at
          {" "}
          <a href="mailto:office@mkc.bg" className="text-accent underline underline-offset-4">office@mkc.bg</a>.
        </p>

        <p className="mt-10 text-xs text-muted">Last updated: {new Date().toLocaleDateString()}</p>
      </section>
    </main>
  );
}