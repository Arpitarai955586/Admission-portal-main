"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                🎓
              </div>
              <span className="text-lg font-semibold text-gray-900">
                CollegeAdmission
              </span>
            </div>

            <p className="text-sm text-gray-600 max-w-xs">
              Making higher education accessible and transparent for everyone.
              Your trusted partner in the admission process.
            </p>

            <div className="flex gap-3 mt-5">
              {["IG", "TW", "LI"].map((item) => (
                <span
                  key={item}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press & Media</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Blog</li>
              <li>College List</li>
              <li>Scholarship Guide</li>
              <li>Success Stories</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for the latest admission tips.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="mt-3 w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2024 CollegeAdmission Portal. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-gray-700 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-gray-700 cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-gray-700 cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
