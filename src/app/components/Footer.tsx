import { Link } from "react-router";
import { Mail, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../assets/images/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                alt="Neelmonilata (NEEL) House"
                className="h-20 w-auto object-contain rounded-full"
              />
              <span className="text-2xl text-white">Neelmonilata (NEEL) House</span>
            </div>
            <p className="text-sm mb-4">
              Advancing mental and emotional well-being through music, arts, and
              culture inspired by the legacy of Nobel Laureate Rabindranath Tagore.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:info@neelhouse.org"
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-amber-500 transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-amber-500 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-amber-500 transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@neelhouse.org"
                  className="hover:text-amber-500 transition-colors"
                >
                  info@neelhouse.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Neelmonilata (NEEL) House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}