import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="text-center px-4">
        <h1 className="text-6xl mb-4 text-gray-900">404</h1>
        <p className="text-2xl mb-8 text-gray-700">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
        >
          <Home size={20} />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
