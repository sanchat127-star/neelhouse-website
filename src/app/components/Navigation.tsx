import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Inspiration", path: "/inspiration" },
    { name: "Our Approach", path: "/approach" },
    { name: "Programs", path: "/programs" },
    { name: "Quiz", path: "/quiz" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Rabindra Learning Hub", path: "/explore-learning" },
    { name: "Rabindra Mosaic", path: "/experience-legacy" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-slate-600 border-b border-slate-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo centered at top */}
        <div className="flex justify-center items-center py-4 border-b border-slate-500">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.jpg?" 
              alt="NEEL House Logo" 
              className="h-12 w-12 object-cover rounded-full"
            />
            <span className="text-2xl text-white">Neelmonilata (NEEL) House</span>
          </Link>
        </div>

        {/* Navigation items */}
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center items-center w-full space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm transition-colors whitespace-nowrap ${
                  isActive(item.path)
                    ? "text-amber-500 border-b-2 border-amber-500"
                    : "text-gray-300 hover:text-amber-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-100 hover:text-amber-400 hover:bg-slate-500 ml-auto"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-slate-600 border-t border-slate-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base ${
                  isActive(item.path)
                    ? "text-amber-400 bg-slate-500"
                    : "text-gray-100 hover:text-amber-400 hover:bg-slate-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}