import type { Metadata } from "next";
import { PageShell } from "@/components/layout";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Forbes Court Reporting Services, LLC.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)] first:mt-0">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-7 text-[var(--slate)]">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mt-4 list-disc space-y-1 pl-6 leading-7 text-[var(--slate)]">{children}</ul>;
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-[0.035em] text-[var(--primary)] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[var(--slate)]">
            Forbes Court Reporting Services, LLC. &mdash; Effective Date: June 1, 2026
          </p>

          <div className="mt-10 border-t border-[var(--line)] pt-10">

            <H2>Introduction</H2>
            <P>
              Forbes Court Reporting Services, LLC. (&ldquo;Forbes Court Reporting,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website forbescourtreporting.com. We are a family-owned court reporting company based in Batavia, New York, and we take your privacy seriously.
            </P>
            <P>
              This Privacy Policy explains what information we collect when you visit our website, how we use it, and who we share it with. We have written it in plain language because we believe you deserve to understand exactly what happens with your information.
            </P>
            <P>
              If you have any questions after reading this policy, please contact us directly.
            </P>

            <H2>Information We Collect</H2>
            <P>We collect only the information necessary to serve you.</P>
            <P><strong className="text-[var(--primary)]">Information you provide through our contact and scheduling form</strong></P>
            <P>When you submit a service request or scheduling inquiry on our website, we collect the information you enter, which may include:</P>
            <UL>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your organization or firm name</li>
              <li>The type of proceeding you are scheduling</li>
              <li>Requested date and time</li>
              <li>County and courthouse location</li>
              <li>Urgency level and transcript requirements</li>
              <li>Any additional notes you choose to include</li>
            </UL>
            <P>
              When submitted through our main contact and scheduling form, this information is transmitted to us via Resend, an email delivery service, and delivered directly to our business email inbox. Availability inquiry forms on the coverage page open a pre-filled draft in your default email client, which you review and send yourself. In either case, we do not store your form submission in any database. Once received, your data exists only in our email inbox.
            </P>
            <P><strong className="text-[var(--primary)]">Information collected automatically</strong></P>
            <P>
              We do not use cookies, analytics trackers, advertising pixels, or session tracking of any kind on our website. We do not create user accounts and we do not collect login credentials.
            </P>
            <P>
              When you visit our website, our hosting provider Vercel may automatically record standard server log data including your IP address, browser type, pages visited, and date and time of your visit. We do not actively review or use these logs except to diagnose technical problems.
            </P>

            <H2>How We Use Your Information</H2>
            <P>
              We use the information you submit through our contact form solely to respond to your inquiry and, if applicable, to schedule court reporting services for you. We do not use your information for marketing, advertising, or any purpose unrelated to fulfilling your service request.
            </P>
            <P>
              We do not sell your personal information. We do not share it with data brokers. We do not use it to build profiles or target you with advertisements.
            </P>

            <H2>Third-Party Services</H2>
            <P>Our website relies on a small number of third-party services to function.</P>
            <P><strong className="text-[var(--primary)]">Resend</strong></P>
            <P>
              When you submit our contact form, the data you enter is transmitted to our email inbox through Resend, an email delivery platform. Resend processes your form submission for the purpose of delivering it to us and does not use your information for its own marketing or advertising purposes. Review Resend&apos;s privacy policy at resend.com/legal/privacy-policy.
            </P>
            <P><strong className="text-[var(--primary)]">Stripe</strong></P>
            <P>
              Our website includes a &ldquo;Pay Invoice Now&rdquo; link that redirects you to Stripe&apos;s payment platform. All payment processing is handled entirely by Stripe. Forbes Court Reporting does not receive, process, or store any payment card data. Review Stripe&apos;s privacy policy at stripe.com/privacy.
            </P>
            <P><strong className="text-[var(--primary)]">Vercel</strong></P>
            <P>
              Our website is hosted on Vercel, which may collect server log data including IP addresses as part of normal hosting operations. Review Vercel&apos;s privacy policy at vercel.com/legal/privacy-policy.
            </P>
            <P><strong className="text-[var(--primary)]">Google Street View Static API</strong></P>
            <P>
              Our website displays photographs of courthouse locations using the Google Street View Static API. This API is called from our server, not directly from your browser, so your IP address is not sent to Google. Review Google&apos;s privacy policy at policies.google.com/privacy.
            </P>
            <P><strong className="text-[var(--primary)]">OpenStreetMap</strong></P>
            <P>
              Our interactive county maps load tiles from OpenStreetMap servers. When your browser loads the map, tile requests are sent directly from your browser to OpenStreetMap&apos;s tile servers, which may log your IP address. Review OpenStreetMap&apos;s privacy policy at wiki.osmfoundation.org/wiki/Privacy_Policy.
            </P>

            <H2>Data Retention</H2>
            <P>
              Because we do not store form submissions in a database, your information exists in our email inbox from the point your form is submitted. We retain email communications for as long as necessary to manage our business relationship with you and to comply with applicable recordkeeping obligations. If you would like us to delete correspondence containing your personal information, please contact us and we will accommodate your request to the extent reasonably practical.
            </P>

            <H2>Your Rights</H2>
            <P><strong className="text-[var(--primary)]">New York residents</strong></P>
            <P>
              You have the right to know what personal information we hold about you and to request that we delete it. Because we collect very limited information and do not maintain a database, fulfilling these requests is straightforward. Please contact us at the information below.
            </P>
            <P><strong className="text-[var(--primary)]">European Union visitors</strong></P>
            <P>
              If you are located in the European Union, you have rights under the General Data Protection Regulation (GDPR), including the right to access, correct, delete, or restrict the processing of your personal data. Our legal basis for processing your contact form submission is your consent. You also have the right to lodge a complaint with your local data protection authority.
            </P>

            <H2>Security</H2>
            <P>
              Our website is served over HTTPS, which encrypts data in transit between your browser and our server. Form submissions are transmitted through Resend over encrypted connections. Because we do not maintain a database of your information, many common data security risks do not apply to us. However, no method of electronic transmission is completely secure.
            </P>

            <H2>Children&apos;s Privacy</H2>
            <P>
              Our website is not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has submitted personal information through our website, please contact us so we can remove it.
            </P>

            <H2>Changes to This Policy</H2>
            <P>
              We may update this Privacy Policy from time to time if our practices change or if applicable law requires it. When we make changes, we will update the effective date at the top of this page. Continued use of our website after a policy update constitutes your acceptance of the revised terms.
            </P>

            <H2>Contact Information</H2>
            <P>
              If you have questions about this Privacy Policy, want to know what information we hold about you, or would like to request deletion of your information, please reach out:
            </P>
            <div className="mt-4 rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] p-6 text-sm leading-7 text-[var(--slate)]">
              <p className="font-semibold text-[var(--primary)]">Forbes Court Reporting Services, LLC.</p>
              <p>21 Woodcrest Drive, Batavia, New York 14020</p>
              <p>
                Email: <a href="mailto:kelly@forbescourtreporting.com" className="text-[var(--primary)] underline underline-offset-2">kelly@forbescourtreporting.com</a>
              </p>
              <p>
                Phone: <a href="tel:5853438612" className="text-[var(--primary)] underline underline-offset-2">585-343-8612</a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
