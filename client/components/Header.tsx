import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function useIsChurchLive(): boolean {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function checkLive() {
      try {
        const res = await fetch("/api/stream/live-status");
        const data = await res.json();
        if (mounted) setIsLive(Boolean(data.isLive));
      } catch {
        if (mounted) setIsLive(false);
      }
    }

    checkLive();
    const interval = setInterval(checkLive, 45_000);

    // Mobile browsers throttle/pause setInterval while the tab is
    // backgrounded — recheck immediately on return so the badge doesn't go
    // stale while the phone is locked or another app is in front.
    function handleVisibility() {
      if (document.visibilityState === "visible") checkLive();
    }
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      mounted = false;
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return isLive;
}

function LiveBadge() {
  return (
    <span className="flex items-center gap-1 px-1.5 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
      </span>
      LIVE
    </span>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLive = useIsChurchLive();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Ministries", href: "/ministries" },
    // { label: "Sermons", href: "/sermons" },
    // { label: "Events", href: "/events" },
    { label: "Give", href: "/giving" },
    { label: "Connect", href: "/connect" },
    { label: "Watch Live", href: "/live" },
    { label: "Video Call", href: "/video-call" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-serif font-bold text-xl text-primary"
          >
            <img
              src="/images/logo.png"
              alt="RCCG Precious Stone Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
                {link.href === "/live" && isLive && <LiveBadge />}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/connect"
              className="px-5 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Visit Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                {link.href === "/live" && isLive && <LiveBadge />}
              </Link>
            ))}
            <div className="px-4 py-2">
              <Link
                to="/connect"
                className="block text-center px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Visit Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
