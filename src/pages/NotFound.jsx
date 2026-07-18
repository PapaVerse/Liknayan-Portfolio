import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-7xl font-bold text-[#071A4A]">404</h1>
        <p className="mt-4 text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}