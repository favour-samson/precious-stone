import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PagePlaceholderProps {
  title: string;
  description: string;
}

export default function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">{title}</h1>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-white mb-12">
            <p className="text-lg leading-relaxed mb-8">{description}</p>
            <p className="text-base opacity-90">
              We're currently building out this page with comprehensive content. Check back soon or
              use the contact form to request information about this section.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What's Coming</h2>
            <p className="text-gray-700 mb-8">
              This page is being actively developed with detailed information, resources, and tools to serve you better.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                In the meantime, you can:
              </p>
              <ul className="space-y-2 text-left inline-block">
                <li className="text-gray-700 flex items-center gap-2">
                  <ArrowRight size={18} className="text-primary flex-shrink-0" />
                  Visit our homepage for highlights
                </li>
                <li className="text-gray-700 flex items-center gap-2">
                  <ArrowRight size={18} className="text-primary flex-shrink-0" />
                  Contact us with questions
                </li>
                <li className="text-gray-700 flex items-center gap-2">
                  <ArrowRight size={18} className="text-primary flex-shrink-0" />
                  Explore our other sections
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Back to Home
            </Link>
            <Link
              to="/connect"
              className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
