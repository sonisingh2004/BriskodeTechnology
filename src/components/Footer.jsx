export default function Footer() {
  return (
    <footer className="relative px-6 py-20 border-t border-white/10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-radial opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/assets/logo.png" alt="Briskode Technology" className="h-12 mb-4" />
            <p className="text-gray-400 leading-relaxed mb-4">
              Building high-impact digital experiences for modern brands.
            </p>
            <div className="text-gray-400 text-sm">
              <p className="font-semibold text-blue-500 mb-2">ADDRESS</p>
              <p>Near Care Hospital, Chandrasekharpur,</p>
              <p>Bhubaneswar, Odisha 751001</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div>
                <p className="font-semibold text-blue-500 mb-2">EMAIL</p>
                <p className="mb-1">briskodetechnology@gmail.com</p>
                <p>hr@briskodetechnology.com</p>
              </div>
              <div>
                <p className="font-semibold text-blue-500 mb-2">PHONE NO.</p>
                <p className="mb-1">+91 9348354248</p>
                <p>+91 8117856483</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Briskode Technology Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
