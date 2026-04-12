/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
export const metadata = {
  title: "Privacy Policy",
  description:
    "Read WebNGraphic's Privacy Policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://webngraphic.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
  const address = process.env.NEXT_PUBLIC_ADDRESS;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Last updated: March 1, 2025
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
            <p className="text-muted-foreground">
              At WebnGraphics, we respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law
              protects you.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              The Data We Collect About You
            </h2>
            <p className="mb-4 text-muted-foreground">
              Personal data, or personal information, means any information
              about an individual from which that person can be identified. It
              does not include data where the identity has been removed
              (anonymous data).
            </p>
            <p className="text-muted-foreground">
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Identity Data</strong> includes first name, last name,
                username or similar identifier.
              </li>
              <li>
                <strong>Contact Data</strong> includes billing address, delivery
                address, email address and telephone numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP)
                address, your login data, browser type and version, time zone
                setting and location, browser plug-in types and versions,
                operating system and platform, and other technology on the
                devices you use to access this website.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you
                use our website, products and services.
              </li>
              <li>
                <strong>Marketing and Communications Data</strong> includes your
                preferences in receiving marketing from us and our third parties
                and your communication preferences.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              How We Use Your Personal Data
            </h2>
            <p className="mb-4 text-muted-foreground">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Data Security</h2>
            <p className="text-muted-foreground">
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors and other third parties who have a business need to
              know. They will only process your personal data on our
              instructions and they are subject to a duty of confidentiality.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Data Retention</h2>
            <p className="text-muted-foreground">
              We will only retain your personal data for as long as reasonably
              necessary to fulfill the purposes we collected it for, including
              for the purposes of satisfying any legal, regulatory, tax,
              accounting or reporting requirements. We may retain your personal
              data for a longer period in the event of a complaint or if we
              reasonably believe there is a prospect of litigation in respect to
              our relationship with you.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Your Legal Rights</h2>
            <p className="mb-4 text-muted-foreground">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data. These include the right
              to:
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              Changes to the Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new privacy policy on this page
              and updating the "Last updated" date at the top of this privacy
              policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:
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
