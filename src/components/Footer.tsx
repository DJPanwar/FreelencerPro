import { Heart } from "lucide-react";
import { navigationLinks, socialLinks } from "../constant/constant";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* About */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold text-white mb-4 inline-block"
            >
              Freelance<span className="text-emerald-500">Pro</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional freelance services specializing in web development,
              design, and digital marketing. Turning ideas into digital
              realities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-emerald-500"></span>
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:pl-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-emerald-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "UI/UX Design",
                "Digital Marketing",
                "Branding",
                "SEO Optimization",
                "Mobile Development",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:pl-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-emerald-500"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400">
                  <span className="block text-white mb-1">Email:</span>
                  freelencerpro@gmail.com
                </p>
              </li>
              <li>
                <p className="text-gray-400">
                  <span className="block text-white mb-1">Phone:</span>
                  +91 9521723305
                </p>
              </li>
              <li>
                <p className="text-gray-400">
                  <span className="block text-white mb-1">Location:</span>
                  Pilani, Rajasthan
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} FreelancePro. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-emerald-500" /> in
            FreelencerPro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
