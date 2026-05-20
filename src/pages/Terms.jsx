import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const sections = [
  {
    id: "use-of-website",
    title: "1. Use of Website",
    content:
      "You agree to use this website only for lawful purposes and in accordance with these Terms and Conditions. You must not misuse our services, attempt unauthorized access, distribute harmful software, or interfere with the website’s functionality.",
  },
  {
    id: "user-accounts",
    title: "2. User Accounts",
    content:
      "Certain services may require account registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities performed under your account.",
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property",
    content:
      "All website content including text, graphics, logos, icons, software, UI/UX designs, and branding are the intellectual property of Briskode Technology unless otherwise stated. Unauthorized use or reproduction is prohibited.",
  },
  {
    id: "payments-billing",
    title: "4. Payments & Billing",
    content:
      "All payments for services, subscriptions, or digital products must be completed through approved payment methods. We reserve the right to update pricing, billing cycles, or discontinue services at any time.",
  },
  {
    id: "privacy-policy",
    title: "5. Privacy Policy",
    content:
      "Your privacy is important to us. Any personal information collected through our platform is handled according to our Privacy Policy. By using our services, you consent to data collection and usage practices described therein.",
  },
  {
    id: "limitation-of-liability",
    title: "6. Limitation of Liability",
    content:
      "Briskode Technology shall not be held liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services, website, or products.",
  },
  {
    id: "third-party-services",
    title: "7. Third-Party Services",
    content:
      "Our platform may contain links or integrations with third-party services. We are not responsible for the content, privacy practices, or operations of any third-party websites or tools.",
  },
  {
    id: "termination",
    title: "8. Termination",
    content:
      "We reserve the right to suspend or terminate access to our services if users violate these terms, misuse the platform, or engage in harmful activities.",
  },
  {
    id: "changes-to-terms",
    title: "9. Changes to Terms",
    content:
      "We may modify these Terms and Conditions periodically. Continued use of the website after changes are posted constitutes acceptance of the updated terms.",
  },
  {
    id: "governing-law",
    title: "10. Governing Law",
    content:
      "These Terms and Conditions shall be governed and interpreted in accordance with applicable laws and regulations without regard to conflict of law principles.",
  },
];

export default function Terms() {
  return (
    <PageTransition>
      <div className="bg-gradient-to-b from-[#00061A] via-[#020B2D] to-black min-h-screen text-white">
        <div className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1E40AF20,transparent_40%)]"></div>

          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-24 relative z-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20 mb-6">
              Legal Information
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Terms & <span className="text-blue-500">Conditions</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
              Welcome to Briskode Technology. By accessing or using our platform,
              services, or website, you agree to follow the terms outlined below.
              Please read them carefully before using our services.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <p className="text-sm text-gray-400">Last Updated</p>
                <p className="font-semibold">May 2026</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <p className="text-sm text-gray-400">Company</p>
                <p className="font-semibold">Briskode Technology</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <p className="text-sm text-gray-400">Applicable Region</p>
                <p className="font-semibold">Global</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20 grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold mb-5">Quick Navigation</h3>

              <ul className="space-y-4 text-gray-300">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block hover:text-blue-400 transition"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-10">
            {sections.map((section) => (
              <div
                id={section.id}
                key={section.id}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/30 transition duration-300"
              >
                <h2 className="text-3xl font-semibold mb-5 text-white">
                  {section.title}
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions regarding these Terms & Conditions,
                feel free to contact the Briskode Technology support team.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
