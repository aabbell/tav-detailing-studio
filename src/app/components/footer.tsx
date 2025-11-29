export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6">

        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">Tav Car Wash</h2>
          <p className="max-w-xs">
            Professional car wash and detailing services.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Basic Wash</li>
            <li className="hover:text-blue-400 cursor-pointer">Premium Wash</li>
            <li className="hover:text-blue-400 cursor-pointer">Deluxe Wash</li>
            <li className="hover:text-blue-400 cursor-pointer">Monthly Plans</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Services</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>0923625008</li>
            <li>email.com</li>
            <li>Available 24/7 anytime</li>
          </ul>
        </div>

      </div>

      <div className="text-center mt-10 pt-6 border-t border-gray-700 text-gray-500">
        © 2025 Tav car wash and detailing, All Rights Reserved
      </div>
    </footer>
  );
}
