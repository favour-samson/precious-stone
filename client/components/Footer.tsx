import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">RCCG Precious Stone Area HQ</h3>
            <p className="text-gray-400 mb-4 text-sm">
              A community of believers devoted to worship, fellowship, and service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-primary hover:text-opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.324-.202-4.113-.202-4.08 0-6.882 2.484-6.882 7.049v1.953z" />
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7v10M9 12h6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="text-gray-400 hover:text-primary transition">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-primary transition">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Getting Involved */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/connect" className="text-gray-400 hover:text-primary transition">
                  Connect
                </Link>
              </li>
              <li>
                <Link to="/giving" className="text-gray-400 hover:text-primary transition">
                  Give
                </Link>
              </li>
              <li>
                <Link to="/prayer-requests" className="text-gray-400 hover:text-primary transition">
                  Prayer Requests
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-primary transition">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">+234 (0) 701 000 0000</p>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">info@rccgpreciousstone.org</p>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">123 Main Street, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 RCCG Precious Stone Area HQ. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
