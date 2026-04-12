/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
export const metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for WebNGraphic to understand your rights, responsibilities, and the conditions of using our services.",
  alternates: {
    canonical: "https://webngraphic.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
  const address = process.env.NEXT_PUBLIC_ADDRESS;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Terms of Service
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Last updated: March 1, 2025
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to WebnGraphics. These Terms of Service govern your use of
              our website and the services we provide. By accessing our website
              or using our services, you agree to these Terms. Please read them
              carefully.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. Definitions</h2>
            <p className="mb-4 text-muted-foreground">
              In these Terms of Service:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>"We", "us", "our"</strong> refers to WebnGraphics.
              </li>
              <li>
                <strong>"Website"</strong> refers to the website operated by
                WebnGraphics.
              </li>
              <li>
                <strong>"Services"</strong> refers to the web development and
                graphic design services provided by WebnGraphics.
              </li>
              <li>
                <strong>"You", "your"</strong> refers to the user or viewer of
                our Website or recipient of our Services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. Services</h2>
            <p className="mb-4 text-muted-foreground">
              WebnGraphics provides web development and graphic design services.
              The specific details, deliverables, and timelines for each project
              will be outlined in a separate agreement or statement of work.
            </p>
            <p className="text-muted-foreground">
              We reserve the right to refuse service to anyone for any reason at
              any time.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Payment Terms</h2>
            <p className="mb-4 text-muted-foreground">
              Payment terms will be specified in the project agreement. Unless
              otherwise stated, we require a 50% deposit before beginning work,
              with the remaining balance due upon completion of the project.
            </p>
            <p className="text-muted-foreground">
              All invoices are due within 30 days of receipt. Late payments may
              incur a late fee of 1.5% per month.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              5. Intellectual Property Rights
            </h2>
            <p className="mb-4 text-muted-foreground">
              Upon full payment, you will own the final deliverables provided by
              WebnGraphics, except for:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                Third-party materials (such as stock photos or fonts) which are
                subject to their own licenses.
              </li>
              <li>
                Our working files and processes, which remain our property
                unless specifically included in the project agreement.
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              We reserve the right to display and link to your completed project
              as part of our portfolio and to write about the project on
              websites, in magazine articles, and in books about design.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              6. Client Responsibilities
            </h2>
            <p className="mb-4 text-muted-foreground">You agree to:</p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                Provide accurate and timely information and materials necessary
                for the completion of the project.
              </li>
              <li>
                Review and provide feedback on deliverables within the timeframe
                specified in the project agreement.
              </li>
              <li>
                Obtain any necessary permissions or licenses for materials you
                provide to us to include in your project.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              WebnGraphics shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly, or
              any loss of data, use, goodwill, or other intangible losses,
              resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">8. Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate the service agreement with written
              notice. If you terminate the agreement, you agree to pay for all
              services rendered up to the termination date. If we terminate the
              agreement, we will provide you with all completed work to date,
              and you agree to pay for all services rendered up to the
              termination date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">9. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. We will
              provide notice of significant changes by posting the new Terms on
              our website. Your continued use of our services after such
              modifications will constitute your acknowledgment of the modified
              Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">10. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law provisions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">11. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4">
              <p className="text-muted-foreground">Email: {emailAddress}</p>
              <p className="text-muted-foreground">Phone: {phoneNumber}</p>
              <p className="text-muted-foreground">Address: {address}</p>
            </div>
          </section>

          <div className="pt-6 text-center">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
