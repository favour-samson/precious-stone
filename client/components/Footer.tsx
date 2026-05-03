import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">RCCG Precious Stone Parish (Area Headquarters)</h3>
            <p className="text-gray-400 mb-4 text-sm">
              A community of believers devoted to worship, fellowship, and service.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1Ky6CrUmiB/" className="text-white hover:text-opacity-80 transition">
                <FaFacebook/>
              </a>
              <a href="https://www.tiktok.com/@rccgpreciousstoneparish" className="text-white hover:text-opacity-80 transition">
                <FaTiktok/>
              </a>
              <a href="https://www.youtube.com/@rccgpreciousstoneparish?si=g9fy6uARVDVrU7W3" className="text-white hover:text-opacity-80 transition">
                <BsYoutube/>
              </a>
                <a href="https://www.instagram.com/rccgpreciousstoneparish?igsh=MWN0bnNxdGV4dGxoeA==" className="text-white hover:text-opacity-80 transition">
                <BsInstagram/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              {/* <li>
                <Link to="/sermons" className="text-gray-400 hover:text-white transition">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition">
                  Events
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Getting Involved */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/connect" className="text-gray-400 hover:text-white transition">
                  Connect
                </Link>
              </li>
              <li>
                <Link to="/giving" className="text-gray-400 hover:text-white transition">
                  Give
                </Link>
              </li>
              {/* <li>
                <Link to="/prayer-requests" className="text-gray-400 hover:text-white transition">
                  Prayer Requests
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white transition">
                  Resources
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">09113747467</p>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">rccgpreciousstoneparish@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="text-white flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">Ajila Road, Elebu-Akuru, Ibadan, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 RCCG Precious Stone Parish (Area Headquarters). All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
