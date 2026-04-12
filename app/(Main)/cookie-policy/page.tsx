import Link from "next/link";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how WebnGraphic uses cookies to enhance your browsing experience and protect your privacy.",
  alternates: {
    canonical: "https://webngraphic.com/cookie-policy",
  },
};
export default function CookiePolicyPage() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
  const address = process.env.NEXT_PUBLIC_ADDRESS;
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-5 py-12 md:py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Cookie Policy
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Last updated: March 1, 2025
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">What Are Cookies</h2>
            <p className="text-muted-foreground">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners to make their websites work, or to work more
              efficiently, as well as to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">How We Use Cookies</h2>
            <p className="mb-4 text-muted-foreground">
              We use cookies for a variety of reasons detailed below.
              Unfortunately, in most cases, there are no industry standard
              options for disabling cookies without completely disabling the
              functionality and features they add to this site. It is
              recommended that you leave on all cookies if you are not sure
              whether you need them or not in case they are used to provide a
              service that you use.
            </p>
            <p className="text-muted-foreground">
              You can prevent the setting of cookies by adjusting the settings
              on your browser (see your browser Help for how to do this). Be
              aware that disabling cookies will affect the functionality of this
              and many other websites that you visit. Disabling cookies will
              usually result in also disabling certain functionality and
              features of this site. Therefore it is recommended that you do not
              disable cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">The Cookies We Set</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium">
                  Account related cookies
                </h3>
                <p className="text-muted-foreground">
                  If you create an account with us then we will use cookies for
                  the management of the signup process and general
                  administration. These cookies will usually be deleted when you
                  log out however in some cases they may remain afterwards to
                  remember your site preferences when logged out.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium">
                  Login related cookies
                </h3>
                <p className="text-muted-foreground">
                  We use cookies when you are logged in so that we can remember
                  this fact. This prevents you from having to log in every
                  single time you visit a new page. These cookies are typically
                  removed or cleared when you log out to ensure that you can
                  only access restricted features and areas when logged in.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium">
                  Forms related cookies
                </h3>
                <p className="text-muted-foreground">
                  When you submit data to through a form such as those found on
                  contact pages or comment forms cookies may be set to remember
                  your user details for future correspondence.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium">
                  Site preferences cookies
                </h3>
                <p className="text-muted-foreground">
                  In order to provide you with a great experience on this site
                  we provide the functionality to set your preferences for how
                  this site runs when you use it. In order to remember your
                  preferences we need to set cookies so that this information
                  can be called whenever you interact with a page is affected by
                  your preferences.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Third Party Cookies</h2>
            <p className="mb-4 text-muted-foreground">
              In some special cases we also use cookies provided by trusted
              third parties. The following section details which third party
              cookies you might encounter through this site.
            </p>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                This site uses Google Analytics which is one of the most
                widespread and trusted analytics solution on the web for helping
                us to understand how you use the site and ways that we can
                improve your experience. These cookies may track things such as
                how long you spend on the site and the pages that you visit so
                we can continue to produce engaging content.
              </li>
              <li>
                From time to time we test new features and make subtle changes
                to the way that the site is delivered. When we are still testing
                new features these cookies may be used to ensure that you
                receive a consistent experience whilst on the site whilst
                ensuring we understand which optimizations our users appreciate
                the most.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">More Information</h2>
            <p className="mb-4 text-muted-foreground">
              Hopefully that has clarified things for you and as was previously
              mentioned if there is something that you aren&apos;t sure whether
              you need or not it&apos;s usually safer to leave cookies enabled
              in case it does interact with one of the features you use on our
              site.
            </p>
            <p className="text-muted-foreground">
              If you are still looking for more information then you can contact
              us through one of our preferred contact methods:
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
