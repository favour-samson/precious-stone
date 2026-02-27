import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-serif font-bold text-gray-900 mb-2">404</h1>
            <p className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</p>
          </div>

          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Sorry, we couldn't find the page you're looking for. It may have been moved or is still being developed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Return to Home
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
};

export default NotFound;
